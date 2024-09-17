import { Routes } from "@angular/router";
<<<<<<< HEAD
import { AppComponent } from "./app.component";

export const routes: Routes = [];
=======
import { EmployeeComponent } from "./employee/employee.component";
import { ClientComponent } from "./client/client.component";
import { MasterComponent } from "./master/master.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "master",
    pathMatch: "full",
  },
  {
    path: "master",
    component: MasterComponent,
  },

  {
    path: "employee",
    component: EmployeeComponent,
  },
  {
    path: "client",
    component: ClientComponent,
  },
];
>>>>>>> c91b53600ee1c9b80b22d73f6047f4f1de20f33e
