import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { ReposComponent } from './components/repos/repos.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'repos/:login', component: ReposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
