import { Component, Input,  } from '@angular/core';
import { Album } from 'src/app/model/album';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent {
  constructor(private servAlbum:AlbumsService) {}

  @Input() album:Album = {id:1,userId:1,title:''}

  DeleteAlbum(id:number){
    return this.servAlbum.delAlbum(id).subscribe(album => album)
  }
}
