import { Component, } from '@angular/core';
import { Input } from '@angular/core';
import { Album } from 'src/app/model/album';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {

  @Input() userId: number = 0

  albums: Album[] = []
  userAlbums: Album[] = []

  constructor(private servAlbum: AlbumsService) {
    servAlbum.getAlbums().subscribe(albums => {
      this.albums = albums
      this.userAlbums = albums.filter(album => this.userId == album.userId)
    })
  }
}
