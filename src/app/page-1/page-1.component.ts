import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-page-1',
  templateUrl: './page-1.component.html',
  styleUrls: ['./page-1.component.css'],
})
export class Page1Component implements OnInit, OnDestroy {
  private foo: Observable<number> = interval(1000);

  ngOnInit() {
    this.foo.subscribe((v) => console.log(v));
  }

  ngOnDestroy() {
    console.log('page1 destroyed');
  }
}
