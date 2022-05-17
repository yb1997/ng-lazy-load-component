import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another-comp',
  template: `
    Just another component
  `
})

export class AnotherComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
