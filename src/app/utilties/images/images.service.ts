import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }

  uploadImages(filesList, imagesfiles) {
    let imagesNames: any[] = [];
    for (var i = 0; i < filesList.length; i++) {
        if (this.checkImagesType(filesList[i]['type'])) {
            imagesfiles.append(filesList[i]['name'], filesList[i]);
            imagesNames.push(filesList[i]['name']);
        }
    }
    return imagesNames;
}


checkImagesType(type) {
    let imagesType = ['image/jpeg', 'image/jpg', 'image/png', 'image/jpeg', 'image/mp4', 'image/.mpeg'];
    let ok: boolean = false;
    imagesType.forEach(item => {
        if (type == item) {
            ok = true;
        }
    })
    return ok;
}
}
