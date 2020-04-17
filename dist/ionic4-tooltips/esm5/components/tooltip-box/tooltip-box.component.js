/**
 * @fileoverview added by tsickle
 * Generated from: components/tooltip-box/tooltip-box.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';
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
    TooltipBox.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return TooltipBox;
}());
export { TooltipBox };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uaWM0LXRvb2x0aXBzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy90b29sdGlwLWJveC90b29sdGlwLWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQXNERSxvQkFDUyxVQUFxQixFQUNwQixHQUFhO1FBRnZCLGlCQVNDO1FBUlEsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUNwQixRQUFHLEdBQUgsR0FBRyxDQUFVO1FBeENELGNBQVMsR0FBVSxXQUFXLENBQUM7UUFFNUMsU0FBSSxHQUFVLFFBQVEsQ0FBQztRQUd2QixrQkFBYSxHQUE0QixFQUFFLENBQUM7UUFxQ25ELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxPQUFPOzs7O1FBQ3JCLFVBQUMsT0FBTztZQUNOLEtBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1FBQy9CLENBQUMsRUFDQSxDQUFDO0lBQ0osQ0FBQztJQXhDRCxzQkFDSSw2QkFBSzs7Ozs7UUFEVCxVQUNVLElBQVc7WUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQ25CLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUN2QixPQUFPLEVBQ1AsWUFBWSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQy9CLENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUVELHNCQUNJLDhCQUFNOzs7OztRQURWLFVBQ1csR0FBVTtZQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FDZixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFDdkIsS0FBSyxFQUNMLEdBQUcsR0FBRyxJQUFJLENBQ1gsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBRUQsc0JBQ0ksK0JBQU87Ozs7O1FBRFgsVUFDWSxHQUFVO1lBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUNmLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUN2QixNQUFNLEVBQ04sR0FBRyxHQUFHLElBQUksQ0FDWCxDQUFDO1FBQ0osQ0FBQzs7O09BQUE7Ozs7SUFpQkQscUNBQWdCOzs7SUFBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxvQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Z0JBdkVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUssYUFBYTtvQkFDMUIsb1FBQXlDO29CQUl6QyxVQUFVLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLE1BQU0sRUFBRTs0QkFDZCxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRCQUN2QyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRCQUN6QyxVQUFVLENBQUMsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO3lCQUM3RCxDQUFDO3FCQUNIO29CQUNELGVBQWUsRUFBQyx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDL0M7Ozs7Z0JBcEJDLFVBQVU7Z0JBR1YsU0FBUzs7OzRCQW1CUixXQUFXLFNBQUMsT0FBTzt1QkFFbkIsS0FBSzt1QkFDTCxLQUFLOzhCQUNMLEtBQUs7Z0NBQ0wsS0FBSzt3QkFFTCxLQUFLO3lCQVNMLEtBQUs7MEJBU0wsS0FBSzs7SUErQlIsaUJBQUM7Q0FBQSxBQXhFRCxJQXdFQztTQXpEWSxVQUFVOzs7SUFDckIsK0JBQXFEOztJQUVyRCwwQkFBZ0M7O0lBQ2hDLDBCQUFxQjs7SUFDckIsaUNBQTRCOztJQUM1QixtQ0FBcUQ7Ozs7O0lBNkJyRCxpQ0FBNkI7O0lBRTdCLDBCQUEwQjs7SUFHeEIsZ0NBQTRCOzs7OztJQUM1Qix5QkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICAgICd0b29sdGlwLWJveCcsXG4gIHRlbXBsYXRlVXJsOiAndG9vbHRpcC1ib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFtcbiAgICAndG9vbHRpcC1ib3guY29tcG9uZW50LnNjc3MnXG4gIF0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdmYWRlJywgW1xuICAgICAgc3RhdGUoJ3Zpc2libGUnLCBzdHlsZSh7IG9wYWNpdHk6IDEgfSkpLFxuICAgICAgc3RhdGUoJ2ludmlzaWJsZScsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSksXG4gICAgICB0cmFuc2l0aW9uKCd2aXNpYmxlIDw9PiBpbnZpc2libGUnLCBhbmltYXRlKCczMDBtcyBsaW5lYXInKSlcbiAgICBdKVxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBCb3ggaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQEhvc3RCaW5kaW5nKCdAZmFkZScpIGZhZGVTdGF0ZTpzdHJpbmcgPSAnaW52aXNpYmxlJztcblxuICBASW5wdXQoKSByb2xlOnN0cmluZyA9ICdzdGF0dXMnO1xuICBASW5wdXQoKSB0ZXh0OnN0cmluZztcbiAgQElucHV0KCkgdG9vbHRpcEh0bWw6c3RyaW5nO1xuICBASW5wdXQoKSB0b29sdGlwU3R5bGVzOnsgW2tleTpzdHJpbmddOnN0cmluZzsgfSA9IHt9O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBhcnJvdyhzaWRlOnN0cmluZykge1xuICAgIHRoaXMucm5kLnNldEF0dHJpYnV0ZShcbiAgICAgIHRoaXMuZ2V0TmF0aXZlRWxlbWVudCgpLFxuICAgICAgJ2NsYXNzJyxcbiAgICAgICdoYXMtYXJyb3cgJyArICdhcnJvdy0nICsgc2lkZVxuICAgICk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgcG9zVG9wKHZhbDpudW1iZXIpIHtcbiAgICB0aGlzLnJuZC5zZXRTdHlsZShcbiAgICAgIHRoaXMuZ2V0TmF0aXZlRWxlbWVudCgpLFxuICAgICAgJ3RvcCcsXG4gICAgICB2YWwgKyAncHgnXG4gICAgKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBwb3NMZWZ0KHZhbDpudW1iZXIpIHtcbiAgICB0aGlzLnJuZC5zZXRTdHlsZShcbiAgICAgIHRoaXMuZ2V0TmF0aXZlRWxlbWVudCgpLFxuICAgICAgJ2xlZnQnLFxuICAgICAgdmFsICsgJ3B4J1xuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGluaXRSZXNvbHZlOkZ1bmN0aW9uO1xuXG4gIHB1YmxpYyBpbml0OlByb21pc2U8dm9pZD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6RWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJuZDpSZW5kZXJlcjJcbiAgKSB7XG4gICAgdGhpcy5pbml0ID0gbmV3IFByb21pc2U8dm9pZD4oXG4gICAgICAocmVzb2x2ZSkgPT4ge1xuICAgICAgICB0aGlzLmluaXRSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGdldE5hdGl2ZUVsZW1lbnQoKTpIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6dm9pZCB7XG4gICAgdGhpcy5pbml0UmVzb2x2ZSgpO1xuICB9XG59XG4iXX0=