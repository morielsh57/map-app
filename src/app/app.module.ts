import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map-container/map/map.component';
import { MapContainerComponent } from './map-container/map-container.component';
import { DisplayMapDetailsComponent } from './map-container/display-map-details/display-map-details.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { CoordinateService } from './map-container/Service/coordinate-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MapContainerComponent,
    MapComponent,
    DisplayMapDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CoordinateService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
