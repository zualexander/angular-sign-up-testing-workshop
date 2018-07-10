import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatProgressSpinnerModule, MatToolbarModule} from '@angular/material';
import {CounterPipe} from './counter.pipe';

const MATERIAL_COMPONENTS = [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatProgressSpinnerModule
];

const DECLARATION_EXPORTS = [
  CounterPipe
];

@NgModule({
  imports: [
    CommonModule,
    ...MATERIAL_COMPONENTS
  ],
  exports: [...MATERIAL_COMPONENTS, ...DECLARATION_EXPORTS],
  declarations: [...DECLARATION_EXPORTS]
})
export class SharedModule {
}
