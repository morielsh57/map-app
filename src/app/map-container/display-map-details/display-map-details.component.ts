import { Component, Input, OnInit } from '@angular/core';
import { MousePosition } from 'ol/control';
import { createStringXY } from 'ol/coordinate';

@Component({
  selector: 'app-display-map-details',
  templateUrl: './display-map-details.component.html',
  styleUrls: ['./display-map-details.component.scss']
})
export class DisplayMapDetailsComponent implements OnInit {
  @Input() mousePositionControl!: MousePosition;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeProjection(event: Event) {
    this.mousePositionControl.setProjection((event.target as HTMLInputElement).value);
  }

  onChangePrecision(event: Event) {
    console.log((event.target as HTMLInputElement).value);
    const format = createStringXY((event.target as HTMLInputElement).valueAsNumber);
    this.mousePositionControl.setCoordinateFormat(format);
  }

}
