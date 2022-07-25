import { Component, Input, OnInit } from '@angular/core';
import { MapBrowserEvent } from 'ol';
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import MousePosition from 'ol/control/MousePosition';
import { defaults as defaultControls } from 'ol/control';
import { ICoordinateApiT } from 'src/app/shared/const/map.interfaces';
import { DatePipe } from '@angular/common';
import { CoordinateService } from '../Service/coordinate-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private coordinateService: CoordinateService, private datepipe: DatePipe) { }

  @Input() mousePositionControl!: MousePosition;
  map!: Map;

  ngOnInit(): void {
    this.initializeMap();
    this.map.on('click', (e)=>this.onClickMapSaveCoordinate(e) );
  }

  initializeMap() {
    this.map = new Map({
      controls: defaultControls().extend([this.mousePositionControl]),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'map',
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  }

  onClickMapSaveCoordinate(mapEvent:MapBrowserEvent<any>){
    let date = new Date();
    const clickTimeFormat = this.datepipe.transform(date, 'dd/MM/yyyy HH:mm:ss');

    // create coordinate object
    const coordinateApiObject:ICoordinateApiT = {
      id: date.getTime(),
      clickTime: clickTimeFormat || "",
      coordinates:{
        lon: mapEvent.coordinate[0],
        lat: mapEvent.coordinate[1]
      }    
    }
    
    // add cordinate to json server
    this.coordinateService.addCoordinate(coordinateApiObject).subscribe(data => {
      if(data.id) console.log("coordinate added successfully");
      else console.log("failed to add coordinate");
    });
  }



}
