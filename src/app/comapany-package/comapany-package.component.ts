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
  Compdata;
  max;
  rate = 4;
  isReadonly: boolean = true;
  constructor(private activeRoute: ActivatedRoute, private servicePackage: UsersService) {
    //companies
    this.servicePackage.getCompanyData().subscribe(data => {
      this.companyPackage = data;
      console.log(this.companyPackage);
    })
  }
  
  ngOnInit() {
    
  }
}