import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CompleteRoutes, CompleteRoutesName } from "src/app/shared/extensions/CompleteRoutes";
import { StudentComponent } from "../user-management/student/student.component";
import { RealstatesComponent } from "./realstates/realstates.component";

const routes: CompleteRoutes = [
  {
    path: "realStates/register",
    // TODO
    component: RealstatesComponent,
    icon: "person",
    name: "Visits",
  },
  {
    path: "realStates/visits",
    // TODO
    component: StudentComponent,
    icon: "person",
    name: "Register",
  },
];

export const RealStatesRoutes: CompleteRoutesName = {
  routes,
  name: "Properties",
  icon: "group",
  isSelected: true,
};

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealStatesRoutingModule {}
