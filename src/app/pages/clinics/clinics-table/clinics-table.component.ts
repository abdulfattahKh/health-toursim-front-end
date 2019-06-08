import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ClinicsService } from '../clinics.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'clinics-table',
  templateUrl: './clinics-table.component.html',
  styleUrls: ['./clinics-table.component.scss']
})
export class ClinicsTableComponent implements OnInit {

  URL: string;
  addingUrl: string;
  deletionUrl: string;
  edtingUrl: string;
  acceptingUrl: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private clinicsService: ClinicsService,
    private toster: ToastrService
  ) { }
  ngOnInit() {
    this.activatedRoute.url.subscribe(Url => {
      this.URL = Url[0].path;
      if (this.URL == 'ClinicsByStatus') {
        this.settings = this.settings1;
        this.deletionUrl = "clinics/deleteClinic"
      }
      if (this.URL == 'allClinics' || this.URL == 'myClinics') {
        this.settings = this.settings2;
        this.addingUrl = 'clinics/addClinic'
        this.edtingUrl = 'clinics/editClinic'
        this.deletionUrl = 'clinics/deleteClinic'
      }
      this.URL = 'clinics/' + this.URL;
      if (this.URL == 'clinics/myClinics') {
        this.URL = this.URL + "/" + this.clinicsService.getUserId();
      }
      if (this.URL == 'clinics/ClinicsByStatus') {
        this.URL = this.URL + "?status=" + "pending"
      }
    })
  }
  lang = localStorage.getItem('lang');
  settings = {};
  settings1 = {
    mode: "external",
    attr: {
      class: "text-center"
    },
    delete: {
      deleteButtonContent: `<i class="nb-trash"></i>`,
      privilege: ['deleteClinics'],
      confirm: true
    },
    actions: {
      custom: [
        {
          name: 'accept',
          title: `<i class="nb-trash"></i>`,
          privilege: ['accpetClinic'],
        }
      ],
      add: false,
      delete: true,
      edit: false,
      position: this.lang == 'ar' ? 'left' : 'right'
    },
    columns: {}
  };

  settings2 = {
    mode: "external",
    attr: {
      class: "text-center"
    },
    add: {
      addButtonContent: '<i  class="ion-ios-plus-outline"></i>',
      privilege: ['addClinic']
    },
    delete: {
      deleteButtonContent: `<i class="nb-trash"></i>`,
      privilege: ['deleteClinic'],
      confirm: true
    },
    edit: {
      editButtonContent: `<i class="nb-edit"></i>`,
      privilege: ['editClinic']
    },
    actions: {
      add: true,
      delete: true,
      edit: true,
      position: this.lang == 'ar' ? 'left' : 'right'
    },
    columns: {}
  };

}
