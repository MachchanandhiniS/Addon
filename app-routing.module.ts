import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddaddonComponent } from './addaddon/addaddon.component';
import { AddonComponent } from './addon/addon.component';
import { EditaddonComponent } from './editaddon/editaddon.component';

const routes: Routes = [
  {path:'addon',component:AddonComponent},
  {path:'addAddon',component:AddaddonComponent},
  {path:'editPlan/:id',component:EditaddonComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
