import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { CompteComponent } from './pages/compte/compte.component';
import { FilmsComponent } from './pages/films/films.component';
import { ListSessionsComponent } from './features/films/components/list-sessions/list-sessions.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { FilmBookingComponent } from './features/films/components/film-booking/film-booking.component';
import { AuthGuard } from './guards/auth.guard';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { AdministrationComponent } from './pages/administration/administration.component';
import { AdminGuard } from './guards/admin.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  { path: 'accueil', component: AccueilComponent },
  { path: 'compte', component: CompteComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent },
  { path: 'films', component: FilmsComponent },
  {
    path: 'sessions/:id',
    component: ListSessionsComponent,
    data: { ssr: false },
  },
  { path: 'reservation', component: ReservationComponent },
  {
    path: 'reservation/:id',
    component: FilmBookingComponent,
    canActivate: [AuthGuard],
  },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: ConnexionComponent },
  {
    path: 'admin',
    component: AdministrationComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
];
