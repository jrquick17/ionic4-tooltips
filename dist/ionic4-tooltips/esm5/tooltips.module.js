/**
 * @fileoverview added by tsickle
 * Generated from: tooltips.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TooltipBox } from './components/tooltip-box/tooltip-box.component';
import { TooltipController } from './controllers/tooltip.cotroller';
import { TooltipDirective } from './directives/tooltip.directive';
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
    return TooltipsModule;
}());
export { TooltipsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uaWM0LXRvb2x0aXBzLyIsInNvdXJjZXMiOlsidG9vbHRpcHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBc0IsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQztBQUMxRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVoRTtJQUFBO0lBd0JBLENBQUM7Ozs7SUFSUSxzQkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNULGlCQUFpQjthQUNsQjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkF2QkYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixnQkFBZ0I7d0JBQ2hCLFVBQVU7cUJBQ1g7b0JBQ0QsZUFBZSxFQUFFO3dCQUNmLFVBQVU7cUJBQ1g7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQjtxQkFDakI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7aUJBQ0Y7O0lBVUQscUJBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQVRZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1Rvb2x0aXBCb3h9IGZyb20gJy4vY29tcG9uZW50cy90b29sdGlwLWJveC90b29sdGlwLWJveC5jb21wb25lbnQnO1xuaW1wb3J0IHtUb29sdGlwQ29udHJvbGxlcn0gZnJvbSAnLi9jb250cm9sbGVycy90b29sdGlwLmNvdHJvbGxlcic7XG5pbXBvcnQge1Rvb2x0aXBEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy90b29sdGlwLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRvb2x0aXBEaXJlY3RpdmUsXG4gICAgVG9vbHRpcEJveFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBUb29sdGlwQm94XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUb29sdGlwRGlyZWN0aXZlXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwc01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6TW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUb29sdGlwc01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBUb29sdGlwQ29udHJvbGxlclxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=