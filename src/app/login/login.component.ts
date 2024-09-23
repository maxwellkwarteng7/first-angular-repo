import { Component, inject, signal } from "@angular/core";
import { Icon, loginDetails } from "../models/interface";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { NotificationService } from "../Services/notification.service";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  type = signal<string>("password");

  // let's create an instance of the router
  router = inject(Router);
  notification = inject(NotificationService);

  // an interface to hold the login details
  credentials: loginDetails = {
    username: "",
    password: "",
  };

  changeProp() {
    if (this.type() == "password") {
      this.type.set("text");
    } else {
      this.type.set("password");
    }
  }

  handleSubmit() {
    if (
      this.credentials.username == "schneider001" &&
      this.credentials.password == "12345678"
    ) {
      localStorage.setItem("token", "pavilion277747478e");
      this.router.navigateByUrl("/master");
    } else {
      this.credentials.password = "";
      this.notification.showAlert(
        "Invalid username or password",
        "",
        Icon.error
      );
    }
  }
}
