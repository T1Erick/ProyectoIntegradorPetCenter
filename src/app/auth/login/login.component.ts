import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private router: Router){

}


navigateToDashboard(){this.router.navigateByUrl("/dashboard/dashboard-client")}
navigateToRegister() {
  this.router.navigateByUrl("register");
}



}
