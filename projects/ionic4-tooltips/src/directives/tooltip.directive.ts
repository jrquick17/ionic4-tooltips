import {
  AfterViewInit,
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';

import {Platform} from '@ionic/angular';

import {TooltipBox} from '../components/tooltip-box/tooltip-box.component';
import {TooltipController} from '../controllers/tooltip.cotroller';
import {TooltipEvent} from '../models/tooltip-event.model';

@Directive({
  selector: '[tooltip]',
})
export class TooltipDirective implements OnInit, AfterViewInit, OnDestroy {
  @Input() debounce:number = 0;
  @Input() desktopEvent:TooltipEvent = TooltipEvent.HOVER;
  @Input() event:TooltipEvent;
  @Input() hideOthers:boolean;
  @Input() leftOffset:number;
  @Input() mobileEvent:TooltipEvent;
  @Input() positionV:string;
  @Input() positionH:string;
  @Input() role:string;
  @Input() tooltip:string;
  @Input() tooltipHtml:string;
  @Input() tooltipStyles:{ [key:string]:string; } = {};
  @Input() topOffset:number;

  @Input()
  set navTooltip(val:boolean) {
    this._navTooltip = typeof val !== 'boolean' || val !== false;
  }

  get navTooltip():boolean {
    return this._navTooltip;
  }

  @Input()
  set arrow(val:boolean) {
    this._arrow = typeof val !== 'boolean' || val !== false;
  }

  get arrow():boolean {
    return this._arrow;
  }

  @Input() duration = 3000;

  @Input()
  set active(val:boolean) {
    this._active = typeof val !== 'boolean' || val !== false;

    this._active && this.canShow ?
      this.showTooltip() : this.removeTooltip();
  }

  get active():boolean {
    return this._active;
  }

  private _active:boolean = false;
  private _arrow:boolean = false;
  private _canShow:boolean = true;
  private _debouncedPromise = null;
  private _navTooltip:boolean = false;
  private _tooltipElement:ComponentRef<TooltipBox>;
  private _tooltipTimeout:any;

  constructor(
    private el:ElementRef,
    private appRef:ApplicationRef,
    private platform:Platform,
    private cfr:ComponentFactoryResolver,
    private tooltipCtrl:TooltipController,
    private vcr:ViewContainerRef,
  ) {

  }

  ngOnInit() {
    if (typeof this.event === 'undefined') {
      this.event = this.platform.is('mobile') ?
        this.mobileEvent : this.desktopEvent;
    }

    // if the timer hasn't expired or active is true when the component gets destroyed, the tooltip will remain in the DOM
    // this removes it
    this.removeTooltip();
  }

  /**
   * Show the tooltip immediately after initiating view if set to
   */
  ngAfterViewInit() {
    if (this._active) {
      this.trigger();
    }
  }

  ngOnDestroy() {
    if (this._tooltipElement && typeof this._tooltipElement.destroy === 'function') {
      this._tooltipElement.destroy();
    }
  }

  /**
   * Set the canShow property
   * Ensure that tooltip is shown only if the tooltip string is not falsey
   */
  set canShow(show: boolean) {
    this._canShow = show;
  }

  /**
   * @return TRUE if the tooltip can be shown
   */
  get canShow():boolean {
    return this._canShow &&
      ((typeof this.tooltip === 'string' && this.tooltip !== '')
        || (typeof this.tooltipHtml === 'string' && this.tooltipHtml !== ''));
  }

  /**
   * Handles the click/press event and shows a tooltip.
   * If a tooltip already exists, it will just reset it's timer.
   */
  trigger():void {
    if (this.canShow) {
      if (this._tooltipElement) {
        this._resetTimer();
      } else {
        this.showTooltip();
      }
    }
  }

  /**
   * Creates a new tooltip component and adjusts it's properties to show properly.
   */
  showTooltip():void {
    this._debouncedPromise = setTimeout(
      () => {
        this._debouncedPromise = null;

        this._createTooltipComponent();

        const tooltipComponent: TooltipBox = this._tooltipElement.instance;

        tooltipComponent.role = this.role;
        tooltipComponent.text = this.tooltip;
        tooltipComponent.tooltipStyles = this.tooltipStyles;
        tooltipComponent.tooltipHtml = this.tooltipHtml;
        tooltipComponent.init.then(() => {
          const tooltipPosition = this._getTooltipPosition();

          tooltipComponent.posLeft = tooltipPosition.left;
          tooltipComponent.posTop = tooltipPosition.top;

          tooltipComponent.fadeState = 'visible';

          if (this.arrow) {
            let arrowPosition;
            if (this.positionV === 'top') {
              arrowPosition = this.positionH === 'center' ? 'bottom-center' : 'bottom';
            } else if (this.positionV === 'bottom') {
              arrowPosition = this.positionH === 'center' ? 'top-center' : 'top';
            } else if (this.positionH === 'left') {
              arrowPosition = 'right';
            } else {
              arrowPosition = 'left';
            }
            tooltipComponent.arrow = arrowPosition;
          }

          if (!this._active) {
            this._tooltipTimeout = setTimeout(
              this.removeTooltip.bind(this),
              this.duration,
            );
          }
        });
      },
      this.debounce
    );
  }

  @HostListener('click')
  onClick():void {
    if (this.event === TooltipEvent.CLICK) {
      this.trigger();
    }
  }

  @HostListener('press')
  onPress():void {
    if (this.event === TooltipEvent.PRESS) {
      this.trigger();
    }
  }

  @HostListener('mouseenter')
  onMouseEnter():void {
    if (this.event === TooltipEvent.HOVER) {
      this.active = true;
    }
  }

  @HostListener('mouseleave')
  onMouseLeave():void {
    if (this.event === TooltipEvent.HOVER) {
      this.active = false;
    }
  }

  private _createTooltipComponent() {
    const componentFactory = this.cfr.resolveComponentFactory(TooltipBox);
    this._tooltipElement = this.vcr.createComponent(componentFactory);
    this.tooltipCtrl.addTooltip(this);
  }

  private _getTooltipPosition() {
    const tooltipNativeElement:HTMLElement = this._tooltipElement.instance.getNativeElement(),
      el:HTMLElement = this.el.nativeElement,
      rect:ClientRect = el.getBoundingClientRect();

    let positionLeft:number,
      positionTop:number,
      spacing = 10;

    if (this.navTooltip) {
      this.positionV = 'bottom';
      this.arrow = false;
      spacing = 20;
    }

    if (this.positionH === 'right') {
      positionLeft = rect.right + spacing;
    } else if (this.positionH === 'left') {
      positionLeft = rect.left - spacing - tooltipNativeElement.offsetWidth;
      // -79, 19
    } else if (this.positionH === 'center') {
      positionLeft = rect.left - (tooltipNativeElement.offsetWidth - el.offsetWidth) / 2; 
    } else if (this.navTooltip) {
      positionLeft = rect.left + el.offsetWidth / 2;
    } else {
      positionLeft = rect.left;
    }


    if (this.positionV === 'top') {
      positionTop = rect.top - spacing - tooltipNativeElement.offsetHeight;
    } else if (this.positionV === 'bottom') {
      positionTop = rect.bottom + spacing;
    } else {
      positionTop = rect.top + el.offsetHeight / 2 - tooltipNativeElement.offsetHeight / 2;
    }

    this.topOffset++;
    if (this.topOffset) {
      positionTop += +this.topOffset;
    }

    this.leftOffset++;
    if (this.leftOffset) {
      positionLeft += +this.leftOffset;
    }

    if (positionLeft + tooltipNativeElement.offsetWidth + spacing > this.platform.width()) {
      positionLeft = this.platform.width() - tooltipNativeElement.offsetWidth - spacing;
    } else if (positionLeft + tooltipNativeElement.offsetWidth - spacing < 0) {
      positionLeft = spacing;
    }

    if (positionTop + tooltipNativeElement.offsetHeight + spacing > this.platform.height()) {
      positionTop = this.platform.height() - tooltipNativeElement.offsetHeight - spacing;
    } else if (positionTop + tooltipNativeElement.offsetHeight - spacing < 0) {
      positionTop = spacing;
    }

    return {
      left: positionLeft,
      top:  positionTop,
    };
  }

  removeTooltip() {
    if (this._debouncedPromise) {
      clearTimeout(this._debouncedPromise);

      this._debouncedPromise = null;
    }

    if (!this._tooltipElement) {
      this._tooltipElement = undefined;
      this._tooltipTimeout = undefined;
      return;
    }

    this._tooltipElement.instance.fadeState = 'invisible';

    this.canShow = false;

    // wait for animation to finish then clear everything out
    setTimeout(
      () => {
        if (
          this._tooltipElement &&
          typeof this._tooltipElement.destroy === 'function'
        ) {
          this._tooltipElement.destroy();
        }
        this.tooltipCtrl.removeTooltip(this);
        this._tooltipElement = this._tooltipTimeout = undefined;
        this.canShow = true;
      },
      300
    );
  }

  private _resetTimer():void {
    clearTimeout(this._tooltipTimeout);
    this._tooltipTimeout = setTimeout(() => {
      this.active = false;
    }, this.duration);
  }
}
