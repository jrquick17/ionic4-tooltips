/**
 * @fileoverview added by tsickle
 * Generated from: components/tooltip-box/tooltip-box.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';
export class TooltipBox {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uaWM0LXRvb2x0aXBzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy90b29sdGlwLWJveC90b29sdGlwLWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQWlCdkIsTUFBTSxPQUFPLFVBQVU7Ozs7O0lBdUNyQixZQUNTLFVBQXFCLEVBQ3BCLEdBQWE7UUFEZCxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQ3BCLFFBQUcsR0FBSCxHQUFHLENBQVU7UUF4Q0QsY0FBUyxHQUFVLFdBQVcsQ0FBQztRQUU1QyxTQUFJLEdBQVUsUUFBUSxDQUFDO1FBR3ZCLGtCQUFhLEdBQTRCLEVBQUUsQ0FBQztRQXFDbkQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLE9BQU87Ozs7UUFDckIsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNWLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1FBQy9CLENBQUMsRUFDQSxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUF4Q0QsSUFDSSxLQUFLLENBQUMsSUFBVztRQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FDbkIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQ3ZCLE9BQU8sRUFDUCxZQUFZLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FDL0IsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsSUFDSSxNQUFNLENBQUMsR0FBVTtRQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FDZixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFDdkIsS0FBSyxFQUNMLEdBQUcsR0FBRyxJQUFJLENBQ1gsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsSUFDSSxPQUFPLENBQUMsR0FBVTtRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FDZixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFDdkIsTUFBTSxFQUNOLEdBQUcsR0FBRyxJQUFJLENBQ1gsQ0FBQztJQUNKLENBQUM7Ozs7SUFpQkQsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7WUF2RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBSyxhQUFhO2dCQUMxQixvUUFBeUM7Z0JBSXpDLFVBQVUsRUFBRTtvQkFDVixPQUFPLENBQUMsTUFBTSxFQUFFO3dCQUNkLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ3ZDLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ3pDLFVBQVUsQ0FBQyx1QkFBdUIsRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7cUJBQzdELENBQUM7aUJBQ0g7Z0JBQ0QsZUFBZSxFQUFDLHVCQUF1QixDQUFDLE1BQU07O2FBQy9DOzs7O1lBcEJDLFVBQVU7WUFHVixTQUFTOzs7d0JBbUJSLFdBQVcsU0FBQyxPQUFPO21CQUVuQixLQUFLO21CQUNMLEtBQUs7MEJBQ0wsS0FBSzs0QkFDTCxLQUFLO29CQUVMLEtBQUs7cUJBU0wsS0FBSztzQkFTTCxLQUFLOzs7O0lBekJOLCtCQUFxRDs7SUFFckQsMEJBQWdDOztJQUNoQywwQkFBcUI7O0lBQ3JCLGlDQUE0Qjs7SUFDNUIsbUNBQXFEOzs7OztJQTZCckQsaUNBQTZCOztJQUU3QiwwQkFBMEI7O0lBR3hCLGdDQUE0Qjs7Ozs7SUFDNUIseUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAgICAndG9vbHRpcC1ib3gnLFxuICB0ZW1wbGF0ZVVybDogJ3Rvb2x0aXAtYm94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbXG4gICAgJ3Rvb2x0aXAtYm94LmNvbXBvbmVudC5zY3NzJ1xuICBdLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZmFkZScsIFtcbiAgICAgIHN0YXRlKCd2aXNpYmxlJywgc3R5bGUoeyBvcGFjaXR5OiAxIH0pKSxcbiAgICAgIHN0YXRlKCdpbnZpc2libGUnLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpLFxuICAgICAgdHJhbnNpdGlvbigndmlzaWJsZSA8PT4gaW52aXNpYmxlJywgYW5pbWF0ZSgnMzAwbXMgbGluZWFyJykpXG4gICAgXSlcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOkNoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwQm94IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBIb3N0QmluZGluZygnQGZhZGUnKSBmYWRlU3RhdGU6c3RyaW5nID0gJ2ludmlzaWJsZSc7XG5cbiAgQElucHV0KCkgcm9sZTpzdHJpbmcgPSAnc3RhdHVzJztcbiAgQElucHV0KCkgdGV4dDpzdHJpbmc7XG4gIEBJbnB1dCgpIHRvb2x0aXBIdG1sOnN0cmluZztcbiAgQElucHV0KCkgdG9vbHRpcFN0eWxlczp7IFtrZXk6c3RyaW5nXTpzdHJpbmc7IH0gPSB7fTtcblxuICBASW5wdXQoKVxuICBzZXQgYXJyb3coc2lkZTpzdHJpbmcpIHtcbiAgICB0aGlzLnJuZC5zZXRBdHRyaWJ1dGUoXG4gICAgICB0aGlzLmdldE5hdGl2ZUVsZW1lbnQoKSxcbiAgICAgICdjbGFzcycsXG4gICAgICAnaGFzLWFycm93ICcgKyAnYXJyb3ctJyArIHNpZGVcbiAgICApO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHBvc1RvcCh2YWw6bnVtYmVyKSB7XG4gICAgdGhpcy5ybmQuc2V0U3R5bGUoXG4gICAgICB0aGlzLmdldE5hdGl2ZUVsZW1lbnQoKSxcbiAgICAgICd0b3AnLFxuICAgICAgdmFsICsgJ3B4J1xuICAgICk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgcG9zTGVmdCh2YWw6bnVtYmVyKSB7XG4gICAgdGhpcy5ybmQuc2V0U3R5bGUoXG4gICAgICB0aGlzLmdldE5hdGl2ZUVsZW1lbnQoKSxcbiAgICAgICdsZWZ0JyxcbiAgICAgIHZhbCArICdweCdcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0UmVzb2x2ZTpGdW5jdGlvbjtcblxuICBwdWJsaWMgaW5pdDpQcm9taXNlPHZvaWQ+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50UmVmOkVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBybmQ6UmVuZGVyZXIyXG4gICkge1xuICAgIHRoaXMuaW5pdCA9IG5ldyBQcm9taXNlPHZvaWQ+KFxuICAgICAgKHJlc29sdmUpID0+IHtcbiAgICAgICAgdGhpcy5pbml0UmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgfVxuICAgICk7XG4gIH1cblxuICBnZXROYXRpdmVFbGVtZW50KCk6SFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOnZvaWQge1xuICAgIHRoaXMuaW5pdFJlc29sdmUoKTtcbiAgfVxufVxuIl19