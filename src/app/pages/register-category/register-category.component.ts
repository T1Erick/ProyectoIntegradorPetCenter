import { Component, OnInit } from '@angular/core';
import { CategoryModel, CreateCategoryModelDto } from 'src/app/entities/category.model';
import { CategorService } from 'src/app/services/category.service.service';

@Component({
  selector: 'app-register-category',
  templateUrl: './register-category.component.html',
  styleUrls: ['./register-category.component.css']
})
export class RegisterCategoryComponent implements OnInit{
  constructor(private registerCategory: CategorService){}
  ngOnInit():void{
    this.getCategories()

  }
  category: CategoryModel[]=[]
  categories : CreateCategoryModelDto={
    sectionId: 0,
    namecategory: '',
    description: ''
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

        }
      )
    }catch(error){
      console.log(error)

    }

  }


}
