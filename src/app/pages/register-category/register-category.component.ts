import { Component, OnInit } from '@angular/core';
import { CategoryModel, CreateCategoryModelDto, UpdateCategoryModelDto } from 'src/app/entities/category.model';
import { SectionModel } from 'src/app/entities/section.model';
import { CategorService } from 'src/app/services/category.service.service';
import { SectionService } from 'src/app/services/section.service.service';

@Component({
  selector: 'app-register-category',
  templateUrl: './register-category.component.html',
  styleUrls: ['./register-category.component.css']
})
export class RegisterCategoryComponent implements OnInit{
  constructor(private registerCategory: CategorService,private sectionservice :SectionService){}
  ngOnInit():void{
    this.getCategories();
    this.getSection();

  }
  selectedCategory: UpdateCategoryModelDto={
    id: '',
    namecategory:'',
    description:'',
    sectionId: '',


  }
  updating: boolean = false;
  section:SectionModel[]=[]
  category: CategoryModel[]=[]
  categories : CreateCategoryModelDto={
    sectionId: '',
    namecategory: '',
    description: ''
  }
  getSection(){
    this.sectionservice.getAll().subscribe(
      response=>{
        this.section = response
      }
    )
  }

  getCategories(){
    this.registerCategory.getAll().subscribe(

      response =>{
        console.log(this.category)
        this.category = response;

      }
    )

  }

  createCategory(){
    console.log(this.categories);
    try{
      this.registerCategory.build(this.categories).subscribe(
        response =>{
          console.log(response);
          this.getCategories()

        }
      )
    }catch(error){
      console.log(error)

    }

  }
  editCategory(category:CategoryModel){
    this.selectedCategory = category;
    this.updating= true


  }
  updateCategory(id:CategoryModel['id'],category:UpdateCategoryModelDto){
    this.registerCategory.update(id,category).subscribe(
      response =>{
        console.log(response)
      }
    )
  }

  deleteCategory(id:CategoryModel['id']){
    this.registerCategory.destroy(id).subscribe(
      response=>{
        this.category = this.category.filter(category => category.id != id);
        console.log(response)
      }
    )

  }


}
