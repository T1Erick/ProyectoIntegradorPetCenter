import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CreatePublicationModelDto, PublicationModel } from 'src/app/entities/publication.model';
import { PublicationService } from 'src/app/services/publication.service';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.css']
})
export class SocialNetworkComponent implements OnInit {
  constructor(private publicationService: PublicationService, private cokkieService: CookieService ,private router : Router ){}
  ngOnInit(): void {
    this.getPublications()

  }
  publication: PublicationModel[]=[]
  publications: CreatePublicationModelDto={
    title: '',
    description: '',
    images: ''
  }
  Jsonusuario= this.cokkieService.get('user')
  payload: any = jwt_decode(this.Jsonusuario);
  namebill = this.payload.name;
  secondnamebill= this.payload.secondname;
  emailbill = this.payload.email
  photobill = this.payload.photo
  getPublications(){
    this.publicationService.getAll().subscribe(
      response =>{
        console.log(this.publication)
        this.publication =response

      }
    )

  }

  createPublication(){
    console.log(this.publications);
    try {
      this.publicationService.create(this.publications).subscribe(
        response =>{
          console.log(response)
          this.getPublications()
        }
        )
    } catch (error) {
      console.log(error)

    }

  }
  deletecookie(){
    this.cokkieService.delete('user')
    this.router.navigateByUrl("/login")
  }

}
