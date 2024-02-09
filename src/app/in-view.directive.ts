import { Directive, AfterViewInit, ElementRef, EventEmitter, OnDestroy, Output, } from '@angular/core';


export interface VisibilityState {
  elem: ElementRef;
  view: 'VISIBLE' | 'HIDDEN';
}

@Directive({
  selector: '[appInView]',
  standalone: true
})

export class InViewDirective implements AfterViewInit, OnDestroy {

  @Output() visibilityChange = new EventEmitter<VisibilityState>();


  private _observer: IntersectionObserver | undefined;

  constructor(private _elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    const options = { root: null, rootMargin: '1000px 0px 0px 0px', threshold: [0.3] };
    this._observer = new IntersectionObserver(this._callback, options);
    this._observer.observe(this._elementRef.nativeElement);
  }


  private _callback: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) =>
      this.visibilityChange.emit(this._getVisibilityState(entry))
    );
  };


  _getVisibilityState(entry: IntersectionObserverEntry): VisibilityState {
    console.log(entry);
    let result = entry.isIntersecting ? 'VISIBLE' : 'HIDDEN';
    return { elem: this._elementRef, view: result } as VisibilityState;
  }

  ngOnDestroy(): void {
    if(this._observer) {
      this._observer.disconnect();
    }
  }
}
