import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Album } from '../../interfaces/album.interface';

@Injectable({
  providedIn: 'root',
})
export class Albums {
  private storageKey = 'albums';
  private albums: Album[] = [];
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      this.loadFromStorage();
    }
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
    album.id = this.albums.length > 0 ? Math.max(...this.albums.map((a) => a.id)) + 1 : 1;

    album.dateAdded = new Date();

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
    if (!this.isBrowser) return;

    localStorage.setItem(this.storageKey, JSON.stringify(this.albums));
  }

  private loadFromStorage(): void {
    if (!this.isBrowser) return;

    const data = localStorage.getItem(this.storageKey);
    this.albums = data ? JSON.parse(data) : [];
  }
}
