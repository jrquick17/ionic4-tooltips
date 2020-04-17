/**
 * @fileoverview added by tsickle
 * Generated from: controllers/tooltip.cotroller.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class TooltipController {
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
/** @nocollapse */ TooltipController.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TooltipController_Factory() { return new TooltipController(); }, token: TooltipController, providedIn: "root" });
if (false) {
    /** @type {?} */
    TooltipController.prototype.allowMultiple;
    /** @type {?} */
    TooltipController.prototype.activeTooltips;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb3Ryb2xsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb25pYzQtdG9vbHRpcHMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy90b29sdGlwLmNvdHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBTXpDLE1BQU0sT0FBTyxpQkFBaUI7SUFIOUI7UUFJUyxrQkFBYSxHQUFXLElBQUksQ0FBQztRQUM3QixtQkFBYyxHQUFzQixFQUFFLENBQUM7S0FxQi9DOzs7OztJQW5CQyxVQUFVLENBQUMsUUFBeUI7UUFDbEMsSUFBSSxRQUFRLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDaEYsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsUUFBeUI7UUFDckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU87Ozs7UUFDekIsQ0FBQyxPQUF3QixFQUFFLEVBQUU7WUFDM0IsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFDRixDQUFDO0lBQ0osQ0FBQzs7O1lBekJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7SUFFQywwQ0FBb0M7O0lBQ3BDLDJDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Rvb2x0aXBEaXJlY3RpdmV9IGZyb20gJy4uL2RpcmVjdGl2ZXMvdG9vbHRpcC5kaXJlY3RpdmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcENvbnRyb2xsZXIge1xuICBwdWJsaWMgYWxsb3dNdWx0aXBsZTpib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIGFjdGl2ZVRvb2x0aXBzOlRvb2x0aXBEaXJlY3RpdmVbXSA9IFtdO1xuXG4gIGFkZFRvb2x0aXAoaW5zdGFuY2U6VG9vbHRpcERpcmVjdGl2ZSk6dm9pZCB7XG4gICAgaWYgKGluc3RhbmNlLmhpZGVPdGhlcnMgfHwgIXRoaXMuYWxsb3dNdWx0aXBsZSAmJiB0aGlzLmFjdGl2ZVRvb2x0aXBzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuaGlkZUFsbCgpO1xuICAgIH1cblxuICAgIHRoaXMuYWN0aXZlVG9vbHRpcHMucHVzaChpbnN0YW5jZSk7XG4gIH1cblxuICByZW1vdmVUb29sdGlwKGluc3RhbmNlOlRvb2x0aXBEaXJlY3RpdmUpOnZvaWQge1xuICAgIHRoaXMuYWN0aXZlVG9vbHRpcHMuc3BsaWNlKHRoaXMuYWN0aXZlVG9vbHRpcHMuaW5kZXhPZihpbnN0YW5jZSksIDEpO1xuICB9XG5cbiAgaGlkZUFsbCgpOnZvaWQge1xuICAgIHRoaXMuYWN0aXZlVG9vbHRpcHMuZm9yRWFjaChcbiAgICAgICh0b29sdGlwOlRvb2x0aXBEaXJlY3RpdmUpID0+IHtcbiAgICAgICAgdG9vbHRpcC5yZW1vdmVUb29sdGlwKCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIl19