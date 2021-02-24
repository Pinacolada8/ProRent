import { MaterialModule } from "./../../material-module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RealStatesRoutingModule } from "./real-states-routing.module";
import { RealstatesComponent } from "./realstates/realstates.component";
import { SharedModule } from "src/app/shared/shared.module";
import { NewRealEstateComponent } from "./realstates/new-real-estate/new-real-estate.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [RealstatesComponent, NewRealEstateComponent],
  imports: [CommonModule, RealStatesRoutingModule, SharedModule, MaterialModule, FormsModule],
  entryComponents: [NewRealEstateComponent],
})
export class RealStatesModule {}
