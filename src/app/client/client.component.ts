import { Component, inject, OnInit } from "@angular/core";
import { ApiServiceService } from "../Services/api-service.service";
import { Client } from "../models/class";
import { FormsModule } from "@angular/forms";
import { NotificationService } from "../Services/notification.service";
import { Icon } from "../models/interface";
import * as progress  from 'nprogress'; 



@Component({
  selector: "app-client",
  standalone: true,
  imports: [FormsModule ],
  templateUrl: "./client.component.html",
  styleUrl: "./client.component.scss",
})
export class ClientComponent implements OnInit {
  // injecting the api service

  // an object  to hold the  properties and bind it to the form
  clientObject: Client = new Client();

  // an array of object  to hold the client data from the api
  clientPayload: Client[] = [];

  // loading for monitoring data fetch
  stillLoading: boolean = true;

  // variable for button when you click submit
  buttonLoading: boolean = false;

  // a buttont to track for save and update ;
  buttonName: string = "Save Client";

  constructor(
    private clientData: ApiServiceService,
    private notification: NotificationService, 

  ) { }
  

  ngOnInit(): void {
    this.getAllCleint();
  }

  getAllCleint() {
   
      this.clientData.getData("GetAllClients").subscribe(
        (res) => {
          this.clientPayload = res.data;
          this.stillLoading = false;
        },
        (error) => {
          console.log(error);
          this.stillLoading = false;
        }
      );
  }

  showTheProgressBar() {
    progress.start(); 
    setTimeout(() => {
      progress.done(); 
    }, 5000);
  }

  updateClient() {
    this.clientData
      .addClientData("AddUpdateClient", this.clientObject)
      .subscribe(
        (res) => {
          this.getAllCleint();
          this.notification.showAlert(
            "Alert",
            "Client added successfully",
            Icon.success
          );
          this.buttonLoading = false;
          this.clientObject = new Client();
        },
        (error) => {
          alert("there was an error");
          console.log(error);
          this.buttonLoading = false;
        }
      );
  }

  saveClient() {
    this.buttonLoading = true;
    this.buttonName = "Save Client";
    this.updateClient();
  }

  // a function to delete the client data
  deleteClient(id: number) {
    this.notification
      .showConfirmation(
        "Confirm delete",
        "Are you sure you want to delete ?",
        Icon.warning
      )
      .then((result) => {
        if (result.isConfirmed) {
          this.clientData.deleteClient("DeleteClientByClientId", id).subscribe(
            (res) => {
              this.notification.showAlert(
                "Deleted Successfully",
                "",
                Icon.success
              );
              this.getAllCleint();
            },
            (error) => {
              console.log(error);
            }
          );
        }
      });
  }

  // update the client
  UpdateExistingClient(item: Client) {
    this.buttonName = "Update Client";
    this.clientObject = item;
  }
}
