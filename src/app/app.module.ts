import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CargalleryComponent } from './cargallery/cargallery.component';
import { ImglistComponent } from './cargallery/imglist/imglist.component';
import { ImgComponent } from './cargallery/imglist/img.component';
import { ImageServiceService } from './Services/image-service.service';
import { ImgDetailComponent } from './cargallery/img-detail/img-detail.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CargalleryComponent,
    ImglistComponent,
    ImgComponent,
    ImgDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ImageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
