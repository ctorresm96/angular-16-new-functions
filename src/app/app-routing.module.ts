import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainResolver } from './common/resolvers/resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./features/main/main.module').then((m) => m.MainModule),
    resolve: { permissions: MainResolver },
    data: { users: [{ id: 1, name: 'John' }] },
  },
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
  {
    path: 'typed-forms',
    loadChildren: () =>
      import('./features/typed-forms/typed-forms.module').then(
        (m) => m.FunctionalModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
