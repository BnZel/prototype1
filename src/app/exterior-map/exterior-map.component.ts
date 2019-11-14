// Render static map of the GBC Exterior View image
// Add location pin for starting location in Parking lot
// Create Hot Spots on the Buildings, that allow for hovering and selecting destination
// Use HTML5 Canvas to draw and overlay the direction path to destination Building


// NOTE: Use GPX file to store location data
//       leaflet-omnivore to parse map data (JSON)
//       Mapbox API integrates well with leaflet

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exterior-map',
  templateUrl: './exterior-map.component.html',
  styleUrls: ['./exterior-map.component.css']
})

export class ExteriorMapComponent implements OnInit {

  // Canvas for display map within 
  @ViewChild('mapCanvas', {static:true}) 
  mapCanvas: ElementRef;
  public context: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit() {
    
  }

  // Called after Angular has fully initialized a component's view
  // Define handle any additional initialization tasks
  ngAfterViewInit(): void{
    this.context == (<HTMLCanvasElement>this.mapCanvas.nativeElement).getContext('2d');
  }

}
