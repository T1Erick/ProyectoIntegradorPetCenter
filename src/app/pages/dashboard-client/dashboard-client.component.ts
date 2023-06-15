import { Component } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';



@Component({
  selector: 'app-dashboard-client',
  templateUrl: './dashboard-client.component.html',
  styleUrls: ['./dashboard-client.component.css']
})
export class DashboardClientComponent
{
constructor( private _CargaScripts:CargarScriptsService)
{
  _CargaScripts.Carga(["menu/script"])
}

}
