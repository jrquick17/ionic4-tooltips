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
export class TooltipsModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uaWM0LXRvb2x0aXBzLyIsInNvdXJjZXMiOlsidG9vbHRpcHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBc0IsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQztBQUMxRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQWlCaEUsTUFBTSxPQUFPLGNBQWM7Ozs7SUFDekIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNULGlCQUFpQjthQUNsQjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUF2QkYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixnQkFBZ0I7b0JBQ2hCLFVBQVU7aUJBQ1g7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLFVBQVU7aUJBQ1g7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGdCQUFnQjtpQkFDakI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7VG9vbHRpcEJveH0gZnJvbSAnLi9jb21wb25lbnRzL3Rvb2x0aXAtYm94L3Rvb2x0aXAtYm94LmNvbXBvbmVudCc7XG5pbXBvcnQge1Rvb2x0aXBDb250cm9sbGVyfSBmcm9tICcuL2NvbnRyb2xsZXJzL3Rvb2x0aXAuY290cm9sbGVyJztcbmltcG9ydCB7VG9vbHRpcERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3Rvb2x0aXAuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVG9vbHRpcERpcmVjdGl2ZSxcbiAgICBUb29sdGlwQm94XG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIFRvb2x0aXBCb3hcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRvb2x0aXBEaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBzTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTpNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRvb2x0aXBzTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFRvb2x0aXBDb250cm9sbGVyXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==