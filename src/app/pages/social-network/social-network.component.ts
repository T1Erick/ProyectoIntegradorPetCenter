import { Component, OnInit } from '@angular/core';
import { CreatePublicationModelDto, PublicationModel } from 'src/app/entities/publication.model';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.css']
})
export class SocialNetworkComponent implements OnInit {
  constructor(private publicationService: PublicationService ){}
  ngOnInit(): void {
    this.getPublications()

  }
  publication: PublicationModel[]=[]
  publications: CreatePublicationModelDto={
    title: '',
    description: '',
    images: ''
  }
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

}
