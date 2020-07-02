import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { BlogComponent } from './pages/blog/blog.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { SeccionsComponent } from './pages/seccions/seccions.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';
import { AnunciosComponent } from './pages/anuncios/anuncios.component';
import { DetalleArticuloComponent } from './pages/detalle-articulo/detalle-articulo.component';
import { DetallleAnuncioComponent } from './pages/detallle-anuncio/detallle-anuncio.component';
import { UploadComponent } from './pages/upload/upload.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AnuntImobiliarComponent } from './pages/anunt-imobiliar/anunt-imobiliar.component';
import { AnuntInformaticaComponent } from './pages/anunt-informatica/anunt-informatica.component';
import { AnuntElectrodomesticeComponent } from './pages/anunt-electrodomestice/anunt-electrodomestice.component';
import { AnuntBricolajComponent } from './pages/anunt-bricolaj/anunt-bricolaj.component';
import { AnuntPescuitComponent } from './pages/anunt-pescuit/anunt-pescuit.component';
import { AnuntGradinaComponent } from './pages/anunt-gradina/anunt-gradina.component';
import { AnuntMobilaComponent } from './pages/anunt-mobila/anunt-mobila.component';
import { AnuntAutoComponent } from './pages/anunt-auto/anunt-auto.component';
import { UsaInteriorComponent } from './pages/usa-interior/usa-interior.component';
import { UsaExteriorComponent } from './pages/usa-exterior/usa-exterior.component';
import { GeamPVCComponent } from './pages/geam-pvc/geam-pvc.component';
import { UsaPVCComponent } from './pages/usa-pvc/usa-pvc.component';
import { SobaTeracotaComponent } from './pages/soba-teracota/soba-teracota.component';
import { DetalleUsaInteriorComponent } from './pages/detalle-usa-interior/detalle-usa-interior.component';
import { DetalleUsaExteriorComponent } from './pages/detalle-usa-exterior/detalle-usa-exterior.component';
import { DetalleGeamPVCComponent } from './pages/detalle-geam-pvc/detalle-geam-pvc.component';
import { GeamuriPVCComponent } from './pages/geamuri-pvc/geamuri-pvc.component';
import { AcesoriiUsiComponent } from './pages/acesorii-usi/acesorii-usi.component';
import { UsiInteriorComponent } from './pages/usi-interior/usi-interior.component';
import { UsiExteriorComponent } from './pages/usi-exterior/usi-exterior.component';
import { UsiPVCComponent } from './pages/usi-pvc/usi-pvc.component';
import { SiteInsecteComponent } from './pages/site-insecte/site-insecte.component';
import { SobeTeracotaComponent } from './pages/sobe-teracota/sobe-teracota.component';
import { DettalleUsaPVCComponent } from './pages/dettalle-usa-pvc/dettalle-usa-pvc.component';
import { DettalleSobaComponent } from './pages/dettalle-soba/dettalle-soba.component';
import { DetallesitaInsecteComponent } from './pages/detallesita-insecte/detallesita-insecte.component';
import { DetalleAcesoriiComponent } from './pages/detalle-acesorii/detalle-acesorii.component';
import { AcesoriiComponent } from './pages/acesorii/acesorii.component';
import { EditProductoComponent } from './pages/maria/edit-producto/edit-producto.component';
import { CreateProductoComponent } from './pages/maria/create-producto/create-producto.component';
import { CrearVentanaComponent } from './pages/maria/create-producto/crear-ventana.component';
import { CrearProdusComponent } from './pages/maria/crear-produs/crear-produs.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    AboutComponent,
    ContactoComponent,
    BlogComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CategoriasComponent,
    ProductoComponent,
    SeccionsComponent,
    DetalleProductoComponent,
    ArticuloComponent,
    ImagenesComponent,
    AnunciosComponent,
    DetalleArticuloComponent,
    DetallleAnuncioComponent,
    UploadComponent,
    BusquedaComponent,
    LoginComponent,
    RegisterComponent,
    AnuntImobiliarComponent,
    AnuntInformaticaComponent,
    AnuntElectrodomesticeComponent,
    AnuntBricolajComponent,
    AnuntPescuitComponent,
    AnuntGradinaComponent,
    AnuntMobilaComponent,
    AnuntAutoComponent,
    UsiInteriorComponent,
    UsiExteriorComponent,
    GeamuriPVCComponent,
    UsiPVCComponent,
    SiteInsecteComponent,
    AcesoriiUsiComponent,
    SobeTeracotaComponent,
    UsaInteriorComponent,
    UsaExteriorComponent,
    GeamPVCComponent,
    UsaPVCComponent,
    SobaTeracotaComponent,
    DetalleUsaInteriorComponent,
    DetalleUsaExteriorComponent,
    DetalleGeamPVCComponent,
    DettalleUsaPVCComponent,
    DettalleSobaComponent,
    DetallesitaInsecteComponent,
    DetalleAcesoriiComponent,
    AcesoriiComponent,
    EditProductoComponent,
    CreateProductoComponent,
    CrearVentanaComponent,
    CrearProdusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
