import { Component, inject, OnInit, signal, Signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ApiServiceService } from "../Services/api-service.service";
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
  // the data
  roleData = signal<roleObject[]>([]);

  // loading variable
  isLoading: boolean = true;

  // injecting the dependency
  roleApiCall = inject(ApiServiceService);
  ngOnInit(): void {
    this.roleApiCall.getData("GetAllRoles").subscribe(
      (res) => {
        this.roleData.set(res.data);
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }
}
