import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Subscription } from 'rxjs';
import { Film } from '../../features/films/models/film';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [NgFor, RouterLink, IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent implements OnInit {
  constructor(private readonly dataService: DataService) {}

  listFilms: Film[] = [];
  subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscription = this.dataService
      .getFilms()
      .subscribe((films: Film[]) => {
        this.listFilms = films;
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
