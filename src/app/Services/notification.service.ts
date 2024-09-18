import { Injectable } from "@angular/core";
import Swal from "sweetalert2";
import { Icon } from "../models/interface";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  constructor() {}

  showAlert(title: string, text: string, icon: Icon) {
    return Swal.fire({
      title,
      text,
      icon,
    });
  }

  showConfirmation(title: string, text: string, icon: Icon) {
    return Swal.fire({
      title,
      text,
      icon,
      showCancelButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor: "#28a745",
      cancelButtonText: "No",
      cancelButtonColor: "#dc3545",
    });
  }
}
