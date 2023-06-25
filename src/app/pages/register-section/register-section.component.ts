import { Component, OnInit } from '@angular/core';

import { CreateSectionModelDto, SectionModel, UpdateSectionDto } from 'src/app/entities/section.model';
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
  updating: boolean = false;
  seccion: SectionModel[]=[]
  selectedSection: UpdateSectionDto ={
    id: '',
    namesection: '',
  }

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
          this.getSeccion()
          console.log(response)
        }
      )
    }catch(error){
      console.log(error)

    }
  }

  editSection(section: SectionModel){
    this.selectedSection= section
    this.updating= true
  }
  updateSection(id:SectionModel['id'],section:UpdateSectionDto){
    this.sectionService.update(id,section).subscribe(
      response =>{
        console.log(response)
      }
    )
  }

  deleteSection(id:SectionModel['id']){
    this.sectionService.destroy(id).subscribe(
      response => {
        this.seccion= this.seccion.filter(seccion => seccion.id != id);
        console.log(response)
      }
    )
  }


}
