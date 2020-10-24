import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserBenefitsPage } from './user-benefits.page';

const routes: Routes = [
  {
    path: '',
    component: UserBenefitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserBenefitsPageRoutingModule {}
