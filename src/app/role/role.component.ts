import { Component, inject, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ApiServiceService } from "../api-service.service";
import { roleObject } from "../models/interface";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-role",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./role.component.html",
  styleUrl: "./role.component.scss",
})
export class RoleComponent implements OnInit {
  // the role payload
  rolepayload: roleObject[] = [];
  // injecting the dependency
  roleData = inject(ApiServiceService);
  ngOnInit(): void {
    this.roleData
      .getData(
        "https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles"
      )
      .subscribe(
        (res) => {
          this.rolepayload = res.data;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
