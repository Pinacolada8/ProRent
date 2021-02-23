import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealStatesRoutingModule } from './real-states-routing.module';
import { RealstatesComponent } from './realstates/realstates.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [RealstatesComponent],
  imports: [CommonModule, RealStatesRoutingModule, SharedModule],
})
export class RealStatesModule {}
