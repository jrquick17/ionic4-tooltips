import { TooltipDirective } from '../directives/tooltip.directive';
export declare class TooltipController {
    allowMultiple: boolean;
    activeTooltips: TooltipDirective[];
    addTooltip(instance: TooltipDirective): void;
    removeTooltip(instance: TooltipDirective): void;
    hideAll(): void;
}
