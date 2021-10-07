import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cargallery',
  templateUrl: './cargallery.component.html',
  styleUrls: ['./cargallery.component.css']
})
export class CargalleryComponent implements OnInit {

  smallcar: any[] = [
    {
      "id": 1,
      "name": "sm1.jfif"
    },
    {
     " id": 2,
      "name": "sm2.jfif"
    },
    {
      "id": 3,
      "name": "sm3.jfif"
    },
    {
      "id": 4,
      "name": "sm4.jfif"
    },
    {
      "id": 5,
      "name": "sm5.jfif"
    },
    {
      "id": 6,
      "name": "sm6.jfif"
    },
    {
     " id": 7,
      "name": "sm7.jfif"
    },
    {
      "id": 8,
      "name": "sm8.jfif"
    },
    {
      "id": 9,
      "name": "sm9.jfif"
    },
    {
      "id": 10,
      "name": "sm10.jfif"
    },
    {
      "id": 11,
      "name": "sm11.jfif"
    },
    {
      "id": 12,
      "name": "sm12.jfif"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}


