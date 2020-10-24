import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserBenefitsPageRoutingModule } from './user-benefits-routing.module';

import { UserBenefitsPage } from './user-benefits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserBenefitsPageRoutingModule
  ],
  declarations: [UserBenefitsPage]
})
export class UserBenefitsPageModule {}
