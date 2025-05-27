import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonRouterOutlet, IonApp],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  constructor() {}
}
