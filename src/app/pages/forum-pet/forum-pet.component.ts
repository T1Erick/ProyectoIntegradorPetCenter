import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-forum-pet',
  templateUrl: './forum-pet.component.html',
  styleUrls: ['./forum-pet.component.css']
})
export class ForumPetComponent  {
  constructor(private cookkieService: CookieService, private router: Router){}

  deletecookie(){
    this.cookkieService.delete('user')
    this.router.navigateByUrl("/login")
  }


}
