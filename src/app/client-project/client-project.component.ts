import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ApiServiceService } from "../Services/api-service.service";
import {
  apiObject,
  clientProject,
  employeeInterface,
  Icon,
} from "../models/interface";
import { NotificationService } from "../Services/notification.service";
import { Client } from "../models/class";
import {
  AsyncPipe,
  CommonModule,
  CurrencyPipe,
  DatePipe,
  UpperCasePipe,
} from "@angular/common";
import { Observable } from "rxjs";

@Component({
  selector: "app-client-project",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    UpperCasePipe,
    DatePipe,
    CurrencyPipe,
    AsyncPipe
  ],
  templateUrl: "./client-project.component.html",
  styleUrl: "./client-project.component.scss",
})
export class ClientProjectComponent implements OnInit {
  submitButton: string = "Save Project";
  buttonLoading: boolean = false;
  stillLoading: boolean = false;
  clientDetails: Client[] = [];
  clientProject: clientProject[] = [];
  employeeData: employeeInterface[] = [];
  currentDate: Date = new Date();
  cost: number = 45;

  // creating an observable to display data directly in the .html using async pipe to subscribe to it
  userList$: Observable<any> = new Observable<any>; 

  constructor(
    private service: ApiServiceService,
    private notification: NotificationService
  ) {}

  // fetching the data
  ngOnInit(): void {
    this.getClientProjects();
    this.getClientDetails();
    this.getEmployeeData();
    this.userList$ = this.service.getAllUsers(); 
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
    this.buttonLoading = true;
    let formValues = this.projectForm.value;
    this.service
      .addNewClientProject("AddUpdateClientProject", formValues)
      .subscribe(
        (res) => {
          this.notification.showAlert("Client Project added", "", Icon.success);
          this.buttonLoading = false;
        },
        (error) => {
          this.buttonLoading = false;
          console.log(error);
        }
      );
  }

  // fetching the client and employee to a load into the .html
  getClientDetails() {
    this.service.getData("GetAllClients").subscribe(
      (res) => {
        this.clientDetails = res.data;
      },
      (error) => console.log(error.message)
    );
  }

  getEmployeeData() {
    this.service.getData("GetAllEmployee").subscribe(
      (res: apiObject) => {
        this.employeeData = res.data;
      },
      (error) => console.log(error.message)
    );
  }
}
