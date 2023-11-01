import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Route[] = [
  {
    path: '',
    component: MainComponent,
  },
];

@NgModule({
  declarations: [MainComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class MainModule {}
