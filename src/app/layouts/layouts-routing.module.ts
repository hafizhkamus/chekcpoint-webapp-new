import { ModernComponent } from './modern/modern.component';
import { Routes, RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: 'landing',
    component: ModernComponent,
    data: {
      title: "Checkpoint App"
    }
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
