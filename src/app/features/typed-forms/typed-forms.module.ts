import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypedFormsComponent } from './typed-forms.component';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path: '',
    component: TypedFormsComponent,
  },
];

@NgModule({
  declarations: [TypedFormsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule,
    ReactiveFormsModule,
  ],
})
export class FunctionalModule {}
