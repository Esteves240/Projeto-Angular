import { Injectable } from '@angular/core';
import { Album } from '../../interfaces/album.interface';

@Injectable({
  providedIn: 'root',
})
export class Albums {
  private storageKey = 'albums';
  private albums: Album[] = [];

  album: Album = {
    id: 1,
    title: 'The Black Parade',
    band: 'My CHemical Romance',
    genre: 'rock',
    year: 2006,
    state: 'listened',
    classification: 5,
    dateAdded: new Date(),
  };

  constructor() {
    this.loadFromStorage();
  }

  // READ ALL
  getAll(): Album[] {
    return this.albums;
  }

  // READ ONE
  getById(id: number): Album | undefined {
    return this.albums.find((album) => album.id === id);
  }

  // CREATE
  add(album: Album): void {
    this.albums.push(album);
    this.saveToStorage();
  }

  // UPDATE
  update(updatedAlbum: Album): void {
    const index = this.albums.findIndex((a) => a.id === updatedAlbum.id);
    if (index !== -1) {
      this.albums[index] = updatedAlbum;
      this.saveToStorage();
    }
  }

  // DELETE
  delete(id: number): void {
    this.albums = this.albums.filter((a) => a.id !== id);
    this.saveToStorage();
  }

  //-----------------------------------------------------------
  // LOCAL STORAGE
  private saveToStorage(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.albums));
  }

  private loadFromStorage(): void {
    const data = localStorage.getItem(this.storageKey);
    this.albums = data ? JSON.parse(data) : [];
  }
}
