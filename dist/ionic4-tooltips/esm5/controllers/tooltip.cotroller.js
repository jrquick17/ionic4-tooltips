/**
 * @fileoverview added by tsickle
 * Generated from: controllers/tooltip.cotroller.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ TooltipController.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TooltipController_Factory() { return new TooltipController(); }, token: TooltipController, providedIn: "root" });
    return TooltipController;
}());
export { TooltipController };
if (false) {
    /** @type {?} */
    TooltipController.prototype.allowMultiple;
    /** @type {?} */
    TooltipController.prototype.activeTooltips;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb3Ryb2xsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb25pYzQtdG9vbHRpcHMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy90b29sdGlwLmNvdHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBR3pDO0lBQUE7UUFJUyxrQkFBYSxHQUFXLElBQUksQ0FBQztRQUM3QixtQkFBYyxHQUFzQixFQUFFLENBQUM7S0FxQi9DOzs7OztJQW5CQyxzQ0FBVTs7OztJQUFWLFVBQVcsUUFBeUI7UUFDbEMsSUFBSSxRQUFRLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDaEYsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCx5Q0FBYTs7OztJQUFiLFVBQWMsUUFBeUI7UUFDckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7OztJQUVELG1DQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTzs7OztRQUN6QixVQUFDLE9BQXdCO1lBQ3ZCLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQXpCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7NEJBTEQ7Q0E2QkMsQUExQkQsSUEwQkM7U0F2QlksaUJBQWlCOzs7SUFDNUIsMENBQW9DOztJQUNwQywyQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUb29sdGlwRGlyZWN0aXZlfSBmcm9tICcuLi9kaXJlY3RpdmVzL3Rvb2x0aXAuZGlyZWN0aXZlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBDb250cm9sbGVyIHtcbiAgcHVibGljIGFsbG93TXVsdGlwbGU6Ym9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBhY3RpdmVUb29sdGlwczpUb29sdGlwRGlyZWN0aXZlW10gPSBbXTtcblxuICBhZGRUb29sdGlwKGluc3RhbmNlOlRvb2x0aXBEaXJlY3RpdmUpOnZvaWQge1xuICAgIGlmIChpbnN0YW5jZS5oaWRlT3RoZXJzIHx8ICF0aGlzLmFsbG93TXVsdGlwbGUgJiYgdGhpcy5hY3RpdmVUb29sdGlwcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmhpZGVBbGwoKTtcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2ZVRvb2x0aXBzLnB1c2goaW5zdGFuY2UpO1xuICB9XG5cbiAgcmVtb3ZlVG9vbHRpcChpbnN0YW5jZTpUb29sdGlwRGlyZWN0aXZlKTp2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZVRvb2x0aXBzLnNwbGljZSh0aGlzLmFjdGl2ZVRvb2x0aXBzLmluZGV4T2YoaW5zdGFuY2UpLCAxKTtcbiAgfVxuXG4gIGhpZGVBbGwoKTp2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZVRvb2x0aXBzLmZvckVhY2goXG4gICAgICAodG9vbHRpcDpUb29sdGlwRGlyZWN0aXZlKSA9PiB7XG4gICAgICAgIHRvb2x0aXAucmVtb3ZlVG9vbHRpcCgpO1xuICAgICAgfVxuICAgICk7XG4gIH1cbn1cbiJdfQ==