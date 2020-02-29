import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.scss']
})
export class PackageDetailsComponent implements OnInit {
  PackageDetails;
  Compdata: any;
  allPackages = [];
  singlePackage = {};

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
        console.log(this.singlePackage);
      })
    }, 500);
  }
}