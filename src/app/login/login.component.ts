import { Component, signal } from "@angular/core";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  type = signal<string>("password");

  changeProp() {
    if (this.type() == "password") {
      this.type.set("text");
    } else {
      this.type.set("password");
    }
  }
}
