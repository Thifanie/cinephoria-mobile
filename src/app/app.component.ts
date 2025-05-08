import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { NavComponent } from './features/menus/nav/nav.component';
import { FooterComponent } from './features/menus/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [NavComponent, FooterComponent, IonRouterOutlet, IonApp],
})
export class AppComponent {
  constructor() {}
}
