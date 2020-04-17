(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/animations'), require('@angular/core'), require('@ionic/angular'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ionic4-tooltips', ['exports', '@angular/animations', '@angular/core', '@ionic/angular', '@angular/common'], factory) :
    (global = global || self, factory(global['ionic4-tooltips'] = {}, global.ng.animations, global.ng.core, global.angular, global.ng.common));
}(this, (function (exports, animations, core, angular, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: components/tooltip-box/tooltip-box.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TooltipBox = /** @class */ (function () {
        function TooltipBox(elementRef, rnd) {
            var _this = this;
            this.elementRef = elementRef;
            this.rnd = rnd;
            this.fadeState = 'invisible';
            this.role = 'status';
            this.tooltipStyles = {};
            this.init = new Promise((/**
             * @param {?} resolve
             * @return {?}
             */
            function (resolve) {
                _this.initResolve = resolve;
            }));
        }
        Object.defineProperty(TooltipBox.prototype, "arrow", {
            set: /**
             * @param {?} side
             * @return {?}
             */
            function (side) {
                this.rnd.setAttribute(this.getNativeElement(), 'class', 'has-arrow ' + 'arrow-' + side);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TooltipBox.prototype, "posTop", {
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this.rnd.setStyle(this.getNativeElement(), 'top', val + 'px');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TooltipBox.prototype, "posLeft", {
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this.rnd.setStyle(this.getNativeElement(), 'left', val + 'px');
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TooltipBox.prototype.getNativeElement = /**
         * @return {?}
         */
        function () {
            return this.elementRef.nativeElement;
        };
        /**
         * @return {?}
         */
        TooltipBox.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this.initResolve();
        };
        TooltipBox.decorators = [
            { type: core.Component, args: [{
                        selector: 'tooltip-box',
                        template: "<div class=\"tooltip-box\"\n     [attr.aria-role]=\"role\"\n     [ngStyle]=\"tooltipStyles\">\n  <div *ngIf=\"tooltipHtml; else txt\" [innerHTML]=\"tooltipHtml\"></div>\n\n  <ng-template #txt><div [innerHtml]=\"text\"></div></ng-template>\n</div>\n",
                        animations: [
                            animations.trigger('fade', [
                                animations.state('visible', animations.style({ opacity: 1 })),
                                animations.state('invisible', animations.style({ opacity: 0 })),
                                animations.transition('visible <=> invisible', animations.animate('300ms linear'))
                            ])
                        ],
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":root{--background:white;--color:#000}:host{background-color:var(--background);color:var(--color);display:inline-block;position:fixed;padding:15px 25px;font-size:15px;z-index:3}:host.has-arrow:before{content:\"\";border:5px solid transparent;position:absolute;width:0;height:0}:host.has-arrow.arrow-top:before{border-bottom:5px solid var(--background);top:-10px}:host.has-arrow.arrow-left:before{border-right:5px solid var(--background);left:-10px}:host.has-arrow.arrow-right:before{border-left:5px solid var(--background);right:-10px}:host.has-arrow.arrow-bottom:before{border-top:5px solid var(--background);bottom:-10px}:host.has-arrow.arrow-bottom-center:before{border-top:5px solid var(--background);bottom:-10px;left:50%;transform:translateX(-50%)}:host.has-arrow.arrow-top-center:before{border-bottom:5px solid var(--background);top:-10px;left:50%;transform:translateX(-50%)}"]
                    }] }
        ];
        /** @nocollapse */
        TooltipBox.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        TooltipBox.propDecorators = {
            fadeState: [{ type: core.HostBinding, args: ['@fade',] }],
            role: [{ type: core.Input }],
            text: [{ type: core.Input }],
            tooltipHtml: [{ type: core.Input }],
            tooltipStyles: [{ type: core.Input }],
            arrow: [{ type: core.Input }],
            posTop: [{ type: core.Input }],
            posLeft: [{ type: core.Input }]
        };
        return TooltipBox;
    }());
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
    var TooltipController = /** @class */ (function () {
        function TooltipController() {
            this.allowMultiple = true;
            this.activeTooltips = [];
        }
        /**
         * @param {?} instance
         * @return {?}
         */
        TooltipController.prototype.addTooltip = /**
         * @param {?} instance
         * @return {?}
         */
        function (instance) {
            if (instance.hideOthers || !this.allowMultiple && this.activeTooltips.length > 0) {
                this.hideAll();
            }
            this.activeTooltips.push(instance);
        };
        /**
         * @param {?} instance
         * @return {?}
         */
        TooltipController.prototype.removeTooltip = /**
         * @param {?} instance
         * @return {?}
         */
        function (instance) {
            this.activeTooltips.splice(this.activeTooltips.indexOf(instance), 1);
        };
        /**
         * @return {?}
         */
        TooltipController.prototype.hideAll = /**
         * @return {?}
         */
        function () {
            this.activeTooltips.forEach((/**
             * @param {?} tooltip
             * @return {?}
             */
            function (tooltip) {
                tooltip.removeTooltip();
            }));
        };
        TooltipController.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */ TooltipController.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function TooltipController_Factory() { return new TooltipController(); }, token: TooltipController, providedIn: "root" });
        return TooltipController;
    }());
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
    var TooltipEvent = {
        CLICK: "click",
        HOVER: "hover",
        PRESS: "press",
    };

    /**
     * @fileoverview added by tsickle
     * Generated from: directives/tooltip.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Directive, args: [{
                        selector: '[tooltip]',
                    },] }
        ];
        /** @nocollapse */
        TooltipDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ApplicationRef },
            { type: angular.Platform },
            { type: core.ComponentFactoryResolver },
            { type: TooltipController },
            { type: core.ViewContainerRef }
        ]; };
        TooltipDirective.propDecorators = {
            debounce: [{ type: core.Input }],
            desktopEvent: [{ type: core.Input }],
            event: [{ type: core.Input }],
            hideOthers: [{ type: core.Input }],
            leftOffset: [{ type: core.Input }],
            mobileEvent: [{ type: core.Input }],
            positionV: [{ type: core.Input }],
            positionH: [{ type: core.Input }],
            role: [{ type: core.Input }],
            tooltip: [{ type: core.Input }],
            tooltipHtml: [{ type: core.Input }],
            tooltipStyles: [{ type: core.Input }],
            topOffset: [{ type: core.Input }],
            navTooltip: [{ type: core.Input }],
            arrow: [{ type: core.Input }],
            duration: [{ type: core.Input }],
            active: [{ type: core.Input }],
            onClick: [{ type: core.HostListener, args: ['click',] }],
            onPress: [{ type: core.HostListener, args: ['press',] }],
            onMouseEnter: [{ type: core.HostListener, args: ['mouseenter',] }],
            onMouseLeave: [{ type: core.HostListener, args: ['mouseleave',] }]
        };
        return TooltipDirective;
    }());
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
    var TooltipsModule = /** @class */ (function () {
        function TooltipsModule() {
        }
        /**
         * @return {?}
         */
        TooltipsModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: TooltipsModule,
                providers: [
                    TooltipController
                ],
            };
        };
        TooltipsModule.decorators = [
            { type: core.NgModule, args: [{
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
                            common.CommonModule
                        ]
                    },] }
        ];
        return TooltipsModule;
    }());

    exports.TooltipBox = TooltipBox;
    exports.TooltipController = TooltipController;
    exports.TooltipDirective = TooltipDirective;
    exports.TooltipsModule = TooltipsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ionic4-tooltips.umd.js.map
