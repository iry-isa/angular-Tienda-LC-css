import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MariaComponent } from './maria.component';
import { EditventanaComponent } from './edit-producto/edit-ventana.component';
import { EditPuertaComponent } from './edit-producto/edit-puerta.component';
import { EditProductoComponent } from './edit-producto/edit-producto.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { CrearPuertaComponent } from './crear-producto/crear-puerta.component';
import { CrearVentanaComponent } from './crear-producto/crear-ventana.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MARIA_ROUTES } from './maria.routes';
import { DashboardMariaComponent } from './dashboard-maria/dashboard-maria.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasComponent } from './graficas/graficas.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { UploadComponent } from '../upload/upload.component';




@NgModule({
  declarations: [

    EditProductoComponent,
    CrearPuertaComponent,
    CrearVentanaComponent,
    CrearProductoComponent,
    EditProductoComponent,
    EditPuertaComponent,
    EditventanaComponent,
    MariaComponent,
    EditventanaComponent,
    UsuariosComponent,
    DashboardMariaComponent,
    ProgressComponent,
    GraficasComponent,
    PromesasComponent,
    RxjsComponent,
    AccoutSettingsComponent,
    Graficas1Component, 
    UploadComponent,

  ],
  imports: [
    BrowserModule,
    MARIA_ROUTES,
    // CommonModule,

    // SharedModule,

    // FormsModule,
    // ChartsModule,

    // PipesModule

  ],
  providers: [],
  bootstrap: [MariaComponent]
})
export class MariaModule { }
