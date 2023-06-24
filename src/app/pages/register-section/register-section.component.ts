import { Component, OnInit } from '@angular/core';
import { CreateSectionModelDto, SectionModel } from 'src/app/entities/section.model';
import { SectionService } from 'src/app/services/section.service.service';

@Component({
  selector: 'app-register-section',
  templateUrl: './register-section.component.html',
  styleUrls: ['./register-section.component.css']
})
export class RegisterSectionComponent implements OnInit {

  constructor(private sectionService: SectionService){}

  ngOnInit(){
    this.getSeccion()

  }
  seccion: SectionModel[]=[]

  secciones: CreateSectionModelDto ={
    namesection: ''
  }

  getSeccion(){
    this.sectionService.getAll().subscribe(
      response =>{
        console.log(this.seccion);
        this.seccion =response

      }
    )
  }

  createSeccion(){
    try{
      this.sectionService.build(this.secciones).subscribe(
        response =>{
          console.log(response)
        }
      )
    }catch(error){
      console.log(error)

    }
  }

}
