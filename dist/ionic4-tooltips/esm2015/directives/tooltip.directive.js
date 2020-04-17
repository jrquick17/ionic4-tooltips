/**
 * @fileoverview added by tsickle
 * Generated from: directives/tooltip.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Directive, ElementRef, HostListener, Input, ViewContainerRef, } from '@angular/core';
import { Platform } from '@ionic/angular';
import { TooltipBox } from '../components/tooltip-box/tooltip-box.component';
import { TooltipController } from '../controllers/tooltip.cotroller';
import { TooltipEvent } from '../models/tooltip-event.model';
export class TooltipDirective {
    /**
     * @param {?} el
     * @param {?} appRef
     * @param {?} platform
     * @param {?} cfr
     * @param {?} tooltipCtrl
     * @param {?} vcr
     */
    constructor(el, appRef, platform, cfr, tooltipCtrl, vcr) {
        this.el = el;
        this.appRef = appRef;
        this.platform = platform;
        this.cfr = cfr;
        this.tooltipCtrl = tooltipCtrl;
        this.vcr = vcr;
        this.debounce = 0;
        this.desktopEvent = TooltipEvent.HOVER;
        this.tooltipStyles = {};
        this.duration = 3000;
        this._active = false;
        this._arrow = false;
        this._canShow = true;
        this._debouncedPromise = null;
        this._navTooltip = false;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set navTooltip(val) {
        this._navTooltip = typeof val !== 'boolean' || val !== false;
    }
    /**
     * @return {?}
     */
    get navTooltip() {
        return this._navTooltip;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set arrow(val) {
        this._arrow = typeof val !== 'boolean' || val !== false;
    }
    /**
     * @return {?}
     */
    get arrow() {
        return this._arrow;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set active(val) {
        this._active = typeof val !== 'boolean' || val !== false;
        this._active && this.canShow ?
            this.showTooltip() : this.removeTooltip();
    }
    /**
     * @return {?}
     */
    get active() {
        return this._active;
    }
    /**
     * @return {?}
     */
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
     * @return {?}
     */
    ngAfterViewInit() {
        if (this._active) {
            this.trigger();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._tooltipElement && typeof this._tooltipElement.destroy === 'function') {
            this._tooltipElement.destroy();
        }
    }
    /**
     * Set the canShow property
     * Ensure that tooltip is shown only if the tooltip string is not falsey
     * @param {?} show
     * @return {?}
     */
    set canShow(show) {
        this._canShow = show;
    }
    /**
     * @return {?} TRUE if the tooltip can be shown
     */
    get canShow() {
        return this._canShow &&
            ((typeof this.tooltip === 'string' && this.tooltip !== '')
                || (typeof this.tooltipHtml === 'string' && this.tooltipHtml !== ''));
    }
    /**
     * Handles the click/press event and shows a tooltip.
     * If a tooltip already exists, it will just reset it's timer.
     * @return {?}
     */
    trigger() {
        if (this.canShow) {
            if (this._tooltipElement) {
                this._resetTimer();
            }
            else {
                this.showTooltip();
            }
        }
    }
    /**
     * Creates a new tooltip component and adjusts it's properties to show properly.
     * @return {?}
     */
    showTooltip() {
        this._debouncedPromise = setTimeout((/**
         * @return {?}
         */
        () => {
            this._debouncedPromise = null;
            this._createTooltipComponent();
            /** @type {?} */
            const tooltipComponent = this._tooltipElement.instance;
            tooltipComponent.role = this.role;
            tooltipComponent.text = this.tooltip;
            tooltipComponent.tooltipStyles = this.tooltipStyles;
            tooltipComponent.tooltipHtml = this.tooltipHtml;
            tooltipComponent.init.then((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const tooltipPosition = this._getTooltipPosition();
                tooltipComponent.posLeft = tooltipPosition.left;
                tooltipComponent.posTop = tooltipPosition.top;
                tooltipComponent.fadeState = 'visible';
                if (this.arrow) {
                    /** @type {?} */
                    let arrowPosition;
                    if (this.positionV === 'top') {
                        arrowPosition = this.positionH === 'center' ? 'bottom-center' : 'bottom';
                    }
                    else if (this.positionV === 'bottom') {
                        arrowPosition = this.positionH === 'center' ? 'top-center' : 'top';
                    }
                    else if (this.positionH === 'left') {
                        arrowPosition = 'right';
                    }
                    else {
                        arrowPosition = 'left';
                    }
                    tooltipComponent.arrow = arrowPosition;
                }
                if (!this._active) {
                    this._tooltipTimeout = setTimeout(this.removeTooltip.bind(this), this.duration);
                }
            }));
        }), this.debounce);
    }
    /**
     * @return {?}
     */
    onClick() {
        if (this.event === TooltipEvent.CLICK) {
            this.trigger();
        }
    }
    /**
     * @return {?}
     */
    onPress() {
        if (this.event === TooltipEvent.PRESS) {
            this.trigger();
        }
    }
    /**
     * @return {?}
     */
    onMouseEnter() {
        if (this.event === TooltipEvent.HOVER) {
            this.active = true;
        }
    }
    /**
     * @return {?}
     */
    onMouseLeave() {
        if (this.event === TooltipEvent.HOVER) {
            this.active = false;
        }
    }
    /**
     * @private
     * @return {?}
     */
    _createTooltipComponent() {
        /** @type {?} */
        const componentFactory = this.cfr.resolveComponentFactory(TooltipBox);
        this._tooltipElement = this.vcr.createComponent(componentFactory);
        this.tooltipCtrl.addTooltip(this);
    }
    /**
     * @private
     * @return {?}
     */
    _getTooltipPosition() {
        /** @type {?} */
        const tooltipNativeElement = this._tooltipElement.instance.getNativeElement();
        /** @type {?} */
        const el = this.el.nativeElement;
        /** @type {?} */
        const rect = el.getBoundingClientRect();
        /** @type {?} */
        let positionLeft;
        /** @type {?} */
        let positionTop;
        /** @type {?} */
        let spacing = 10;
        if (this.navTooltip) {
            this.positionV = 'bottom';
            this.arrow = false;
            spacing = 20;
        }
        if (this.positionH === 'right') {
            positionLeft = rect.right + spacing;
        }
        else if (this.positionH === 'left') {
            positionLeft = rect.left - spacing - tooltipNativeElement.offsetWidth;
            // -79, 19
        }
        else if (this.positionH === 'center') {
            positionLeft = rect.left - (tooltipNativeElement.offsetWidth - el.offsetWidth) / 2;
        }
        else if (this.navTooltip) {
            positionLeft = rect.left + el.offsetWidth / 2;
        }
        else {
            positionLeft = rect.left;
        }
        if (this.positionV === 'top') {
            positionTop = rect.top - spacing - tooltipNativeElement.offsetHeight;
        }
        else if (this.positionV === 'bottom') {
            positionTop = rect.bottom + spacing;
        }
        else {
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
        }
        else if (positionLeft + tooltipNativeElement.offsetWidth - spacing < 0) {
            positionLeft = spacing;
        }
        if (positionTop + tooltipNativeElement.offsetHeight + spacing > this.platform.height()) {
            positionTop = this.platform.height() - tooltipNativeElement.offsetHeight - spacing;
        }
        else if (positionTop + tooltipNativeElement.offsetHeight - spacing < 0) {
            positionTop = spacing;
        }
        return {
            left: positionLeft,
            top: positionTop,
        };
    }
    /**
     * @return {?}
     */
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
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this._tooltipElement &&
                typeof this._tooltipElement.destroy === 'function') {
                this._tooltipElement.destroy();
            }
            this.tooltipCtrl.removeTooltip(this);
            this._tooltipElement = this._tooltipTimeout = undefined;
            this.canShow = true;
        }), 300);
    }
    /**
     * @private
     * @return {?}
     */
    _resetTimer() {
        clearTimeout(this._tooltipTimeout);
        this._tooltipTimeout = setTimeout((/**
         * @return {?}
         */
        () => {
            this.active = false;
        }), this.duration);
    }
}
TooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tooltip]',
            },] }
];
/** @nocollapse */
TooltipDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ApplicationRef },
    { type: Platform },
    { type: ComponentFactoryResolver },
    { type: TooltipController },
    { type: ViewContainerRef }
];
TooltipDirective.propDecorators = {
    debounce: [{ type: Input }],
    desktopEvent: [{ type: Input }],
    event: [{ type: Input }],
    hideOthers: [{ type: Input }],
    leftOffset: [{ type: Input }],
    mobileEvent: [{ type: Input }],
    positionV: [{ type: Input }],
    positionH: [{ type: Input }],
    role: [{ type: Input }],
    tooltip: [{ type: Input }],
    tooltipHtml: [{ type: Input }],
    tooltipStyles: [{ type: Input }],
    topOffset: [{ type: Input }],
    navTooltip: [{ type: Input }],
    arrow: [{ type: Input }],
    duration: [{ type: Input }],
    active: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }],
    onPress: [{ type: HostListener, args: ['press',] }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};
