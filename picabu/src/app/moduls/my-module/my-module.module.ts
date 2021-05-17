import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetModuleComponent } from './widget/widget-module/widget-module.component';



@NgModule({
  declarations: [WidgetModuleComponent],
  exports: [
    WidgetModuleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MyModuleModule { }
