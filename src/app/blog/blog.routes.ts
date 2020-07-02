import { RouterModule, Routes } from '@angular/router';

// import { ProgressComponent } from './progress/progress.component';

// import { Graficas1Component } from './graficas1/graficas1.component';

// import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
// import { PromesasComponent } from './promesas/promesas.component';
// import { RxjsComponent } from './rxjs/rxjs.component';
import { BlogComponent } from './blog.component';

import { ProfileComponent } from '../shared/profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// Guards
// import { GuardGuard } from '../services/service.index';
// import { AdminGuard } from '../services/service.index';

import { BusquedaComponent } from '../shared/busqueda/busqueda.component';
import { CrearArticuloComponent } from './crear-articulo/crear-articulo.component';
import { EditArticuloComponent } from './edit-articulo/edit-articulo.component';
// import { VerificaTokenGuard } from '../services/guards/verifica-token.guard';

import { ArticulosComponent } from './articulos/articulos.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { DetalleArticuloComponent } from './detalle-articulo/detalle-articulo.component';
//import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
//import { RxjsComponent } from './rxjs/rxjs.component';
//import { PromesasComponent } from './promesas/promesas.component';
//import { ProgressComponent } from './progress/progress.component';
//import { Graficas1Component } from './graficas1/graficas1.component';



const blogRoutes: Routes = [
    { path: 'blog', component: BlogComponent, data: { titulo: 'Blog' }},
    {path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' }
        // canActivate: [ VerificaTokenGuard ],
    },

    { path: 'creararticulo', component: CrearArticuloComponent, data: { titulo: 'CrearArticulo' }  
    // canActivate: [ VerificaTokenGuard ],
 },
    { path: 'editarticulo', component: EditArticuloComponent, data: { titulo: 'EditArticulo' }  
    // canActivate: [ VerificaTokenGuard ],
 },
    //{ path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBars' } },
    //{ path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' } },
    //{ path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
    //{ path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
    //{ path: 'account-settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes de Tema' } },
    { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de usuario' } },
    { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Buscador' } },
    // Mantenimientos
    { path: 'articulo', component: ArticuloComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];


export const BLOG_ROUTES = RouterModule.forChild( blogRoutes );
