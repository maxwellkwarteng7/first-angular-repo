import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { MasterComponent } from "./master/master.component";
import { LayoutComponent } from "./layout/layout.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MasterComponent,
    RouterLinkActive,
    LayoutComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  // let's create a variable that will display the initial component
  title = "first-angular";
}