if (false) {
    /** @type {?} */
    TooltipDirective.prototype.debounce;
    /** @type {?} */
    TooltipDirective.prototype.desktopEvent;
    /** @type {?} */
    TooltipDirective.prototype.event;
    /** @type {?} */
    TooltipDirective.prototype.hideOthers;
    /** @type {?} */
    TooltipDirective.prototype.leftOffset;
    /** @type {?} */
    TooltipDirective.prototype.mobileEvent;
    /** @type {?} */
    TooltipDirective.prototype.positionV;
    /** @type {?} */
    TooltipDirective.prototype.positionH;
    /** @type {?} */
    TooltipDirective.prototype.role;
    /** @type {?} */
    TooltipDirective.prototype.tooltip;
    /** @type {?} */
    TooltipDirective.prototype.tooltipHtml;
    /** @type {?} */
    TooltipDirective.prototype.tooltipStyles;
    /** @type {?} */
    TooltipDirective.prototype.topOffset;
    /** @type {?} */
    TooltipDirective.prototype.duration;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype._active;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype._arrow;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype._canShow;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype._debouncedPromise;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype._navTooltip;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype._tooltipElement;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype._tooltipTimeout;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype.appRef;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype.cfr;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype.tooltipCtrl;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype.vcr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb25pYzQtdG9vbHRpcHMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL3Rvb2x0aXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVMLGNBQWMsRUFDZCx3QkFBd0IsRUFFeEIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQzNFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUszRCxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7Ozs7SUF1RDNCLFlBQ1UsRUFBYSxFQUNiLE1BQXFCLEVBQ3JCLFFBQWlCLEVBQ2pCLEdBQTRCLEVBQzVCLFdBQTZCLEVBQzdCLEdBQW9CO1FBTHBCLE9BQUUsR0FBRixFQUFFLENBQVc7UUFDYixXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsUUFBRyxHQUFILEdBQUcsQ0FBeUI7UUFDNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQzdCLFFBQUcsR0FBSCxHQUFHLENBQWlCO1FBNURyQixhQUFRLEdBQVUsQ0FBQyxDQUFDO1FBQ3BCLGlCQUFZLEdBQWdCLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFVL0Msa0JBQWEsR0FBNEIsRUFBRSxDQUFDO1FBcUI1QyxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBY2pCLFlBQU8sR0FBVyxLQUFLLENBQUM7UUFDeEIsV0FBTSxHQUFXLEtBQUssQ0FBQztRQUN2QixhQUFRLEdBQVcsSUFBSSxDQUFDO1FB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LDJDQUE0Qjs7Ozs7SUFHMUIsOEJBQXFCOzs7OztJQUNyQixrQ0FBNkI7Ozs7O0lBQzdCLG9DQUF5Qjs7Ozs7SUFDekIsK0JBQW9DOzs7OztJQUNwQyx1Q0FBcUM7Ozs7O0lBQ3JDLCtCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIEFwcGxpY2F0aW9uUmVmLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtQbGF0Zm9ybX0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5pbXBvcnQge1Rvb2x0aXBCb3h9IGZyb20gJy4uL2NvbXBvbmVudHMvdG9vbHRpcC1ib3gvdG9vbHRpcC1ib3guY29tcG9uZW50JztcbmltcG9ydCB7VG9vbHRpcENvbnRyb2xsZXJ9IGZyb20gJy4uL2NvbnRyb2xsZXJzL3Rvb2x0aXAuY290cm9sbGVyJztcbmltcG9ydCB7VG9vbHRpcEV2ZW50fSBmcm9tICcuLi9tb2RlbHMvdG9vbHRpcC1ldmVudC5tb2RlbCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0b29sdGlwXScsXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGRlYm91bmNlOm51bWJlciA9IDA7XG4gIEBJbnB1dCgpIGRlc2t0b3BFdmVudDpUb29sdGlwRXZlbnQgPSBUb29sdGlwRXZlbnQuSE9WRVI7XG4gIEBJbnB1dCgpIGV2ZW50OlRvb2x0aXBFdmVudDtcbiAgQElucHV0KCkgaGlkZU90aGVyczpib29sZWFuO1xuICBASW5wdXQoKSBsZWZ0T2Zmc2V0Om51bWJlcjtcbiAgQElucHV0KCkgbW9iaWxlRXZlbnQ6VG9vbHRpcEV2ZW50O1xuICBASW5wdXQoKSBwb3NpdGlvblY6c3RyaW5nO1xuICBASW5wdXQoKSBwb3NpdGlvbkg6c3RyaW5nO1xuICBASW5wdXQoKSByb2xlOnN0cmluZztcbiAgQElucHV0KCkgdG9vbHRpcDpzdHJpbmc7XG4gIEBJbnB1dCgpIHRvb2x0aXBIdG1sOnN0cmluZztcbiAgQElucHV0KCkgdG9vbHRpcFN0eWxlczp7IFtrZXk6c3RyaW5nXTpzdHJpbmc7IH0gPSB7fTtcbiAgQElucHV0KCkgdG9wT2Zmc2V0Om51bWJlcjtcblxuICBASW5wdXQoKVxuICBzZXQgbmF2VG9vbHRpcCh2YWw6Ym9vbGVhbikge1xuICAgIHRoaXMuX25hdlRvb2x0aXAgPSB0eXBlb2YgdmFsICE9PSAnYm9vbGVhbicgfHwgdmFsICE9PSBmYWxzZTtcbiAgfVxuXG4gIGdldCBuYXZUb29sdGlwKCk6Ym9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX25hdlRvb2x0aXA7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgYXJyb3codmFsOmJvb2xlYW4pIHtcbiAgICB0aGlzLl9hcnJvdyA9IHR5cGVvZiB2YWwgIT09ICdib29sZWFuJyB8fCB2YWwgIT09IGZhbHNlO1xuICB9XG5cbiAgZ2V0IGFycm93KCk6Ym9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Fycm93O1xuICB9XG5cbiAgQElucHV0KCkgZHVyYXRpb24gPSAzMDAwO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBhY3RpdmUodmFsOmJvb2xlYW4pIHtcbiAgICB0aGlzLl9hY3RpdmUgPSB0eXBlb2YgdmFsICE9PSAnYm9vbGVhbicgfHwgdmFsICE9PSBmYWxzZTtcblxuICAgIHRoaXMuX2FjdGl2ZSAmJiB0aGlzLmNhblNob3cgP1xuICAgICAgdGhpcy5zaG93VG9vbHRpcCgpIDogdGhpcy5yZW1vdmVUb29sdGlwKCk7XG4gIH1cblxuICBnZXQgYWN0aXZlKCk6Ym9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2FjdGl2ZTpib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2Fycm93OmJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY2FuU2hvdzpib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfZGVib3VuY2VkUHJvbWlzZSA9IG51bGw7XG4gIHByaXZhdGUgX25hdlRvb2x0aXA6Ym9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF90b29sdGlwRWxlbWVudDpDb21wb25lbnRSZWY8VG9vbHRpcEJveD47XG4gIHByaXZhdGUgX3Rvb2x0aXBUaW1lb3V0OmFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOkVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBhcHBSZWY6QXBwbGljYXRpb25SZWYsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTpQbGF0Zm9ybSxcbiAgICBwcml2YXRlIGNmcjpDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSB0b29sdGlwQ3RybDpUb29sdGlwQ29udHJvbGxlcixcbiAgICBwcml2YXRlIHZjcjpWaWV3Q29udGFpbmVyUmVmLFxuICApIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmV2ZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5ldmVudCA9IHRoaXMucGxhdGZvcm0uaXMoJ21vYmlsZScpID9cbiAgICAgICAgdGhpcy5tb2JpbGVFdmVudCA6IHRoaXMuZGVza3RvcEV2ZW50O1xuICAgIH1cblxuICAgIC8vIGlmIHRoZSB0aW1lciBoYXNuJ3QgZXhwaXJlZCBvciBhY3RpdmUgaXMgdHJ1ZSB3aGVuIHRoZSBjb21wb25lbnQgZ2V0cyBkZXN0cm95ZWQsIHRoZSB0b29sdGlwIHdpbGwgcmVtYWluIGluIHRoZSBET01cbiAgICAvLyB0aGlzIHJlbW92ZXMgaXRcbiAgICB0aGlzLnJlbW92ZVRvb2x0aXAoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSB0b29sdGlwIGltbWVkaWF0ZWx5IGFmdGVyIGluaXRpYXRpbmcgdmlldyBpZiBzZXQgdG9cbiAgICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5fYWN0aXZlKSB7XG4gICAgICB0aGlzLnRyaWdnZXIoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fdG9vbHRpcEVsZW1lbnQgJiYgdHlwZW9mIHRoaXMuX3Rvb2x0aXBFbGVtZW50LmRlc3Ryb3kgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuX3Rvb2x0aXBFbGVtZW50LmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBjYW5TaG93IHByb3BlcnR5XG4gICAqIEVuc3VyZSB0aGF0IHRvb2x0aXAgaXMgc2hvd24gb25seSBpZiB0aGUgdG9vbHRpcCBzdHJpbmcgaXMgbm90IGZhbHNleVxuICAgKi9cbiAgc2V0IGNhblNob3coc2hvdzogYm9vbGVhbikge1xuICAgIHRoaXMuX2NhblNob3cgPSBzaG93O1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4gVFJVRSBpZiB0aGUgdG9vbHRpcCBjYW4gYmUgc2hvd25cbiAgICovXG4gIGdldCBjYW5TaG93KCk6Ym9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NhblNob3cgJiZcbiAgICAgICgodHlwZW9mIHRoaXMudG9vbHRpcCA9PT0gJ3N0cmluZycgJiYgdGhpcy50b29sdGlwICE9PSAnJylcbiAgICAgICAgfHwgKHR5cGVvZiB0aGlzLnRvb2x0aXBIdG1sID09PSAnc3RyaW5nJyAmJiB0aGlzLnRvb2x0aXBIdG1sICE9PSAnJykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGhlIGNsaWNrL3ByZXNzIGV2ZW50IGFuZCBzaG93cyBhIHRvb2x0aXAuXG4gICAqIElmIGEgdG9vbHRpcCBhbHJlYWR5IGV4aXN0cywgaXQgd2lsbCBqdXN0IHJlc2V0IGl0J3MgdGltZXIuXG4gICAqL1xuICB0cmlnZ2VyKCk6dm9pZCB7XG4gICAgaWYgKHRoaXMuY2FuU2hvdykge1xuICAgICAgaWYgKHRoaXMuX3Rvb2x0aXBFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX3Jlc2V0VGltZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2hvd1Rvb2x0aXAoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyB0b29sdGlwIGNvbXBvbmVudCBhbmQgYWRqdXN0cyBpdCdzIHByb3BlcnRpZXMgdG8gc2hvdyBwcm9wZXJseS5cbiAgICovXG4gIHNob3dUb29sdGlwKCk6dm9pZCB7XG4gICAgdGhpcy5fZGVib3VuY2VkUHJvbWlzZSA9IHNldFRpbWVvdXQoXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2RlYm91bmNlZFByb21pc2UgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuX2NyZWF0ZVRvb2x0aXBDb21wb25lbnQoKTtcblxuICAgICAgICBjb25zdCB0b29sdGlwQ29tcG9uZW50OiBUb29sdGlwQm94ID0gdGhpcy5fdG9vbHRpcEVsZW1lbnQuaW5zdGFuY2U7XG5cbiAgICAgICAgdG9vbHRpcENvbXBvbmVudC5yb2xlID0gdGhpcy5yb2xlO1xuICAgICAgICB0b29sdGlwQ29tcG9uZW50LnRleHQgPSB0aGlzLnRvb2x0aXA7XG4gICAgICAgIHRvb2x0aXBDb21wb25lbnQudG9vbHRpcFN0eWxlcyA9IHRoaXMudG9vbHRpcFN0eWxlcztcbiAgICAgICAgdG9vbHRpcENvbXBvbmVudC50b29sdGlwSHRtbCA9IHRoaXMudG9vbHRpcEh0bWw7XG4gICAgICAgIHRvb2x0aXBDb21wb25lbnQuaW5pdC50aGVuKCgpID0+IHtcbiAgICAgICAgICBjb25zdCB0b29sdGlwUG9zaXRpb24gPSB0aGlzLl9nZXRUb29sdGlwUG9zaXRpb24oKTtcblxuICAgICAgICAgIHRvb2x0aXBDb21wb25lbnQucG9zTGVmdCA9IHRvb2x0aXBQb3NpdGlvbi5sZWZ0O1xuICAgICAgICAgIHRvb2x0aXBDb21wb25lbnQucG9zVG9wID0gdG9vbHRpcFBvc2l0aW9uLnRvcDtcblxuICAgICAgICAgIHRvb2x0aXBDb21wb25lbnQuZmFkZVN0YXRlID0gJ3Zpc2libGUnO1xuXG4gICAgICAgICAgaWYgKHRoaXMuYXJyb3cpIHtcbiAgICAgICAgICAgIGxldCBhcnJvd1Bvc2l0aW9uO1xuICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb25WID09PSAndG9wJykge1xuICAgICAgICAgICAgICBhcnJvd1Bvc2l0aW9uID0gdGhpcy5wb3NpdGlvbkggPT09ICdjZW50ZXInID8gJ2JvdHRvbS1jZW50ZXInIDogJ2JvdHRvbSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb25WID09PSAnYm90dG9tJykge1xuICAgICAgICAgICAgICBhcnJvd1Bvc2l0aW9uID0gdGhpcy5wb3NpdGlvbkggPT09ICdjZW50ZXInID8gJ3RvcC1jZW50ZXInIDogJ3RvcCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb25IID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgYXJyb3dQb3NpdGlvbiA9ICdyaWdodCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhcnJvd1Bvc2l0aW9uID0gJ2xlZnQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9vbHRpcENvbXBvbmVudC5hcnJvdyA9IGFycm93UG9zaXRpb247XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCF0aGlzLl9hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Rvb2x0aXBUaW1lb3V0ID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICAgdGhpcy5yZW1vdmVUb29sdGlwLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgIHRoaXMuZHVyYXRpb24sXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgdGhpcy5kZWJvdW5jZVxuICAgICk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKTp2b2lkIHtcbiAgICBpZiAodGhpcy5ldmVudCA9PT0gVG9vbHRpcEV2ZW50LkNMSUNLKSB7XG4gICAgICB0aGlzLnRyaWdnZXIoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdwcmVzcycpXG4gIG9uUHJlc3MoKTp2b2lkIHtcbiAgICBpZiAodGhpcy5ldmVudCA9PT0gVG9vbHRpcEV2ZW50LlBSRVNTKSB7XG4gICAgICB0aGlzLnRyaWdnZXIoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgb25Nb3VzZUVudGVyKCk6dm9pZCB7XG4gICAgaWYgKHRoaXMuZXZlbnQgPT09IFRvb2x0aXBFdmVudC5IT1ZFUikge1xuICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICBvbk1vdXNlTGVhdmUoKTp2b2lkIHtcbiAgICBpZiAodGhpcy5ldmVudCA9PT0gVG9vbHRpcEV2ZW50LkhPVkVSKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVRvb2x0aXBDb21wb25lbnQoKSB7XG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFRvb2x0aXBCb3gpO1xuICAgIHRoaXMuX3Rvb2x0aXBFbGVtZW50ID0gdGhpcy52Y3IuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuICAgIHRoaXMudG9vbHRpcEN0cmwuYWRkVG9vbHRpcCh0aGlzKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFRvb2x0aXBQb3NpdGlvbigpIHtcbiAgICBjb25zdCB0b29sdGlwTmF0aXZlRWxlbWVudDpIVE1MRWxlbWVudCA9IHRoaXMuX3Rvb2x0aXBFbGVtZW50Lmluc3RhbmNlLmdldE5hdGl2ZUVsZW1lbnQoKSxcbiAgICAgIGVsOkhUTUxFbGVtZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgcmVjdDpDbGllbnRSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBsZXQgcG9zaXRpb25MZWZ0Om51bWJlcixcbiAgICAgIHBvc2l0aW9uVG9wOm51bWJlcixcbiAgICAgIHNwYWNpbmcgPSAxMDtcblxuICAgIGlmICh0aGlzLm5hdlRvb2x0aXApIHtcbiAgICAgIHRoaXMucG9zaXRpb25WID0gJ2JvdHRvbSc7XG4gICAgICB0aGlzLmFycm93ID0gZmFsc2U7XG4gICAgICBzcGFjaW5nID0gMjA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucG9zaXRpb25IID09PSAncmlnaHQnKSB7XG4gICAgICBwb3NpdGlvbkxlZnQgPSByZWN0LnJpZ2h0ICsgc3BhY2luZztcbiAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb25IID09PSAnbGVmdCcpIHtcbiAgICAgIHBvc2l0aW9uTGVmdCA9IHJlY3QubGVmdCAtIHNwYWNpbmcgLSB0b29sdGlwTmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgIC8vIC03OSwgMTlcbiAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb25IID09PSAnY2VudGVyJykge1xuICAgICAgcG9zaXRpb25MZWZ0ID0gcmVjdC5sZWZ0IC0gKHRvb2x0aXBOYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIC0gZWwub2Zmc2V0V2lkdGgpIC8gMjsgXG4gICAgfSBlbHNlIGlmICh0aGlzLm5hdlRvb2x0aXApIHtcbiAgICAgIHBvc2l0aW9uTGVmdCA9IHJlY3QubGVmdCArIGVsLm9mZnNldFdpZHRoIC8gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgcG9zaXRpb25MZWZ0ID0gcmVjdC5sZWZ0O1xuICAgIH1cblxuXG4gICAgaWYgKHRoaXMucG9zaXRpb25WID09PSAndG9wJykge1xuICAgICAgcG9zaXRpb25Ub3AgPSByZWN0LnRvcCAtIHNwYWNpbmcgLSB0b29sdGlwTmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uViA9PT0gJ2JvdHRvbScpIHtcbiAgICAgIHBvc2l0aW9uVG9wID0gcmVjdC5ib3R0b20gKyBzcGFjaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBwb3NpdGlvblRvcCA9IHJlY3QudG9wICsgZWwub2Zmc2V0SGVpZ2h0IC8gMiAtIHRvb2x0aXBOYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCAvIDI7XG4gICAgfVxuXG4gICAgdGhpcy50b3BPZmZzZXQrKztcbiAgICBpZiAodGhpcy50b3BPZmZzZXQpIHtcbiAgICAgIHBvc2l0aW9uVG9wICs9ICt0aGlzLnRvcE9mZnNldDtcbiAgICB9XG5cbiAgICB0aGlzLmxlZnRPZmZzZXQrKztcbiAgICBpZiAodGhpcy5sZWZ0T2Zmc2V0KSB7XG4gICAgICBwb3NpdGlvbkxlZnQgKz0gK3RoaXMubGVmdE9mZnNldDtcbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb25MZWZ0ICsgdG9vbHRpcE5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggKyBzcGFjaW5nID4gdGhpcy5wbGF0Zm9ybS53aWR0aCgpKSB7XG4gICAgICBwb3NpdGlvbkxlZnQgPSB0aGlzLnBsYXRmb3JtLndpZHRoKCkgLSB0b29sdGlwTmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAtIHNwYWNpbmc7XG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbkxlZnQgKyB0b29sdGlwTmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAtIHNwYWNpbmcgPCAwKSB7XG4gICAgICBwb3NpdGlvbkxlZnQgPSBzcGFjaW5nO1xuICAgIH1cblxuICAgIGlmIChwb3NpdGlvblRvcCArIHRvb2x0aXBOYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCArIHNwYWNpbmcgPiB0aGlzLnBsYXRmb3JtLmhlaWdodCgpKSB7XG4gICAgICBwb3NpdGlvblRvcCA9IHRoaXMucGxhdGZvcm0uaGVpZ2h0KCkgLSB0b29sdGlwTmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgLSBzcGFjaW5nO1xuICAgIH0gZWxzZSBpZiAocG9zaXRpb25Ub3AgKyB0b29sdGlwTmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgLSBzcGFjaW5nIDwgMCkge1xuICAgICAgcG9zaXRpb25Ub3AgPSBzcGFjaW5nO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBsZWZ0OiBwb3NpdGlvbkxlZnQsXG4gICAgICB0b3A6ICBwb3NpdGlvblRvcCxcbiAgICB9O1xuICB9XG5cbiAgcmVtb3ZlVG9vbHRpcCgpIHtcbiAgICBpZiAodGhpcy5fZGVib3VuY2VkUHJvbWlzZSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2RlYm91bmNlZFByb21pc2UpO1xuXG4gICAgICB0aGlzLl9kZWJvdW5jZWRQcm9taXNlID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX3Rvb2x0aXBFbGVtZW50KSB7XG4gICAgICB0aGlzLl90b29sdGlwRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Rvb2x0aXBUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3Rvb2x0aXBFbGVtZW50Lmluc3RhbmNlLmZhZGVTdGF0ZSA9ICdpbnZpc2libGUnO1xuXG4gICAgdGhpcy5jYW5TaG93ID0gZmFsc2U7XG5cbiAgICAvLyB3YWl0IGZvciBhbmltYXRpb24gdG8gZmluaXNoIHRoZW4gY2xlYXIgZXZlcnl0aGluZyBvdXRcbiAgICBzZXRUaW1lb3V0KFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5fdG9vbHRpcEVsZW1lbnQgJiZcbiAgICAgICAgICB0eXBlb2YgdGhpcy5fdG9vbHRpcEVsZW1lbnQuZGVzdHJveSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLl90b29sdGlwRWxlbWVudC5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b29sdGlwQ3RybC5yZW1vdmVUb29sdGlwKHRoaXMpO1xuICAgICAgICB0aGlzLl90b29sdGlwRWxlbWVudCA9IHRoaXMuX3Rvb2x0aXBUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmNhblNob3cgPSB0cnVlO1xuICAgICAgfSxcbiAgICAgIDMwMFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9yZXNldFRpbWVyKCk6dm9pZCB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3Rvb2x0aXBUaW1lb3V0KTtcbiAgICB0aGlzLl90b29sdGlwVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LCB0aGlzLmR1cmF0aW9uKTtcbiAgfVxufVxuIl19