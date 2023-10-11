import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FunctionalModule } from './features/functional/functional.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'functional' },
  {
    path: 'functional',
    loadChildren: () =>
      import('./features/functional/functional.module').then(
        (m) => m.FunctionalModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
