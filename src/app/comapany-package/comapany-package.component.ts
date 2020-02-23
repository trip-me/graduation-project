import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-comapany-package',
  templateUrl: './comapany-package.component.html',
  styleUrls: ['./comapany-package.component.scss']
})
export class ComapanyPackageComponent implements OnInit {
  companyPackage;
  package = [];
  // Compdata;
  max;
  rate = 2;
  isReadonly: boolean = true;
  constructor(private activeRoute: ActivatedRoute, private servicePackage: UsersService) {
    this.servicePackage.getCompanyData().subscribe(data => {
      this.companyPackage = data;
      console.log(this.companyPackage);
      console.log(this.companyPackage[0].travelPlan);
      this.package.push(this.companyPackage[0].travelPlan);
      this.package.push(this.companyPackage[1].travelPlan);
      this.package.push(this.companyPackage[2].travelPlan);
      console.log(this.package);
    })

    // this.activeRoute.paramMap.subscribe(param => {
    //   this.packageData(param.get('id'));
    // })
  }
  // packageData(cId) {
  //   this.servicePackage.getCompanyPackage(cId).subscribe(data => {
  //     this.Compdata = data;
  //     console.log(this.Compdata);
  //   });
  // }
  ngOnInit() {
  }
}