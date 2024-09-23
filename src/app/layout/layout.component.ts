import { Component, inject } from "@angular/core";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from "@angular/router";

@Component({
  selector: "app-layout",
  standalone: true,
  imports: [RouterLinkActive, RouterLink, RouterOutlet],
  templateUrl: "./layout.component.html",
  styleUrl: "./layout.component.scss",
})
export class LayoutComponent {
  //creating a instance of the router class

  router = inject(Router);

  handleLogout() {
    // clearing the token
    localStorage.removeItem("token");
    this.router.navigateByUrl("/login");
  }
}
