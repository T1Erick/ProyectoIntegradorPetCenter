import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserAuthModel } from 'src/app/entities/auth-login.model';
import { AuthService } from 'src/app/services/authservice.service';
import { TokenService } from 'src/app/services/token.service';
import jwt_decode from 'jwt-decode';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

constructor(private router: Router, private authService: AuthService, private tokenService: TokenService, private cookkieService: CookieService ){

}

ngOnInit(): void {
  this.cookkieService.deleteAll()

}
user: UserAuthModel ={
  email: '',
  password: ''
}
Login():void{

  try{
    console.log(this.user)
    this.authService.login(this.user).subscribe(
      data=>{
        if(data['accessToke']){
          const dataJson = JSON.stringify(data['accessToke'])
          console.log(dataJson)
          this.cookkieService.set('user',dataJson)
          this.router.navigateByUrl("/dashboard/dashboard-client")
          console.log(this.cookkieService.get('user'))
          const payload: any = jwt_decode(dataJson);
          const role = payload.role.namerol

<<<<<<< HEAD
          if (role === 'Users') {
=======
          if (role === 'Usuario') {
>>>>>>> 925b796e27da016b2635909709e20942bd8f724e
            this.router.navigateByUrl("/dashboard/dashboard-client")

          } if (role === 'Admin') {
            this.router.navigateByUrl("/dashboard/dashboard-admin")

          }
        }else{
          alert('No existe el usuario verifica bien tu informacion y si no tienes registrate es gratis :)');
        }
      }

    )



  }catch (error){
    console.log(error)
  }

}

deletecookie(){
  this.cookkieService.deleteAll()
}


navigateToRegister() {
  this.router.navigateByUrl("register");
}



}
