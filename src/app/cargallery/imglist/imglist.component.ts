import { Component, OnInit, Output } from '@angular/core';
import { Images } from 'src/app/Models/image';
import { ImageServiceService } from 'src/app/Services/image-service.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-imglist',
  templateUrl: './imglist.component.html',
  styles: [
  ]
})
export class ImglistComponent implements OnInit {
  Imgs: Images[];
  // SelectedImage: Images;
  @Output() SendImage:EventEmitter<Images>=new EventEmitter<Images>();
  constructor(private imageService: ImageServiceService) {
  }

  ngOnInit(): void {
     this.imageService.getImgAry().subscribe(
       (response:any)=> this.Imgs=response);
       console.log(this.Imgs);
  }
  setSelectedImage(image) {
    // this.SelectedImage = image;  
    // return this.SelectedImage;
    this.SendImage.emit(image);
  }



}
