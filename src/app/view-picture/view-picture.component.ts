import { Component, OnInit, Input } from '@angular/core';
import { Pictures } from '../Pictures';
import { ActivatedRoute } from '@angular/router';
import { FlikrService } from '../shared/flikr.service';

@Component({
  selector: 'app-view-picture',
  templateUrl: './view-picture.component.html',
  styleUrls: ['./view-picture.component.css']
})
export class ViewPictureComponent implements OnInit {

  @Input() picture: Pictures;
  photo: Pictures;
  index: number;

  constructor(private route: ActivatedRoute, private flickerService: FlikrService) {
    this.route.params.subscribe(params => {
      this.index = params.id;
    });
  }

  ngOnInit() {}

  goBack() {
    history.back();
  }

}
