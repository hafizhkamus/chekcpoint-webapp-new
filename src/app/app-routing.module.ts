import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModernComponent } from './layouts/modern/modern.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full',
    data: {
      title: 'Checkpoint App'
    }
  },
  {
    path:'landing',
    component: ModernComponent,
    data: {
      title: 'Checkpoint App'
    }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
