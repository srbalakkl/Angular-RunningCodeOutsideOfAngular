import {Component, NgZone} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RunningCodeOutsideOfAngular';

  constructor(private ngZone: NgZone) {
  }

  /**
   * Zone.js is a signaling mechanism that Angular uses to detect
   * when an application state might have changed.
   *
   * It captures asynchronous operations like setTimeout, network requests, and event listeners.
   * Angular schedules change detection based on signals from Zone.js.
   *
   * */

  ngOnInit() {
    /**    This method is used to remove the zone pollution in angular

     note 1: The preceding snippet instructs Angular to call setInterval
     outside the Angular Zone and skip running change detection

     note 2: Third-party libraries commonly trigger unnecessary change
     detection cycles because they weren't authored with Zone.js in mind.
     Avoid these extra cycles by calling library APIs outside the Angular zone:

     */

    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        // update component data
        // but don't trigger change detection.

        console.log("I'm Running this from Outside of angular.")
      });
    });
  }
}
