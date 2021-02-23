import { AcademicSystemRoutes } from './pages/academic-system/academic-system-routing.module';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserManagementRoutes } from './pages/user-management/user-management-routing.module';
import { UnauthorizedPageComponent } from "./shared/components/unauthorized-page/unauthorized-page.component";
import { RealStatesRoutes } from './pages/real-states/real-states-routing.module';

const routes: Routes = [
  { path: "", redirectTo: "realStates/visits", pathMatch: "full" },
  { path: "redirect", redirectTo: "", pathMatch: "full" },
  { path: "unauthorized", component: UnauthorizedPageComponent },
  ...UserManagementRoutes.routes,
  ...AcademicSystemRoutes.routes,
  ...RealStatesRoutes.routes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
