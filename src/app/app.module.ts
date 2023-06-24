import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//servicio menu
import { CargarScriptsService } from './cargar-scripts.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PagesComponent } from './pages/pages.component';
import { NofoundPagesComponent } from './noFound/nofound-pages.component';
import { SharedModule } from './shared/shared.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: NofoundPagesComponent },
];

@NgModule({
  declarations: [AppComponent, PagesComponent, NofoundPagesComponent],
  providers: [CargarScriptsService],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PagesRoutingModule,
    AuthModule,
    PagesModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppModule {}
