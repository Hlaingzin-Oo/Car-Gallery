import { Component, Input, OnInit } from '@angular/core';
import { Images } from 'src/app/Models/image';

@Component({
  selector: 'app-img-detail',
  templateUrl: './img-detail.component.html',
  styleUrls: ['./img-detail.component.css']
})
export class ImgDetailComponent implements OnInit {

  @Input() selectImg:Images;
 
  constructor() { }

  ngOnInit(): void {  }
  }

