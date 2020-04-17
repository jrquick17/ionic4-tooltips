import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ChangeDetectionStrategy, ElementRef, Renderer2, HostBinding, Input, Injectable, ɵɵdefineInjectable, Directive, ApplicationRef, ComponentFactoryResolver, ViewContainerRef, HostListener, NgModule } from '@angular/core';
import { Platform } from '@ionic/angular';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: components/tooltip-box/tooltip-box.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TooltipBox {
    /**
     * @param {?} elementRef
     * @param {?} rnd
     */
    constructor(elementRef, rnd) {
        this.elementRef = elementRef;
        this.rnd = rnd;
        this.fadeState = 'invisible';
        this.role = 'status';
        this.tooltipStyles = {};
        this.init = new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => {
            this.initResolve = resolve;
        }));
    }
    /**
     * @param {?} side
     * @return {?}
     */
    set arrow(side) {
        this.rnd.setAttribute(this.getNativeElement(), 'class', 'has-arrow ' + 'arrow-' + side);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set posTop(val) {
        this.rnd.setStyle(this.getNativeElement(), 'top', val + 'px');
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set posLeft(val) {
        this.rnd.setStyle(this.getNativeElement(), 'left', val + 'px');
    }
    /**
     * @return {?}
     */
    getNativeElement() {
        return this.elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.initResolve();
    }
}
TooltipBox.decorators = [
    { type: Component, args: [{
                selector: 'tooltip-box',
                template: "<div class=\"tooltip-box\"\n     [attr.aria-role]=\"role\"\n     [ngStyle]=\"tooltipStyles\">\n  <div *ngIf=\"tooltipHtml; else txt\" [innerHTML]=\"tooltipHtml\"></div>\n\n  <ng-template #txt><div [innerHtml]=\"text\"></div></ng-template>\n</div>\n",
                animations: [
                    trigger('fade', [
                        state('visible', style({ opacity: 1 })),
                        state('invisible', style({ opacity: 0 })),
                        transition('visible <=> invisible', animate('300ms linear'))
                    ])
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":root{--background:white;--color:#000}:host{background-color:var(--background);color:var(--color);display:inline-block;position:fixed;padding:15px 25px;font-size:15px;z-index:3}:host.has-arrow:before{content:\"\";border:5px solid transparent;position:absolute;width:0;height:0}:host.has-arrow.arrow-top:before{border-bottom:5px solid var(--background);top:-10px}:host.has-arrow.arrow-left:before{border-right:5px solid var(--background);left:-10px}:host.has-arrow.arrow-right:before{border-left:5px solid var(--background);right:-10px}:host.has-arrow.arrow-bottom:before{border-top:5px solid var(--background);bottom:-10px}:host.has-arrow.arrow-bottom-center:before{border-top:5px solid var(--background);bottom:-10px;left:50%;transform:translateX(-50%)}:host.has-arrow.arrow-top-center:before{border-bottom:5px solid var(--background);top:-10px;left:50%;transform:translateX(-50%)}"]
            }] }
];
/** @nocollapse */
TooltipBox.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
TooltipBox.propDecorators = {
    fadeState: [{ type: HostBinding, args: ['@fade',] }],
    role: [{ type: Input }],
    text: [{ type: Input }],
    tooltipHtml: [{ type: Input }],
    tooltipStyles: [{ type: Input }],
    arrow: [{ type: Input }],
    posTop: [{ type: Input }],
    posLeft: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TooltipBox.prototype.fadeState;
    /** @type {?} */
    TooltipBox.prototype.role;
    /** @type {?} */
    TooltipBox.prototype.text;
    /** @type {?} */
    TooltipBox.prototype.tooltipHtml;
    /** @type {?} */
    TooltipBox.prototype.tooltipStyles;
    /**
     * @type {?}
     * @private
     */
    TooltipBox.prototype.initResolve;
    /** @type {?} */
    TooltipBox.prototype.init;
    /** @type {?} */
    TooltipBox.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    TooltipBox.prototype.rnd;
}

/**
 * @fileoverview added by tsickle
 * Generated from: controllers/tooltip.cotroller.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TooltipController {
    constructor() {
        this.allowMultiple = true;
        this.activeTooltips = [];
    }
    /**
     * @param {?} instance
     * @return {?}
     */
    addTooltip(instance) {
        if (instance.hideOthers || !this.allowMultiple && this.activeTooltips.length > 0) {
            this.hideAll();
        }
        this.activeTooltips.push(instance);
    }
    /**
     * @param {?} instance
     * @return {?}
     */
    removeTooltip(instance) {
        this.activeTooltips.splice(this.activeTooltips.indexOf(instance), 1);
    }
    /**
     * @return {?}
     */
    hideAll() {
        this.activeTooltips.forEach((/**
         * @param {?} tooltip
         * @return {?}
         */
        (tooltip) => {
            tooltip.removeTooltip();
        }));
    }
}
TooltipController.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ TooltipController.ngInjectableDef = ɵɵdefineInjectable({ factory: function TooltipController_Factory() { return new TooltipController(); }, token: TooltipController, providedIn: "root" });
if (false) {
    /** @type {?} */
    TooltipController.prototype.allowMultiple;
    /** @type {?} */
    TooltipController.prototype.activeTooltips;
}

/**
 * @fileoverview added by tsickle
 * Generated from: models/tooltip-event.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const TooltipEvent = {
    CLICK: "click",
    HOVER: "hover",
    PRESS: "press",
};

/**
 * @fileoverview added by tsickle
 * Generated from: directives/tooltip.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TooltipDirective {
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

/**
 * @fileoverview added by tsickle
 * Generated from: tooltips.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TooltipsModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: TooltipsModule,
            providers: [
                TooltipController
            ],
        };
    }
}
TooltipsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    TooltipDirective,
                    TooltipBox
                ],
                entryComponents: [
                    TooltipBox
                ],
                exports: [
                    TooltipDirective
                ],
                imports: [
                    CommonModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ionic4-tooltips.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TooltipBox, TooltipController, TooltipDirective, TooltipsModule };
//# sourceMappingURL=ionic4-tooltips.js.map
