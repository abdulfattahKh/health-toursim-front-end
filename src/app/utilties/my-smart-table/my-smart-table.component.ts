import { Component, OnInit, Input, Output } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { UtiliesService } from "../utilies.service";
import { PrivilegesService } from '../../services/privileges.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'my-smart-table',
  templateUrl: './my-smart-table.component.html',
  styleUrls: ['./my-smart-table.component.scss']
})
export class MySmartTableComponent implements OnInit {

  @Input('apiName') apiName: string;
  @Input('settings') settings: any;
  @Input('dataSource') dataSource: any[];
  @Input('Dcolumns') columnsToDisplay: any[];
  @Input('Hcolumns') columnsToHide: any[];
  @Input('addingUrl') addingUrl: string;
  @Input('deletionUrl') deletionUrl: string;
  @Input('updateUrl') updateUrl: string;
  loading: boolean = false;
  actions: any[] = [];
  constructor(
    private utiliesService: UtiliesService,
    private translate: TranslationService,
    private privilegesService: PrivilegesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tostr: ToastrService
  ) { }

  ngOnInit() {

    //check privileges status
    // if (!this.settings['add'] ||
    //   !(this.settings['add']['privilege'] && this.canActive(this.settings['add']['privilege']))) {
    //   this.settings['add'] = false;
    //   this.settings['actions']['add'] = false;
    // }
    // if (!this.settings['edit'] ||
    //   !(this.settings['edit']['privilege'] && this.canActive(this.settings['edit']['privilege']))) {
    //   this.settings['edit'] = false;
    //   this.settings['actions']['edit'] = false;
    // }
    // if (!this.settings['delete'] ||
    //   !(this.settings['delete']['privilege'] && this.canActive(this.settings['delete']['privilege']))) {
    //   this.settings['delete'] = false;
    //   this.settings['actions']['delete'] = false;
    // }
    // if (this.settings['actions']['custom']) {
    //   this.actions = [];
    //   let custom = this.settings['actions']['custom'];
    //   custom.forEach(action => {
    //     if (!action['privilege'] || (action['privilege'] && this.canActive(action['privilege']))) {
    //       this.actions.push(action);
    //     }
    //   });


    //   // if (custom.length > 3) {
    //   //   let action =
    //   //   {
    //   //     name: 'options',
    //   //     title: `<i class="fa fa-bars" title="${this.translate.translateUtterance('button.options')}"></i>`
    //   //   };
    //   //   // for(const action of actions) {
    //   //   //   this.options.push(action);
    //   //   // }
    //   //   this.settings['actions']['custom'] = [action];
    //   // } else {
    //   this.settings['actions']['custom'] = this.actions;
    //   // }
    // }

    // retriving table columns titles
    this.settings['actions']['columnTitle'] = this.translate.translateWord('Table.actions');

    if (this.apiName) {
      this.loading = false;
      this.utiliesService.getSmartTableData(this.apiName)
        .subscribe(data => {
          if (data.success) {
            // if(!this.settings.columns) {
            this.getMyColumns(data['data'][0]);
            this.loading = true;
            this.tostr.success('the data was fetched correctly');
            console.log(this.settings);
            //}
            this.dataSource = data['data'];
          }
        }, err => {
          this.tostr.error('there was an error while feching the data');
        })
    } else {

    }
  }

  getMyColumns(data) {
    Object.keys(data).forEach(key => {
      let KEY = key.toLowerCase();
      this.settings.columns[key] = {
        title: this.translate.translateWord("Table." + KEY)
      }
    })
  }

  onCreate(event) {
    if (this.addingUrl && this.addingUrl != "") {
      this.router.navigateByUrl(this.addingUrl);
    } else {
      this.router.navigate(['create'], { relativeTo: this.activatedRoute });
    }
  }

  rowSelect() {

  }

  canActive(privilege: any) {
    return this.privilegesService.isAuthorized(privilege);
  }

}
