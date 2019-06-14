import { Component, OnInit } from '@angular/core';
import { ClinicService } from '../../clinic.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  description:string ;
  constructor(
    private tostr:ToastrService,
    private clinicService:ClinicService
  ) { }

  ngOnInit() {
    this.clinicService.getClinicDescription()
    .then(res=>{
      this.description = res['descreption'];
    });
  }

  addescription() {
    this.clinicService.addescription(this.description).then(res=>{
      if(res) {
        this.tostr.success("description was added successful",'success');
      }
    }).catch(err=>{
      this.tostr.error("there was an error while adding the description");
    })
  }

}
