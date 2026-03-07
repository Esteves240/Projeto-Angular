import { Component, OnInit } from '@angular/core';
import { Menu } from '../../components/menu/menu';
import { Albums } from '../../core/services/album';
import { Album } from '../../interfaces/album.interface';

@Component({
  selector: 'app-home',
  imports: [Menu],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  albums: Album[] = [];

  totalAlbums = 0;
  avgRating = 0;
  mostGenre = '';
  listenedPercent = 0;

  constructor(private albumsService: Albums) {}

  ngOnInit() {
    this.loadKpis();
  }

  loadKpis() {
    this.albums = this.albumsService.getAll();

    // KPI 1 - total
    this.totalAlbums = this.albums.length;

    // KPI 2 - média das classificações
    const rated = this.albums.filter((a) => a.classification);
    const sum = rated.reduce((acc, a) => acc + (a.classification || 0), 0);

    this.avgRating = rated.length ? +(sum / rated.length).toFixed(1) : 0;

    // KPI 3 - género mais ouvido
    const genres: any = {};

    this.albums.forEach((a) => {
      genres[a.genre] = (genres[a.genre] || 0) + 1;
    });

    this.mostGenre = Object.keys(genres).reduce((a, b) => (genres[a] > genres[b] ? a : b), '');

    // KPI 4 - percentagem ouvidos
    const listened = this.albums.filter((a) => a.isListened).length;

    this.listenedPercent = this.totalAlbums ? Math.round((listened / this.totalAlbums) * 100) : 0;
  }
}
