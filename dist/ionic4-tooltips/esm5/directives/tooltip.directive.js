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
var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(el, appRef, platform, cfr, tooltipCtrl, vcr) {
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
    Object.defineProperty(TooltipDirective.prototype, "navTooltip", {
        get: /**
         * @return {?}
         */
        function () {
            return this._navTooltip;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._navTooltip = typeof val !== 'boolean' || val !== false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "arrow", {
        get: /**
         * @return {?}
         */
        function () {
            return this._arrow;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._arrow = typeof val !== 'boolean' || val !== false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "active", {
        get: /**
         * @return {?}
         */
        function () {
            return this._active;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._active = typeof val !== 'boolean' || val !== false;
            this._active && this.canShow ?
                this.showTooltip() : this.removeTooltip();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (typeof this.event === 'undefined') {
            this.event = this.platform.is('mobile') ?
                this.mobileEvent : this.desktopEvent;
        }
        // if the timer hasn't expired or active is true when the component gets destroyed, the tooltip will remain in the DOM
        // this removes it
        this.removeTooltip();
    };
    /**
     * Show the tooltip immediately after initiating view if set to
     */
    /**
     * Show the tooltip immediately after initiating view if set to
     * @return {?}
     */
    TooltipDirective.prototype.ngAfterViewInit = /**
     * Show the tooltip immediately after initiating view if set to
     * @return {?}
     */
    function () {
        if (this._active) {
            this.trigger();
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._tooltipElement && typeof this._tooltipElement.destroy === 'function') {
            this._tooltipElement.destroy();
        }
    };
    Object.defineProperty(TooltipDirective.prototype, "canShow", {
        /**
         * @return TRUE if the tooltip can be shown
         */
        get: /**
         * @return {?} TRUE if the tooltip can be shown
         */
        function () {
            return this._canShow &&
                ((typeof this.tooltip === 'string' && this.tooltip !== '')
                    || (typeof this.tooltipHtml === 'string' && this.tooltipHtml !== ''));
        },
        /**
         * Set the canShow property
         * Ensure that tooltip is shown only if the tooltip string is not falsey
         */
        set: /**
         * Set the canShow property
         * Ensure that tooltip is shown only if the tooltip string is not falsey
         * @param {?} show
         * @return {?}
         */
        function (show) {
            this._canShow = show;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Handles the click/press event and shows a tooltip.
     * If a tooltip already exists, it will just reset it's timer.
     */
    /**
     * Handles the click/press event and shows a tooltip.
     * If a tooltip already exists, it will just reset it's timer.
     * @return {?}
     */
    TooltipDirective.prototype.trigger = /**
     * Handles the click/press event and shows a tooltip.
     * If a tooltip already exists, it will just reset it's timer.
     * @return {?}
     */
    function () {
        if (this.canShow) {
            if (this._tooltipElement) {
                this._resetTimer();
            }
            else {
                this.showTooltip();
            }
        }
    };
    /**
     * Creates a new tooltip component and adjusts it's properties to show properly.
     */
    /**
     * Creates a new tooltip component and adjusts it's properties to show properly.
     * @return {?}
     */
    TooltipDirective.prototype.showTooltip = /**
     * Creates a new tooltip component and adjusts it's properties to show properly.
     * @return {?}
     */
    function () {
        var _this = this;
        this._debouncedPromise = setTimeout((/**
         * @return {?}
         */
        function () {
            _this._debouncedPromise = null;
            _this._createTooltipComponent();
            /** @type {?} */
            var tooltipComponent = _this._tooltipElement.instance;
            tooltipComponent.role = _this.role;
            tooltipComponent.text = _this.tooltip;
            tooltipComponent.tooltipStyles = _this.tooltipStyles;
            tooltipComponent.tooltipHtml = _this.tooltipHtml;
            tooltipComponent.init.then((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var tooltipPosition = _this._getTooltipPosition();
                tooltipComponent.posLeft = tooltipPosition.left;
                tooltipComponent.posTop = tooltipPosition.top;
                tooltipComponent.fadeState = 'visible';
                if (_this.arrow) {
                    /** @type {?} */
                    var arrowPosition = void 0;
                    if (_this.positionV === 'top') {
                        arrowPosition = _this.positionH === 'center' ? 'bottom-center' : 'bottom';
                    }
                    else if (_this.positionV === 'bottom') {
                        arrowPosition = _this.positionH === 'center' ? 'top-center' : 'top';
                    }
                    else if (_this.positionH === 'left') {
                        arrowPosition = 'right';
                    }
                    else {
                        arrowPosition = 'left';
                    }
                    tooltipComponent.arrow = arrowPosition;
                }
                if (!_this._active) {
                    _this._tooltipTimeout = setTimeout(_this.removeTooltip.bind(_this), _this.duration);
                }
            }));
        }), this.debounce);
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.event === TooltipEvent.CLICK) {
            this.trigger();
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.onPress = /**
     * @return {?}
     */
    function () {
        if (this.event === TooltipEvent.PRESS) {
            this.trigger();
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.onMouseEnter = /**
     * @return {?}
     */
    function () {
        if (this.event === TooltipEvent.HOVER) {
            this.active = true;
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.onMouseLeave = /**
     * @return {?}
     */
    function () {
        if (this.event === TooltipEvent.HOVER) {
            this.active = false;
        }
    };
    /**
     * @private
     * @return {?}
     */
    TooltipDirective.prototype._createTooltipComponent = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var componentFactory = this.cfr.resolveComponentFactory(TooltipBox);
        this._tooltipElement = this.vcr.createComponent(componentFactory);
        this.tooltipCtrl.addTooltip(this);
    };
    /**
     * @private
     * @return {?}
     */
    TooltipDirective.prototype._getTooltipPosition = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var tooltipNativeElement = this._tooltipElement.instance.getNativeElement();
        /** @type {?} */
        var el = this.el.nativeElement;
        /** @type {?} */
        var rect = el.getBoundingClientRect();
        /** @type {?} */
        var positionLeft;
        /** @type {?} */
        var positionTop;
        /** @type {?} */
        var spacing = 10;
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
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.removeTooltip = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
        function () {
            if (_this._tooltipElement &&
                typeof _this._tooltipElement.destroy === 'function') {
                _this._tooltipElement.destroy();
            }
            _this.tooltipCtrl.removeTooltip(_this);
            _this._tooltipElement = _this._tooltipTimeout = undefined;
            _this.canShow = true;
        }), 300);
    };
    /**
     * @private
     * @return {?}
     */
    TooltipDirective.prototype._resetTimer = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        clearTimeout(this._tooltipTimeout);
        this._tooltipTimeout = setTimeout((/**
         * @return {?}
         */
        function () {
            _this.active = false;
        }), this.duration);
    };
    TooltipDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tooltip]',
                },] }
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ApplicationRef },
        { type: Platform },
        { type: ComponentFactoryResolver },
        { type: TooltipController },
        { type: ViewContainerRef }
    ]; };
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
    return TooltipDirective;
}());
export { TooltipDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb25pYzQtdG9vbHRpcHMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL3Rvb2x0aXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVMLGNBQWMsRUFDZCx3QkFBd0IsRUFFeEIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQzNFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUUzRDtJQTBERSwwQkFDVSxFQUFhLEVBQ2IsTUFBcUIsRUFDckIsUUFBaUIsRUFDakIsR0FBNEIsRUFDNUIsV0FBNkIsRUFDN0IsR0FBb0I7UUFMcEIsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUNiLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixRQUFHLEdBQUgsR0FBRyxDQUF5QjtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDN0IsUUFBRyxHQUFILEdBQUcsQ0FBaUI7UUE1RHJCLGFBQVEsR0FBVSxDQUFDLENBQUM7UUFDcEIsaUJBQVksR0FBZ0IsWUFBWSxDQUFDLEtBQUssQ0FBQztRQVUvQyxrQkFBYSxHQUE0QixFQUFFLENBQUM7UUFxQjVDLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFjakIsWUFBTyxHQUFXLEtBQUssQ0FBQztRQUN4QixXQUFNLEdBQVcsS0FBSyxDQUFDO1FBQ3ZCLGFBQVEsR0FBVyxJQUFJLENBQUM7UUFDeEIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLGdCQUFXLEdBQVcsS0FBSyxDQUFDO0lBYXBDLENBQUM7SUFqREQsc0JBQ0ksd0NBQVU7Ozs7UUFJZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDOzs7OztRQVBELFVBQ2UsR0FBVztZQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssS0FBSyxDQUFDO1FBQy9ELENBQUM7OztPQUFBO0lBTUQsc0JBQ0ksbUNBQUs7Ozs7UUFJVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7OztRQVBELFVBQ1UsR0FBVztZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssS0FBSyxDQUFDO1FBQzFELENBQUM7OztPQUFBO0lBUUQsc0JBQ0ksb0NBQU07Ozs7UUFPVjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7OztRQVZELFVBQ1csR0FBVztZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssS0FBSyxDQUFDO1lBRXpELElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM1QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM5QyxDQUFDOzs7T0FBQTs7OztJQXlCRCxtQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxXQUFXLEVBQUU7WUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3hDO1FBRUQsc0hBQXNIO1FBQ3RILGtCQUFrQjtRQUNsQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILDBDQUFlOzs7O0lBQWY7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQzs7OztJQUVELHNDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxLQUFLLFVBQVUsRUFBRTtZQUM5RSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQU1ELHNCQUFJLHFDQUFPO1FBSVg7O1dBRUc7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVE7Z0JBQ2xCLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssRUFBRSxDQUFDO3VCQUNyRCxDQUFDLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVFLENBQUM7UUFmRDs7O1dBR0c7Ozs7Ozs7UUFDSCxVQUFZLElBQWE7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFXRDs7O09BR0c7Ozs7OztJQUNILGtDQUFPOzs7OztJQUFQO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3BCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNwQjtTQUNGO0lBQ0gsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILHNDQUFXOzs7O0lBQVg7UUFBQSxpQkE2Q0M7UUE1Q0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFVBQVU7OztRQUNqQztZQUNFLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7WUFFOUIsS0FBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7O2dCQUV6QixnQkFBZ0IsR0FBZSxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVE7WUFFbEUsZ0JBQWdCLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUM7WUFDbEMsZ0JBQWdCLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUM7WUFDckMsZ0JBQWdCLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUM7WUFDcEQsZ0JBQWdCLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUM7WUFDaEQsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUk7OztZQUFDOztvQkFDbkIsZUFBZSxHQUFHLEtBQUksQ0FBQyxtQkFBbUIsRUFBRTtnQkFFbEQsZ0JBQWdCLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUM7Z0JBQ2hELGdCQUFnQixDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsR0FBRyxDQUFDO2dCQUU5QyxnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO2dCQUV2QyxJQUFJLEtBQUksQ0FBQyxLQUFLLEVBQUU7O3dCQUNWLGFBQWEsU0FBQTtvQkFDakIsSUFBSSxLQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssRUFBRTt3QkFDNUIsYUFBYSxHQUFHLEtBQUksQ0FBQyxTQUFTLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztxQkFDMUU7eUJBQU0sSUFBSSxLQUFJLENBQUMsU0FBUyxLQUFLLFFBQVEsRUFBRTt3QkFDdEMsYUFBYSxHQUFHLEtBQUksQ0FBQyxTQUFTLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztxQkFDcEU7eUJBQU0sSUFBSSxLQUFJLENBQUMsU0FBUyxLQUFLLE1BQU0sRUFBRTt3QkFDcEMsYUFBYSxHQUFHLE9BQU8sQ0FBQztxQkFDekI7eUJBQU07d0JBQ0wsYUFBYSxHQUFHLE1BQU0sQ0FBQztxQkFDeEI7b0JBQ0QsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztpQkFDeEM7Z0JBRUQsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ2pCLEtBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUMvQixLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsRUFDN0IsS0FBSSxDQUFDLFFBQVEsQ0FDZCxDQUFDO2lCQUNIO1lBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEdBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FDZCxDQUFDO0lBQ0osQ0FBQzs7OztJQUdELGtDQUFPOzs7SUFEUDtRQUVFLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxZQUFZLENBQUMsS0FBSyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtJQUNILENBQUM7Ozs7SUFHRCxrQ0FBTzs7O0lBRFA7UUFFRSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssWUFBWSxDQUFDLEtBQUssRUFBRTtZQUNyQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEI7SUFDSCxDQUFDOzs7O0lBR0QsdUNBQVk7OztJQURaO1FBRUUsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFlBQVksQ0FBQyxLQUFLLEVBQUU7WUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7O0lBR0QsdUNBQVk7OztJQURaO1FBRUUsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFlBQVksQ0FBQyxLQUFLLEVBQUU7WUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7SUFDSCxDQUFDOzs7OztJQUVPLGtEQUF1Qjs7OztJQUEvQjs7WUFDUSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQztRQUNyRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFTyw4Q0FBbUI7Ozs7SUFBM0I7O1lBQ1Esb0JBQW9CLEdBQWUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUU7O1lBQ3ZGLEVBQUUsR0FBZSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7O1lBQ3RDLElBQUksR0FBYyxFQUFFLENBQUMscUJBQXFCLEVBQUU7O1lBRTFDLFlBQW1COztZQUNyQixXQUFrQjs7WUFDbEIsT0FBTyxHQUFHLEVBQUU7UUFFZCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7WUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsT0FBTyxHQUFHLEVBQUUsQ0FBQztTQUNkO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLE9BQU8sRUFBRTtZQUM5QixZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7U0FDckM7YUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssTUFBTSxFQUFFO1lBQ3BDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQyxXQUFXLENBQUM7WUFDdEUsVUFBVTtTQUNYO2FBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFFBQVEsRUFBRTtZQUN0QyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLG9CQUFvQixDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BGO2FBQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzFCLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1NBQy9DO2FBQU07WUFDTCxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUMxQjtRQUdELElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLEVBQUU7WUFDNUIsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxHQUFHLG9CQUFvQixDQUFDLFlBQVksQ0FBQztTQUN0RTthQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxRQUFRLEVBQUU7WUFDdEMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1NBQ3JDO2FBQU07WUFDTCxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1NBQ3RGO1FBRUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ2xDO1FBRUQsSUFBSSxZQUFZLEdBQUcsb0JBQW9CLENBQUMsV0FBVyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3JGLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLG9CQUFvQixDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7U0FDbkY7YUFBTSxJQUFJLFlBQVksR0FBRyxvQkFBb0IsQ0FBQyxXQUFXLEdBQUcsT0FBTyxHQUFHLENBQUMsRUFBRTtZQUN4RSxZQUFZLEdBQUcsT0FBTyxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxXQUFXLEdBQUcsb0JBQW9CLENBQUMsWUFBWSxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3RGLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLG9CQUFvQixDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7U0FDcEY7YUFBTSxJQUFJLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQyxZQUFZLEdBQUcsT0FBTyxHQUFHLENBQUMsRUFBRTtZQUN4RSxXQUFXLEdBQUcsT0FBTyxDQUFDO1NBQ3ZCO1FBRUQsT0FBTztZQUNMLElBQUksRUFBRSxZQUFZO1lBQ2xCLEdBQUcsRUFBRyxXQUFXO1NBQ2xCLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsd0NBQWE7OztJQUFiO1FBQUEsaUJBZ0NDO1FBL0JDLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLFlBQVksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUVyQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1NBQy9CO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7WUFDakMsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7WUFDakMsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztRQUV0RCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUVyQix5REFBeUQ7UUFDekQsVUFBVTs7O1FBQ1I7WUFDRSxJQUNFLEtBQUksQ0FBQyxlQUFlO2dCQUNwQixPQUFPLEtBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxLQUFLLFVBQVUsRUFDbEQ7Z0JBQ0EsS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNoQztZQUNELEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7WUFDeEQsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdEIsQ0FBQyxHQUNELEdBQUcsQ0FDSixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTyxzQ0FBVzs7OztJQUFuQjtRQUFBLGlCQUtDO1FBSkMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVU7OztRQUFDO1lBQ2hDLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUMsR0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEIsQ0FBQzs7Z0JBMVRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztpQkFDdEI7Ozs7Z0JBakJDLFVBQVU7Z0JBSlYsY0FBYztnQkFhUixRQUFRO2dCQVpkLHdCQUF3QjtnQkFlbEIsaUJBQWlCO2dCQU52QixnQkFBZ0I7OzsyQkFhZixLQUFLOytCQUNMLEtBQUs7d0JBQ0wsS0FBSzs2QkFDTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzRCQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLOzhCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs0QkFDTCxLQUFLOzZCQUVMLEtBQUs7d0JBU0wsS0FBSzsyQkFTTCxLQUFLO3lCQUVMLEtBQUs7MEJBMElMLFlBQVksU0FBQyxPQUFPOzBCQU9wQixZQUFZLFNBQUMsT0FBTzsrQkFPcEIsWUFBWSxTQUFDLFlBQVk7K0JBT3pCLFlBQVksU0FBQyxZQUFZOztJQXNINUIsdUJBQUM7Q0FBQSxBQTNURCxJQTJUQztTQXhUWSxnQkFBZ0I7OztJQUMzQixvQ0FBNkI7O0lBQzdCLHdDQUF3RDs7SUFDeEQsaUNBQTRCOztJQUM1QixzQ0FBNEI7O0lBQzVCLHNDQUEyQjs7SUFDM0IsdUNBQWtDOztJQUNsQyxxQ0FBMEI7O0lBQzFCLHFDQUEwQjs7SUFDMUIsZ0NBQXFCOztJQUNyQixtQ0FBd0I7O0lBQ3hCLHVDQUE0Qjs7SUFDNUIseUNBQXFEOztJQUNyRCxxQ0FBMEI7O0lBb0IxQixvQ0FBeUI7Ozs7O0lBY3pCLG1DQUFnQzs7Ozs7SUFDaEMsa0NBQStCOzs7OztJQUMvQixvQ0FBZ0M7Ozs7O0lBQ2hDLDZDQUFpQzs7Ozs7SUFDakMsdUNBQW9DOzs7OztJQUNwQywyQ0FBaUQ7Ozs7O0lBQ2pELDJDQUE0Qjs7Ozs7SUFHMUIsOEJBQXFCOzs7OztJQUNyQixrQ0FBNkI7Ozs7O0lBQzdCLG9DQUF5Qjs7Ozs7SUFDekIsK0JBQW9DOzs7OztJQUNwQyx1Q0FBcUM7Ozs7O0lBQ3JDLCtCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIEFwcGxpY2F0aW9uUmVmLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtQbGF0Zm9ybX0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5pbXBvcnQge1Rvb2x0aXBCb3h9IGZyb20gJy4uL2NvbXBvbmVudHMvdG9vbHRpcC1ib3gvdG9vbHRpcC1ib3guY29tcG9uZW50JztcbmltcG9ydCB7VG9vbHRpcENvbnRyb2xsZXJ9IGZyb20gJy4uL2NvbnRyb2xsZXJzL3Rvb2x0aXAuY290cm9sbGVyJztcbmltcG9ydCB7VG9vbHRpcEV2ZW50fSBmcm9tICcuLi9tb2RlbHMvdG9vbHRpcC1ldmVudC5tb2RlbCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0b29sdGlwXScsXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGRlYm91bmNlOm51bWJlciA9IDA7XG4gIEBJbnB1dCgpIGRlc2t0b3BFdmVudDpUb29sdGlwRXZlbnQgPSBUb29sdGlwRXZlbnQuSE9WRVI7XG4gIEBJbnB1dCgpIGV2ZW50OlRvb2x0aXBFdmVudDtcbiAgQElucHV0KCkgaGlkZU90aGVyczpib29sZWFuO1xuICBASW5wdXQoKSBsZWZ0T2Zmc2V0Om51bWJlcjtcbiAgQElucHV0KCkgbW9iaWxlRXZlbnQ6VG9vbHRpcEV2ZW50O1xuICBASW5wdXQoKSBwb3NpdGlvblY6c3RyaW5nO1xuICBASW5wdXQoKSBwb3NpdGlvbkg6c3RyaW5nO1xuICBASW5wdXQoKSByb2xlOnN0cmluZztcbiAgQElucHV0KCkgdG9vbHRpcDpzdHJpbmc7XG4gIEBJbnB1dCgpIHRvb2x0aXBIdG1sOnN0cmluZztcbiAgQElucHV0KCkgdG9vbHRpcFN0eWxlczp7IFtrZXk6c3RyaW5nXTpzdHJpbmc7IH0gPSB7fTtcbiAgQElucHV0KCkgdG9wT2Zmc2V0Om51bWJlcjtcblxuICBASW5wdXQoKVxuICBzZXQgbmF2VG9vbHRpcCh2YWw6Ym9vbGVhbikge1xuICAgIHRoaXMuX25hdlRvb2x0aXAgPSB0eXBlb2YgdmFsICE9PSAnYm9vbGVhbicgfHwgdmFsICE9PSBmYWxzZTtcbiAgfVxuXG4gIGdldCBuYXZUb29sdGlwKCk6Ym9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX25hdlRvb2x0aXA7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgYXJyb3codmFsOmJvb2xlYW4pIHtcbiAgICB0aGlzLl9hcnJvdyA9IHR5cGVvZiB2YWwgIT09ICdib29sZWFuJyB8fCB2YWwgIT09IGZhbHNlO1xuICB9XG5cbiAgZ2V0IGFycm93KCk6Ym9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Fycm93O1xuICB9XG5cbiAgQElucHV0KCkgZHVyYXRpb24gPSAzMDAwO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBhY3RpdmUodmFsOmJvb2xlYW4pIHtcbiAgICB0aGlzLl9hY3RpdmUgPSB0eXBlb2YgdmFsICE9PSAnYm9vbGVhbicgfHwgdmFsICE9PSBmYWxzZTtcblxuICAgIHRoaXMuX2FjdGl2ZSAmJiB0aGlzLmNhblNob3cgP1xuICAgICAgdGhpcy5zaG93VG9vbHRpcCgpIDogdGhpcy5yZW1vdmVUb29sdGlwKCk7XG4gIH1cblxuICBnZXQgYWN0aXZlKCk6Ym9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2FjdGl2ZTpib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2Fycm93OmJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY2FuU2hvdzpib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfZGVib3VuY2VkUHJvbWlzZSA9IG51bGw7XG4gIHByaXZhdGUgX25hdlRvb2x0aXA6Ym9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF90b29sdGlwRWxlbWVudDpDb21wb25lbnRSZWY8VG9vbHRpcEJveD47XG4gIHByaXZhdGUgX3Rvb2x0aXBUaW1lb3V0OmFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOkVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBhcHBSZWY6QXBwbGljYXRpb25SZWYsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTpQbGF0Zm9ybSxcbiAgICBwcml2YXRlIGNmcjpDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSB0b29sdGlwQ3RybDpUb29sdGlwQ29udHJvbGxlcixcbiAgICBwcml2YXRlIHZjcjpWaWV3Q29udGFpbmVyUmVmLFxuICApIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmV2ZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5ldmVudCA9IHRoaXMucGxhdGZvcm0uaXMoJ21vYmlsZScpID9cbiAgICAgICAgdGhpcy5tb2JpbGVFdmVudCA6IHRoaXMuZGVza3RvcEV2ZW50O1xuICAgIH1cblxuICAgIC8vIGlmIHRoZSB0aW1lciBoYXNuJ3QgZXhwaXJlZCBvciBhY3RpdmUgaXMgdHJ1ZSB3aGVuIHRoZSBjb21wb25lbnQgZ2V0cyBkZXN0cm95ZWQsIHRoZSB0b29sdGlwIHdpbGwgcmVtYWluIGluIHRoZSBET01cbiAgICAvLyB0aGlzIHJlbW92ZXMgaXRcbiAgICB0aGlzLnJlbW92ZVRvb2x0aXAoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSB0b29sdGlwIGltbWVkaWF0ZWx5IGFmdGVyIGluaXRpYXRpbmcgdmlldyBpZiBzZXQgdG9cbiAgICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5fYWN0aXZlKSB7XG4gICAgICB0aGlzLnRyaWdnZXIoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fdG9vbHRpcEVsZW1lbnQgJiYgdHlwZW9mIHRoaXMuX3Rvb2x0aXBFbGVtZW50LmRlc3Ryb3kgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuX3Rvb2x0aXBFbGVtZW50LmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBjYW5TaG93IHByb3BlcnR5XG4gICAqIEVuc3VyZSB0aGF0IHRvb2x0aXAgaXMgc2hvd24gb25seSBpZiB0aGUgdG9vbHRpcCBzdHJpbmcgaXMgbm90IGZhbHNleVxuICAgKi9cbiAgc2V0IGNhblNob3coc2hvdzogYm9vbGVhbikge1xuICAgIHRoaXMuX2NhblNob3cgPSBzaG93O1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4gVFJVRSBpZiB0aGUgdG9vbHRpcCBjYW4gYmUgc2hvd25cbiAgICovXG4gIGdldCBjYW5TaG93KCk6Ym9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NhblNob3cgJiZcbiAgICAgICgodHlwZW9mIHRoaXMudG9vbHRpcCA9PT0gJ3N0cmluZycgJiYgdGhpcy50b29sdGlwICE9PSAnJylcbiAgICAgICAgfHwgKHR5cGVvZiB0aGlzLnRvb2x0aXBIdG1sID09PSAnc3RyaW5nJyAmJiB0aGlzLnRvb2x0aXBIdG1sICE9PSAnJykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGhlIGNsaWNrL3ByZXNzIGV2ZW50IGFuZCBzaG93cyBhIHRvb2x0aXAuXG4gICAqIElmIGEgdG9vbHRpcCBhbHJlYWR5IGV4aXN0cywgaXQgd2lsbCBqdXN0IHJlc2V0IGl0J3MgdGltZXIuXG4gICAqL1xuICB0cmlnZ2VyKCk6dm9pZCB7XG4gICAgaWYgKHRoaXMuY2FuU2hvdykge1xuICAgICAgaWYgKHRoaXMuX3Rvb2x0aXBFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX3Jlc2V0VGltZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2hvd1Rvb2x0aXAoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyB0b29sdGlwIGNvbXBvbmVudCBhbmQgYWRqdXN0cyBpdCdzIHByb3BlcnRpZXMgdG8gc2hvdyBwcm9wZXJseS5cbiAgICovXG4gIHNob3dUb29sdGlwKCk6dm9pZCB7XG4gICAgdGhpcy5fZGVib3VuY2VkUHJvbWlzZSA9IHNldFRpbWVvdXQoXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2RlYm91bmNlZFByb21pc2UgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuX2NyZWF0ZVRvb2x0aXBDb21wb25lbnQoKTtcblxuICAgICAgICBjb25zdCB0b29sdGlwQ29tcG9uZW50OiBUb29sdGlwQm94ID0gdGhpcy5fdG9vbHRpcEVsZW1lbnQuaW5zdGFuY2U7XG5cbiAgICAgICAgdG9vbHRpcENvbXBvbmVudC5yb2xlID0gdGhpcy5yb2xlO1xuICAgICAgICB0b29sdGlwQ29tcG9uZW50LnRleHQgPSB0aGlzLnRvb2x0aXA7XG4gICAgICAgIHRvb2x0aXBDb21wb25lbnQudG9vbHRpcFN0eWxlcyA9IHRoaXMudG9vbHRpcFN0eWxlcztcbiAgICAgICAgdG9vbHRpcENvbXBvbmVudC50b29sdGlwSHRtbCA9IHRoaXMudG9vbHRpcEh0bWw7XG4gICAgICAgIHRvb2x0aXBDb21wb25lbnQuaW5pdC50aGVuKCgpID0+IHtcbiAgICAgICAgICBjb25zdCB0b29sdGlwUG9zaXRpb24gPSB0aGlzLl9nZXRUb29sdGlwUG9zaXRpb24oKTtcblxuICAgICAgICAgIHRvb2x0aXBDb21wb25lbnQucG9zTGVmdCA9IHRvb2x0aXBQb3NpdGlvbi5sZWZ0O1xuICAgICAgICAgIHRvb2x0aXBDb21wb25lbnQucG9zVG9wID0gdG9vbHRpcFBvc2l0aW9uLnRvcDtcblxuICAgICAgICAgIHRvb2x0aXBDb21wb25lbnQuZmFkZVN0YXRlID0gJ3Zpc2libGUnO1xuXG4gICAgICAgICAgaWYgKHRoaXMuYXJyb3cpIHtcbiAgICAgICAgICAgIGxldCBhcnJvd1Bvc2l0aW9uO1xuICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb25WID09PSAndG9wJykge1xuICAgICAgICAgICAgICBhcnJvd1Bvc2l0aW9uID0gdGhpcy5wb3NpdGlvbkggPT09ICdjZW50ZXInID8gJ2JvdHRvbS1jZW50ZXInIDogJ2JvdHRvbSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb25WID09PSAnYm90dG9tJykge1xuICAgICAgICAgICAgICBhcnJvd1Bvc2l0aW9uID0gdGhpcy5wb3NpdGlvbkggPT09ICdjZW50ZXInID8gJ3RvcC1jZW50ZXInIDogJ3RvcCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb25IID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgYXJyb3dQb3NpdGlvbiA9ICdyaWdodCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhcnJvd1Bvc2l0aW9uID0gJ2xlZnQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9vbHRpcENvbXBvbmVudC5hcnJvdyA9IGFycm93UG9zaXRpb247XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCF0aGlzLl9hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Rvb2x0aXBUaW1lb3V0ID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICAgdGhpcy5yZW1vdmVUb29sdGlwLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgIHRoaXMuZHVyYXRpb24sXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgdGhpcy5kZWJvdW5jZVxuICAgICk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKTp2b2lkIHtcbiAgICBpZiAodGhpcy5ldmVudCA9PT0gVG9vbHRpcEV2ZW50LkNMSUNLKSB7XG4gICAgICB0aGlzLnRyaWdnZXIoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdwcmVzcycpXG4gIG9uUHJlc3MoKTp2b2lkIHtcbiAgICBpZiAodGhpcy5ldmVudCA9PT0gVG9vbHRpcEV2ZW50LlBSRVNTKSB7XG4gICAgICB0aGlzLnRyaWdnZXIoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgb25Nb3VzZUVudGVyKCk6dm9pZCB7XG4gICAgaWYgKHRoaXMuZXZlbnQgPT09IFRvb2x0aXBFdmVudC5IT1ZFUikge1xuICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICBvbk1vdXNlTGVhdmUoKTp2b2lkIHtcbiAgICBpZiAodGhpcy5ldmVudCA9PT0gVG9vbHRpcEV2ZW50LkhPVkVSKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVRvb2x0aXBDb21wb25lbnQoKSB7XG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFRvb2x0aXBCb3gpO1xuICAgIHRoaXMuX3Rvb2x0aXBFbGVtZW50ID0gdGhpcy52Y3IuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuICAgIHRoaXMudG9vbHRpcEN0cmwuYWRkVG9vbHRpcCh0aGlzKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFRvb2x0aXBQb3NpdGlvbigpIHtcbiAgICBjb25zdCB0b29sdGlwTmF0aXZlRWxlbWVudDpIVE1MRWxlbWVudCA9IHRoaXMuX3Rvb2x0aXBFbGVtZW50Lmluc3RhbmNlLmdldE5hdGl2ZUVsZW1lbnQoKSxcbiAgICAgIGVsOkhUTUxFbGVtZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgcmVjdDpDbGllbnRSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBsZXQgcG9zaXRpb25MZWZ0Om51bWJlcixcbiAgICAgIHBvc2l0aW9uVG9wOm51bWJlcixcbiAgICAgIHNwYWNpbmcgPSAxMDtcblxuICAgIGlmICh0aGlzLm5hdlRvb2x0aXApIHtcbiAgICAgIHRoaXMucG9zaXRpb25WID0gJ2JvdHRvbSc7XG4gICAgICB0aGlzLmFycm93ID0gZmFsc2U7XG4gICAgICBzcGFjaW5nID0gMjA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucG9zaXRpb25IID09PSAncmlnaHQnKSB7XG4gICAgICBwb3NpdGlvbkxlZnQgPSByZWN0LnJpZ2h0ICsgc3BhY2luZztcbiAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb25IID09PSAnbGVmdCcpIHtcbiAgICAgIHBvc2l0aW9uTGVmdCA9IHJlY3QubGVmdCAtIHNwYWNpbmcgLSB0b29sdGlwTmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgIC8vIC03OSwgMTlcbiAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb25IID09PSAnY2VudGVyJykge1xuICAgICAgcG9zaXRpb25MZWZ0ID0gcmVjdC5sZWZ0IC0gKHRvb2x0aXBOYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIC0gZWwub2Zmc2V0V2lkdGgpIC8gMjsgXG4gICAgfSBlbHNlIGlmICh0aGlzLm5hdlRvb2x0aXApIHtcbiAgICAgIHBvc2l0aW9uTGVmdCA9IHJlY3QubGVmdCArIGVsLm9mZnNldFdpZHRoIC8gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgcG9zaXRpb25MZWZ0ID0gcmVjdC5sZWZ0O1xuICAgIH1cblxuXG4gICAgaWYgKHRoaXMucG9zaXRpb25WID09PSAndG9wJykge1xuICAgICAgcG9zaXRpb25Ub3AgPSByZWN0LnRvcCAtIHNwYWNpbmcgLSB0b29sdGlwTmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uViA9PT0gJ2JvdHRvbScpIHtcbiAgICAgIHBvc2l0aW9uVG9wID0gcmVjdC5ib3R0b20gKyBzcGFjaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBwb3NpdGlvblRvcCA9IHJlY3QudG9wICsgZWwub2Zmc2V0SGVpZ2h0IC8gMiAtIHRvb2x0aXBOYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCAvIDI7XG4gICAgfVxuXG4gICAgdGhpcy50b3BPZmZzZXQrKztcbiAgICBpZiAodGhpcy50b3BPZmZzZXQpIHtcbiAgICAgIHBvc2l0aW9uVG9wICs9ICt0aGlzLnRvcE9mZnNldDtcbiAgICB9XG5cbiAgICB0aGlzLmxlZnRPZmZzZXQrKztcbiAgICBpZiAodGhpcy5sZWZ0T2Zmc2V0KSB7XG4gICAgICBwb3NpdGlvbkxlZnQgKz0gK3RoaXMubGVmdE9mZnNldDtcbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb25MZWZ0ICsgdG9vbHRpcE5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggKyBzcGFjaW5nID4gdGhpcy5wbGF0Zm9ybS53aWR0aCgpKSB7XG4gICAgICBwb3NpdGlvbkxlZnQgPSB0aGlzLnBsYXRmb3JtLndpZHRoKCkgLSB0b29sdGlwTmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAtIHNwYWNpbmc7XG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbkxlZnQgKyB0b29sdGlwTmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAtIHNwYWNpbmcgPCAwKSB7XG4gICAgICBwb3NpdGlvbkxlZnQgPSBzcGFjaW5nO1xuICAgIH1cblxuICAgIGlmIChwb3NpdGlvblRvcCArIHRvb2x0aXBOYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCArIHNwYWNpbmcgPiB0aGlzLnBsYXRmb3JtLmhlaWdodCgpKSB7XG4gICAgICBwb3NpdGlvblRvcCA9IHRoaXMucGxhdGZvcm0uaGVpZ2h0KCkgLSB0b29sdGlwTmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgLSBzcGFjaW5nO1xuICAgIH0gZWxzZSBpZiAocG9zaXRpb25Ub3AgKyB0b29sdGlwTmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgLSBzcGFjaW5nIDwgMCkge1xuICAgICAgcG9zaXRpb25Ub3AgPSBzcGFjaW5nO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBsZWZ0OiBwb3NpdGlvbkxlZnQsXG4gICAgICB0b3A6ICBwb3NpdGlvblRvcCxcbiAgICB9O1xuICB9XG5cbiAgcmVtb3ZlVG9vbHRpcCgpIHtcbiAgICBpZiAodGhpcy5fZGVib3VuY2VkUHJvbWlzZSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2RlYm91bmNlZFByb21pc2UpO1xuXG4gICAgICB0aGlzLl9kZWJvdW5jZWRQcm9taXNlID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX3Rvb2x0aXBFbGVtZW50KSB7XG4gICAgICB0aGlzLl90b29sdGlwRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Rvb2x0aXBUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3Rvb2x0aXBFbGVtZW50Lmluc3RhbmNlLmZhZGVTdGF0ZSA9ICdpbnZpc2libGUnO1xuXG4gICAgdGhpcy5jYW5TaG93ID0gZmFsc2U7XG5cbiAgICAvLyB3YWl0IGZvciBhbmltYXRpb24gdG8gZmluaXNoIHRoZW4gY2xlYXIgZXZlcnl0aGluZyBvdXRcbiAgICBzZXRUaW1lb3V0KFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5fdG9vbHRpcEVsZW1lbnQgJiZcbiAgICAgICAgICB0eXBlb2YgdGhpcy5fdG9vbHRpcEVsZW1lbnQuZGVzdHJveSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLl90b29sdGlwRWxlbWVudC5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b29sdGlwQ3RybC5yZW1vdmVUb29sdGlwKHRoaXMpO1xuICAgICAgICB0aGlzLl90b29sdGlwRWxlbWVudCA9IHRoaXMuX3Rvb2x0aXBUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmNhblNob3cgPSB0cnVlO1xuICAgICAgfSxcbiAgICAgIDMwMFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9yZXNldFRpbWVyKCk6dm9pZCB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3Rvb2x0aXBUaW1lb3V0KTtcbiAgICB0aGlzLl90b29sdGlwVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LCB0aGlzLmR1cmF0aW9uKTtcbiAgfVxufVxuIl19