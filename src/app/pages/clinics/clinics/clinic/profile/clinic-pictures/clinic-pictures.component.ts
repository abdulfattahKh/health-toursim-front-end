import { Component, OnInit } from '@angular/core';
import { ClinicService } from '../../clinic.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'clinic-pictures',
  templateUrl: './clinic-pictures.component.html',
  styleUrls: ['./clinic-pictures.component.scss']
})
export class ClinicPicturesComponent implements OnInit {


  slides: any[] = [];
  shown: boolean;
  constructor(
    private tostr: ToastrService,
    private clinicService: ClinicService
  ) { }

  ngOnInit() {
    this.clinicService.getClinicImages()
      .subscribe(data => {
        this.slides = [{}];
        this.slides = data['data']
      })
  }

  addImages(event) {
    this.clinicService.addImages(event)
      .subscribe(data => {
        if (data['success']) {
          this.slides = [{}];
          this.slides = data['images'];
          this.tostr.success(data['message'], 'success');
        }
      }, err => {
        this.tostr.error(err['message'], 'error');
      })
  }

  deleteImage(imageIndex) {
    this.clinicService.deleteImage(this.slides[imageIndex]['id'])
      .subscribe(data => {
        if (data['success']) {
          this.slides.splice(imageIndex);
          this.tostr.success(data['message'], 'success');
        }
      }, err => {
        this.tostr.error(err['message'], 'error');
      })
  }
}
