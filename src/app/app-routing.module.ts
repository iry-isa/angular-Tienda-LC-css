import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AnunciosComponent } from './pages/anuncios/anuncios.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AnuntImobiliarComponent } from './pages/anunt-imobiliar/anunt-imobiliar.component';
import { AnuntAutoComponent } from './pages/anunt-auto/anunt-auto.component';
import { AnuntElectrodomesticeComponent } from './pages/anunt-electrodomestice/anunt-electrodomestice.component';
import { AnuntInformaticaComponent } from './pages/anunt-informatica/anunt-informatica.component';
import { AnuntBricolajComponent } from './pages/anunt-bricolaj/anunt-bricolaj.component';
import { AnuntMobilaComponent } from './pages/anunt-mobila/anunt-mobila.component';
import { AnuntGradinaComponent } from './pages/anunt-gradina/anunt-gradina.component';
import { AnuntPescuitComponent } from './pages/anunt-pescuit/anunt-pescuit.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { DetalleUsaInteriorComponent } from './pages/detalle-usa-interior/detalle-usa-interior.component';
import { UsaInteriorComponent } from './pages/usa-interior/usa-interior.component';
import { UsaExteriorComponent } from './pages/usa-exterior/usa-exterior.component';
import { DetalleUsaExteriorComponent } from './pages/detalle-usa-exterior/detalle-usa-exterior.component';
import { GeamPVCComponent } from './pages/geam-pvc/geam-pvc.component';
import { DetalleGeamPVCComponent } from './pages/detalle-geam-pvc/detalle-geam-pvc.component';
import { GeamuriPVCComponent } from './pages/geamuri-pvc/geamuri-pvc.component';
import { AcesoriiUsiComponent } from './pages/acesorii-usi/acesorii-usi.component';
import { UsiInteriorComponent } from './pages/usi-interior/usi-interior.component';
import { UsiPVCComponent } from './pages/usi-pvc/usi-pvc.component';
import { SobeTeracotaComponent } from './pages/sobe-teracota/sobe-teracota.component';
import { SiteInsecteComponent } from './pages/site-insecte/site-insecte.component';
import { UsaPVCComponent } from './pages/usa-pvc/usa-pvc.component';
import { DettalleUsaPVCComponent } from './pages/dettalle-usa-pvc/dettalle-usa-pvc.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { UsiExteriorComponent } from './pages/usi-exterior/usi-exterior.component';
import { SobaTeracotaComponent } from './pages/soba-teracota/soba-teracota.component';
import { DettalleSobaComponent } from './pages/dettalle-soba/dettalle-soba.component';
import { DetalleAcesoriiComponent } from './pages/detalle-acesorii/detalle-acesorii.component';
import { DetallesitaInsecteComponent } from './pages/detallesita-insecte/detallesita-insecte.component';
import { EditProductoComponent } from './pages/maria/edit-producto/edit-producto.component';
import { CreateProductoComponent } from './pages/maria/create-producto/create-producto.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'buscar/:termino', component: BusquedaComponent },
  { path: 'usaInterior/:id', component: UsaInteriorComponent },
  { path: 'usaExterior/:id', component: UsaInteriorComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'createproducto', component: CreateProductoComponent },
  { path: 'editproducto', component: EditProductoComponent },
  { path: 'usiInterior', component: UsiInteriorComponent },
  { path: 'usaInterior', component: UsaInteriorComponent },
  { path: 'detalleUsaInterior', component: DetalleUsaInteriorComponent },
  { path: 'usiExterior', component: UsiExteriorComponent },
  { path: 'usaExterior', component: UsaExteriorComponent },
  { path: 'detalleUsaExterior', component: DetalleUsaExteriorComponent },
  { path: 'geamuriPVC', component: GeamuriPVCComponent },
  { path: 'geamPVC', component: GeamPVCComponent },
  { path: 'detalleGeamPVC', component: DetalleGeamPVCComponent },
  { path: 'usiPVC', component: UsiPVCComponent },
  { path: 'usaPVC', component: UsaPVCComponent },
  { path: 'detalleUsaPVC', component: DettalleUsaPVCComponent },
  { path: 'sobeTeracota', component: SobeTeracotaComponent },
  { path: 'detalleSoba', component: DettalleSobaComponent },
  { path: 'sobaTeracota', component: SobaTeracotaComponent },
  { path: 'siteInsecte', component: SiteInsecteComponent },
  { path: 'detalleSiteInsecte', component: DetallesitaInsecteComponent },
  { path: 'acesoriiUsi', component: AcesoriiUsiComponent },
  { path: 'detalleAcesorii', component: DetalleAcesoriiComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'articulo', component: ArticuloComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'anuncios', component: AnunciosComponent },
  { path: 'anunt-imobiliar', component: AnuntImobiliarComponent },
  { path: 'anunt-auto', component: AnuntAutoComponent },
  { path: 'electrodomestice', component: AnuntElectrodomesticeComponent },
  { path: 'anunt-informatica', component: AnuntInformaticaComponent },
  { path: 'anunt-bricolaj', component: AnuntBricolajComponent },
  { path: 'mobila', component: AnuntMobilaComponent },
  { path: 'anunt-gradina', component: AnuntGradinaComponent },
  { path: 'anunt-pescuit', component: AnuntPescuitComponent },
  { path: 'moto', component: AnuntAutoComponent },
  { path: 'anunt-utilaje', component: AnuntInformaticaComponent },
  { path: 'anunt-bricolaj', component: AnuntBricolajComponent },
  { path: 'electronica', component: AnuntElectrodomesticeComponent },
  { path: 'anunt-ropa', component: AnuntInformaticaComponent },
  { path: 'anunt-bicicletas', component: AnuntBricolajComponent },
  { path: 'footer', component: FooterComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
