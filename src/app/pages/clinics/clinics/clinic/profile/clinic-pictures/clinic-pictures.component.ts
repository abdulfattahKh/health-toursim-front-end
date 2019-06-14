import { Component, OnInit } from '@angular/core';
import { ClinicService } from '../../clinic.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'clinic-pictures',
  templateUrl: './clinic-pictures.component.html',
  styleUrls: ['./clinic-pictures.component.scss']
})
export class ClinicPicturesComponent implements OnInit {


  images: any[] = [];
  shown:boolean;
  constructor(
    private tostr: ToastrService,
    private clinicService: ClinicService
  ) { }

  ngOnInit() {
    this.clinicService.getImages()
    .subscribe(data=>{
      if(data['success']) {
        this.images = data['data'];
        this.tostr.success(data['message'],'success');
      }
    })
  }

  addImages(images) {
    this.shown = false;
    this.clinicService.addImages(images)
      .subscribe(data => {
        this.tostr.success(data['message']);
        this.images.push(...data['images']);
        this.shown = true;
      });
  }

  deleteImage(images) {

  } 
}
