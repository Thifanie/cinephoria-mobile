import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'accueil',
        loadComponent: () =>
          import('../pages/accueil/accueil.component').then(
            (m) => m.AccueilComponent
          ),
      },
      {
        path: 'compte',
        loadComponent: () =>
          import('../pages/compte/compte.component').then(
            (m) => m.CompteComponent
          ),
      },
      {
        path: 'reservation',
        loadComponent: () =>
          import('../pages/reservation/reservation.component').then(
            (m) => m.ReservationComponent
          ),
      },
      {
        path: 'films',
        loadComponent: () =>
          import('../pages/films/films.component').then(
            (m) => m.FilmsComponent
          ),
      },
      {
        path: 'connexion',
        loadComponent: () =>
          import('../pages/connexion/connexion.component').then(
            (m) => m.ConnexionComponent
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/accueil',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
];
