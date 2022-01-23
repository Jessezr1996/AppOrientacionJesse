import { Component } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  constructor(public screenOrientation: ScreenOrientation)
  {
    // get current orientation
  this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);
  this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_SECONDARY);
  this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.ANY);



  this.screenOrientation.lock('portrait-primary');
  screenOrientation.lock('portrait-primary');
  screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);
    
  
  }

  // Lock to portrait
  lockToPortrait(){
    console.log('vertical');
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }
/*
  // Lock to landscape
  lockToLandscape(){
    console.log('Horizontal');
    this.screenOrientation.lock('landscape').then(
      success => console.log(success),
      failure => console.log(failure)
  );
  //  this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }*/

  // Unlock screen orientation 
  unlockScreenOrientation(){
    console.log('desbloquear');
    this.screenOrientation.unlock();
  }

}