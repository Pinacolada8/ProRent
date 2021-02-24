import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealStatesRoutingModule } from './real-states-routing.module';
import { RealstatesComponent } from './realstates/realstates.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Ng5SliderModule } from 'ng5-slider';


@NgModule({
  declarations: [RealstatesComponent],
  imports: [CommonModule, RealStatesRoutingModule, SharedModule],
})
export class RealStatesModule {}
