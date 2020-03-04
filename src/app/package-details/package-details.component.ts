import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.scss']
})
export class PackageDetailsComponent implements OnInit {
  PackageDetails;
  Compdata;
  allPackages = [];
  singlePackage;
  singlePackageCompany;
  max;
  rate = 3;
  isReadonly: boolean = true;

  constructor(private packageDetail: UsersService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.packageDetail.getCompanyData().subscribe(data => {
      this.Compdata = data;
      console.log(this.Compdata);
      for (let i = 0; i < this.Compdata.length; i++) {
        for (let j = 0; j < this.Compdata[i].travelPlan.length; j++) {
          this.allPackages.push(this.Compdata[i].travelPlan[j]);
        }
      }
    });

    setTimeout(() => {
      this.activeRoute.params.subscribe(param => {
        for (let item of this.allPackages) {
          if (item.id == param.id) {
            this.singlePackage = item
          }
        }
        for (let item of this.Compdata) {
          console.log(this.singlePackage.companyID);
          if (item.id == this.singlePackage.companyID) {
            this.singlePackageCompany = item;
          }
        }
      })
    }, 500);
  }
}