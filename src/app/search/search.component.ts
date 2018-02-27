import { Component, OnInit } from '@angular/core';
import { FlikrService } from '../shared/flikr.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  tag: string;
  pictures: Array<any> = [];
  perPage = 20;
  textValue: string;

  getSearchCriteria(value: string) {
    this.tag = value;
    if (value) {
      this._doGetPictures(this.tag, this.perPage);
    } else {
      this.pictures = [];
    }
  }
  constructor(private flikrService: FlikrService) { }

  ngOnInit() {
    if (this.tag) {
      this._doGetPictures(this.tag, this.perPage);
    }
    window.addEventListener('scroll', this._scroll, true);

  }

  _doGetPictures(searchCriteria: string, listParam: number) {
    this.flikrService.search(searchCriteria, listParam).subscribe(res => {
      this.pictures = res.photos.photo;
    });
  }

  _addRecords() {
    this.perPage += 10;
    this._doGetPictures(this.tag, this.perPage);
  }

  _scroll = (event): void => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this._addRecords();
    }
  }

  goBack() {
    history.back();
  }
}
