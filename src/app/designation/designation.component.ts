import { Component, inject, OnInit } from "@angular/core";
import { ApiServiceService } from "../Services/api-service.service";
import { designationObject } from "../models/interface";
import { CommonModule } from "@angular/common";
import { environment } from "../../environments/environment.development";

@Component({
  selector: "app-designation",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./designation.component.html",
  styleUrl: "./designation.component.scss",
})
export class DesignationComponent implements OnInit {
  // injecting the api service
  designation = inject(ApiServiceService);

  //is loading variable
  isLoading1: boolean = true;

  // a variable to hold the designation data
  designationPayload: designationObject[] = [];

  ngOnInit(): void {
    this.designation.getData("GetAllDesignation").subscribe(
      (res) => {
        this.designationPayload = res.data;
        this.isLoading1 = false;
      },
      (error) => {
        console.log(error);
        this.isLoading1 = false;
      }
    );
  }
}
