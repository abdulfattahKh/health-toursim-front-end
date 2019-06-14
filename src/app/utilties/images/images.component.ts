import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ImagesService } from './images.service';

@Component({
  selector: 'images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {



  @Input() slides: any[];
  @Input() files: any[];
  @Input() shown: boolean;
  @Input() isItFile: boolean;
  @Input() fileName: string;

  @Output() submit = new EventEmitter();
  @Output() deleteImage = new EventEmitter();

  @ViewChild('imageModel') private imageModel;
  urls = new Array<string>();
  uploadPath: string;
  activeSlideIndex = 0;
  imagesToSend: FormData = new FormData();
  constructor(
    private modalService: NgbModal,
    private tostr: ToastrService,
    private imagesService: ImagesService
  ) {
  }

  ngOnInit() {
    this.uploadPath = environment.upload + "images/" + this.fileName + "/";
  };


  addSlide(files): void {

    for (var i = 0; i < files.target.files.length; i++) {

      this.imagesToSend.append("image", files.target.files[i], files.target.files[i].name);
    }
    this.getImagesUrl(this.imagesToSend);
    this.save();
  }


  save() {
    this.submit.emit(this.imagesToSend);
    this.imagesToSend = new FormData();

  }


  ngOnChanges() { }

  removeSlide(index?: number): void {
    const toRemove = index ? index : this.activeSlideIndex;
    this.slides.splice(toRemove, 1);
    this.urls.splice(toRemove, 1);
    this.deleteImage.emit(this.slides);
  }

  getImagesUrl(files) {
    this.urls = [];
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
    }
  }
}
