import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'functional' },
  {
    path: 'functional',
    loadChildren: () =>
      import('./features/functional-guards/functional.module').then(
        (m) => m.FunctionalModule
      ),
  },
  {
    path: 'destroy-ref',
    loadChildren: () =>
      import('./features/destroy-ref/destroy-ref.module').then(
        (m) => m.DestroyRefModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
