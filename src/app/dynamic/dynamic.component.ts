import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  template: `
    <h1>
      this is a dynamic component
    </h1>
    <h1 *ngIf="true">
      Hello world
    </h1>

    <app-another-comp></app-another-comp>
  `
})

export class DynamicComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
