import { Component, OnInit } from '@angular/core';
import { RunEnumService } from 'src/app/enum/run-enum.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  listAlbums: any[] = [];
  listImg: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.getImg();
    this.getAlbums();
  }


  async getAlbums() {
    let data;
    fetch(RunEnumService.get_albums)
      .then(async response => {
        data = await response.json();
        this.listAlbums = data;
        console.log(this.listAlbums)
      })
      .then(json => console.log(json));
  }
  async getImg() {
    let data;
    fetch(RunEnumService.get_photos)
      .then(async response => {
        data = await response.json();
        this.listImg = data;
        console.log(this.listImg)
      })
      .then(json => console.log(json));
  }

  imgAlb(item:any){
    return this.listImg.filter(data=> item.toString()===data.albumId.toString())[0];
  }
}
