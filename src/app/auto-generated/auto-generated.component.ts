import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import { Image, Label, Color, TouchGestureEventData, GestureEventData } from "tns-core-modules/";

import { registerElement } from 'nativescript-angular/element-registry';
import { CanvasView, Canvas, Paint, Path } from 'nativescript-canvas';
import { LinkItem } from '@src/link';
import { Rect } from '@src/geometry';
registerElement('CanvasView', () => CanvasView);

// coords
const points : LinkItem[] = [
  {
    id: 'parkingB',
    rect: Rect.fromPoint(193.53515625, 103.5546875, 100)
  },
  {
    id: 'parkingC',
    rect: Rect.fromPoint(88.06640625, 99.0380859375, 100)
  },
  {
    id: 'parkingD',
    rect: Rect.fromPoint(114.08203125, 171.484375, 100)
  },
  {
    id: 'parkingE',
    rect: Rect.fromPoint(220.78125, 183.5888671875, 100)
  },
  {
    id: 'parkingF',
    rect: Rect.fromPoint(220.78125, 183.5888671875, 40)
  }  
];

@Component({
  selector: 'app-auto-generated',
  templateUrl: './auto-generated.component.html',
  styleUrls: ['./auto-generated.component.css']
})

// issues: 
// -campus map / marker doesn't render (using sample images for now)
// -touch should display dropdown programmatically 
// -draw path based on marker       
export class AutoGeneratedComponent implements OnInit {

  public markerImage;
  public destImage;
  
  canvas: Canvas;
  paint: Paint;

  constructor() {}
 
  ngOnInit() {}

  // drop down
  @ViewChild('dd', { static: true }) dropdown: ElementRef;
  buildings: Array<string> = ['Building C', 'Building D', 'Building E', 'Building F'];

  // on coordinates open menu 
  onTouch(args: GestureEventData) {
    let x = args.android.getX();
    let y = args.android.getY();

    // let x = args.getX();
    // let y = args.getY();

    // draw marker based on touch coordinates
    const point = {x, y};
    let matchedLink : LinkItem;

    for( let i = 0; i < points.length; i++){
      const li = points[i];

      this.markerImage = "https://cdn4.iconfinder.com/data/icons/iconsimple-places/512/pin_1-128.png";

      // check if point is within rectangle save in linkitem
      if(Rect.isPointInsideRect(point, li.rect)){
          matchedLink = li;
          break;
      }
    }

    console.log("Touch point: [" + x + ", " +y + "]");

    this.dropdown.nativeElement.open();
  }

  public onchange(args: SelectedIndexChangedEventData) {
    console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);

    let btnId: number = args.newIndex;

    // draw path here
    switch (btnId) {
      case 0: {
        break;
      }
      case 1: {
        break;
      }
      case 2: {
        break;
      }
      case 3: {
        break;
      }
      default: {
        break;
      }
    }
  }

  // public draw(canvas: Canvas) {
  //   const paint = new Paint();
  //   paint.setColor(new Color('black'));  
  //   paint.strokeWidth = 10;
  //   canvas.drawPath();
  //   console.log('drawn');
  // }

}
