import { Component, Input, OnInit } from '@angular/core';
import { Images } from 'src/app/Models/image';


@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {
@Input() img: Images;

  constructor() { }

  ngOnInit(): void {
  }
 

}
