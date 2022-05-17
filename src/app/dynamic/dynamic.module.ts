import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnotherComponent } from './components/another.component';

import { DynamicComponent } from './dynamic.component';

@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [DynamicComponent, AnotherComponent],
  providers: [],
})
export class DynamicModule { }
