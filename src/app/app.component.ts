import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { DesignationComponent } from "./designation/designation.component";
import { CommonModule } from "@angular/common";
import { RoleComponent } from "./role/role.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RoleComponent, DesignationComponent, CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  // let's create a variable that will display the initial component
  title = "first-angular";

  currentComponent: string = "role";

  updateToDesignation() {
    this.currentComponent = "designation";
  }

  updateToRole() {
    this.currentComponent = "role";
  }
}
