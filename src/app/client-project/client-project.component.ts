import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ApiServiceService } from "../Services/api-service.service";
import { clientProject, Icon } from "../models/interface";
import { NotificationService } from "../Services/notification.service";

@Component({
  selector: "app-client-project",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./client-project.component.html",
  styleUrl: "./client-project.component.scss",
})
export class ClientProjectComponent implements OnInit {
  submitButton: string = "Save Project";
  buttonLoading: boolean = false;
  stillLoading: boolean = false;

  clientProject: clientProject[] = [];

  constructor(
    private service: ApiServiceService,
    private notification: NotificationService
  ) {}

  // fetching the data
  ngOnInit(): void {
    this.getClientProjects();
  }

  // function to fetch the client projects
  getClientProjects() {
    this.stillLoading = true;
    this.service.getAllClientProjects("GetAllClientProjects").subscribe(
      (res) => {
        this.clientProject = res.data;
        this.stillLoading = false;
      },
      (error) => {
        this.stillLoading = false;
        alert("Error fetching data");
        console.log(error);
      }
    );
  }

  // creating a formgroup to initialize a form values ;
  projectForm: FormGroup = new FormGroup({
    // this is where you initialize the values
    projectName: new FormControl(""),
    clientProjectId: new FormControl(0),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl(""),
    leadByEmpId: new FormControl(0),
    completedDate: new FormControl(""),
    contactPerson: new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    totalEmpWorking: new FormControl(0),
    projectCost: new FormControl(0),
    projectDetails: new FormControl(""),
    contactPersonEmailId: new FormControl(""),
    clientId: new FormControl(0),
  });

  saveClientProject() {
    let formValues = this.projectForm.value;
    this.service
      .addClientData("AddUpdateClient", formValues)
      .subscribe((res) => {
        this.notification.showAlert(
          "Client project added successfully",
          "",
          Icon.success
        );
      });
  }
}
