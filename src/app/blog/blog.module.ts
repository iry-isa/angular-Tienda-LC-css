import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BlogComponent } from './blog.component';import { ArticulosComponent } from './articulos/articulos.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { DetalleArticuloComponent } from './detalle-articulo/detalle-articulo.component';
import { EditArticuloComponent } from './edit-articulo/edit-articulo.component';
import { BusquedaComponent } from '../shared/busqueda/busqueda.component';
import { CrearArticuloComponent } from './crear-articulo/crear-articulo.component';
import { BLOG_ROUTES } from './blog.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SeccionsComponent } from '../seccions/seccions.component';
import { UploadComponent } from '../upload/upload.component';


//import { ProgressComponent } from './progress/progress.component';
//import { GraficasComponent } from './graficas/graficas.component';
//import { PromesasComponent } from './promesas/promesas.component';
//import { RxjsComponent } from './rxjs/rxjs.component';
//import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
//import { Graficas1Component } from './graficas1/graficas1.component';




@NgModule({
  declarations: [

    EditArticuloComponent,
    CrearArticuloComponent,
    
    DashboardComponent,
    SeccionsComponent,
    ArticuloComponent,
    DetalleArticuloComponent,
    UploadComponent,
    //ProgressComponent,
    //GraficasComponent,
    //PromesasComponent,
    //RxjsComponent,
    //AccoutSettingsComponent,
    //Graficas1Component

  ],
  imports: [
    BrowserModule,
    BLOG_ROUTES,
    // CommonModule,

    // SharedModule,

    // FormsModule,
    // ChartsModule,

    // PipesModule

  ],
  providers: [],
  bootstrap: [BlogComponent]
})
export class BlogModule { }
