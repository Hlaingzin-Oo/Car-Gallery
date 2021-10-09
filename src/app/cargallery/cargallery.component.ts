import { Component, OnInit } from '@angular/core';
import { Images } from '../Models/image';

@Component({
  selector: 'app-cargallery',
  templateUrl: './cargallery.component.html',
  styleUrls: ['./cargallery.component.css']
})
export class CargalleryComponent implements OnInit {
  SelectImage: Images;
  constructor() { }

  ngOnInit(): void {
  }
  setImage(image) {
    this.SelectImage = image;
  }
}


