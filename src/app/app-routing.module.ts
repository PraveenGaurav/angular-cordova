import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CameraTestComponent } from './camera-test/camera-test.component';


const routes: Routes = [
  { path: 'camera', component: CameraTestComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
