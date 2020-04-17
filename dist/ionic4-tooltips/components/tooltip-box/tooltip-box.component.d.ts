import { AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
export declare class TooltipBox implements AfterViewInit {
    elementRef: ElementRef;
    private rnd;
    fadeState: string;
    role: string;
    text: string;
    tooltipHtml: string;
    tooltipStyles: {
        [key: string]: string;
    };
    arrow: string;
    posTop: number;
    posLeft: number;
    private initResolve;
    init: Promise<void>;
    constructor(elementRef: ElementRef, rnd: Renderer2);
    getNativeElement(): HTMLElement;
    ngAfterViewInit(): void;
}
