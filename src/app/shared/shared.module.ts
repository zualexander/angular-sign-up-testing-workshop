import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatToolbarModule} from '@angular/material';

const MATERIAL_COMPONENTS = [
  MatToolbarModule,
  MatButtonModule
];

@NgModule({
  imports: [
    CommonModule,
    ...MATERIAL_COMPONENTS
  ],
  exports: [...MATERIAL_COMPONENTS],
  declarations: []
})
export class SharedModule {
}
