import { Component } from '@angular/core';
import { ConnexionFormComponent } from '../../features/forms/connexion-form/connexion-form.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-connexion',
  imports: [ConnexionFormComponent, IonicModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css',
})
export class ConnexionComponent {}
