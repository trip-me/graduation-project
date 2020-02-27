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
  allPackages=[];
  singlePackage={};
  
  constructor(private packageDetail: UsersService, private activeRoute: ActivatedRoute) {}
  // packagesData(id) {
  // }
  ngOnInit() {
    this.packageDetail.getCompanyData().subscribe(data => {
      this.Compdata = data;
      // console.log(compId,this.Compdata);
      for (let i = 0; i < this.Compdata.length; i++) {
        for (let j = 0; j < this.Compdata[i].travelPlan.length; j++) {
          // if(this.Compdata[i].travelPlan[i] == compId){
          this.allPackages.push(this.Compdata[i].travelPlan[j]);
          // if(this.id == this.allPackages.id){
          // }
          // console.log(this.allPackages);
        }
      }
    });
      setTimeout(() => {
        this.activeRoute.params.subscribe(param => {
          console.log(param)
       for (let item of this.allPackages){
         if(item.id == param.id){
           this.singlePackage= item
         }
       }
        console.log(this.singlePackage);
      })
      }, 500);
  }
}