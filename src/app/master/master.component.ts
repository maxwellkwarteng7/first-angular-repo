import { Component } from "@angular/core";
import { RoleComponent } from "../role/role.component";
import { DesignationComponent } from "../designation/designation.component";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-master",
  standalone: true,
  imports: [RoleComponent, DesignationComponent, CommonModule],
  templateUrl: "./master.component.html",
  styleUrl: "./master.component.scss",
})
export class MasterComponent {
  currentComponent: string = "role";

  updateToDesignation() {
    this.currentComponent = "designation";
  }

  updateToRole() {
    this.currentComponent = "role";
  }
}
