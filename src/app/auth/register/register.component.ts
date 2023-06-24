import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateUserModelDto } from 'src/app/entities/user.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  constructor(private router:Router,private clientsService: ClientService){}


  ngOnInit():void{

  }
  passwordconfirm : string = '';

  users: CreateUserModelDto={
    name: '',
    lastname: '',
    photo: '',
    email: '',
    password: '',
    rol: '6a0cec44-61d8-467f-95d0-c80acf7d9b17'
  }

  navigateToLogin(){
    this.router.navigateByUrl("/login");
  }
  createUser(){
    console.log(this.users);
    try{
      if(this.users.password === this.passwordconfirm){
        this.clientsService.createUsers(this.users).subscribe(
          response =>{
            console.log(response);
            this.router.navigateByUrl("/dashboard/dashboard-client")
          }

        )
      }else {
        throw new Error("Deben ser iguales las contraseñas")
      }
    }catch (error){
      console.log(error)
    }

  }

}



