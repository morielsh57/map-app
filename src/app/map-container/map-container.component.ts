import { Component, OnInit } from '@angular/core';
import { MousePosition } from 'ol/control';
import { createStringXY } from 'ol/coordinate';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss']
})
export class MapContainerComponent implements OnInit {
  mousePositionControl!: MousePosition;

  constructor() { }

  ngOnInit(): void {
    this.configMosePositionControl();
  }
  
  configMosePositionControl(){
    this.mousePositionControl = new MousePosition({
      coordinateFormat: createStringXY(4),
      projection: 'EPSG:4326',
      className: 'custom-mouse-position',
      target: document.getElementById('mouse-position')!,
    });
  }


}
