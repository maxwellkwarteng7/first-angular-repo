import { Component, inject, OnInit } from "@angular/core";
import { ApiServiceService } from "../../api-service.service";
import { designationObject } from "../../models/interface";
import { CommonModule } from "@angular/common";

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

  // a variable to hold the designation data
  designationPayload: designationObject[] = [];

  ngOnInit(): void {
    this.designation
      .getData(
        "https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation"
      )
      .subscribe(
        (res) => {
          this.designationPayload = res.data;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
