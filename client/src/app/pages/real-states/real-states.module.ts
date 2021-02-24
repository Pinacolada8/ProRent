import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealStatesRoutingModule } from './real-states-routing.module';
import { RealstatesComponent } from './realstates/realstates.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Ng5SliderModule } from 'ng5-slider';
import { NewRealEstateComponent } from './realstates/new-real-estate/new-real-estate.component';


@NgModule({
  declarations: [RealstatesComponent, NewRealEstateComponent],
  imports: [CommonModule, RealStatesRoutingModule, SharedModule],
})
export class RealStatesModule {}
