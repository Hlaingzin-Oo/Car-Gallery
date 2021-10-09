import { Injectable } from '@angular/core';
import { Images } from '../Models/image';
import { HttpClient, HttpResponse} from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {
  imgLink = "../assets/data.json";
  Imgs: Images[] = [];

  constructor(private http: HttpClient) {
    // for (let i = 1; i < 13; i++) {
    //   this.Imgs.push(new Images('' + i + '', 'title', 'description', '../../../assets/img/bg' + i + '.jfif', '../../../assets/img/sm' + i + '.jfif'));
    // }

  }
  getImgAry() {
    return this.http.get(this.imgLink).pipe(map(response=> response));
  };

  }



