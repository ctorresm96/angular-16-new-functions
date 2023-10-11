import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionalComponent } from './functional.component';
import { RouterModule } from '@angular/router';
import { PrivateDataComponent } from './components/private-data/private-data.component';
import { UsersComponent } from './components/users/users.component';

const routes = [
  {
    path: '',
    component: FunctionalComponent,
    children: [
      { path: 'private', component: PrivateDataComponent },
      { path: 'users', component: UsersComponent },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  declarations: [FunctionalComponent, PrivateDataComponent, UsersComponent],
  imports: [CommonModule, RouterModule.forChild(routes), RouterModule],
})
export class FunctionalModule {}
