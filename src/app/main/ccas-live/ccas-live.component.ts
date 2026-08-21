import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-ccas-live',
  templateUrl: './ccas-live.component.html',
  styleUrls: ['./ccas-live.component.scss']
})
export class CcasLiveComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone) { }

  ngOnInit(): void {
    // Force change detection on init — fixes Edge blank page bug
    // where SVG animations don't trigger on first render
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.ngZone.run(() => {
          this.cdr.detectChanges();

          // Also reset SVG path animations for Edge compatibility
          const paths = document.querySelectorAll('svg path');
          paths.forEach((path: Element) => {
            const el = path as HTMLElement;
            el.style.animation = 'none';
            // Force reflow
            void el.offsetHeight;
            el.style.animation = '';
          });
        });
      }, 50);
    });
  }

}

