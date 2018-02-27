import { Component, OnInit } from '@angular/core';
import { Pictures } from '../Pictures';
import { FlikrService } from '../shared/flikr.service';

@Component({
  selector: 'app-list-pictures',
  templateUrl: './list-pictures.component.html',
  styleUrls: ['./list-pictures.component.css']
})

export class ListPicturesComponent implements OnInit {
  filterargs: object;
  pictures: any;
  perPage = 20;

  constructor(private flikrService: FlikrService) { }

  ngOnInit() {
    this._doGetPictures(this.perPage);
    window.addEventListener('scroll', this._scroll, true);
  }

  _doGetPictures(param: number) {
    this.flikrService.getPicturesAll(param).subscribe(res => {
      this.pictures = res.photos.photo;
    });
  }

  _addRecords() {
    this.perPage += 10;
    this._doGetPictures(this.perPage);
  }

  _scroll = (): void => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this._addRecords();
    }
  }
}
