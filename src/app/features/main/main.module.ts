import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { ChildComponent } from './components/child/child.component';

const routes: Route[] = [
  {
    path: '',
    component: MainComponent,
  },
];

@NgModule({
  declarations: [MainComponent, ChildComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class MainModule {}
