import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const authGuard: CanActivateFn = (route, state) => {
  //make an instance of the router
  const router = inject(Router);

  //getting  token
  function checkForToken(): boolean {
    const token = localStorage.getItem("token");
    return !!token;
  }

  //check  if there's token
  const tokenAvailable = checkForToken();

  if (!tokenAvailable) {
    router.navigateByUrl("/login");
  }

  return tokenAvailable;
};
