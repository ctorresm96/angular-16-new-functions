import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { DestroyRefComponent } from './components/destroy-ref/destroy-ref.component';
const routes: Route[] = [
  {
    path: '',
    component: DestroyRefComponent,
  },
];

@NgModule({
  declarations: [DestroyRefComponent],
  imports: [CommonModule, RouterModule.forChild(routes), RouterModule],
})
export class DestroyRefModule {}
