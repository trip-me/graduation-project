import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-comapany-data',
  templateUrl: './comapany-data.component.html',
  styleUrls: ['./comapany-data.component.scss']
})
export class ComapanyDataComponent implements OnInit {
  companyData;
  max: number = 5;
  rate: number = 3;
  isReadonly: boolean = true;
  Tourguid;
  constructor(private serviceCopmany: UsersService) {
    this.serviceCopmany.getCompanyData().subscribe(data => {
      this.companyData = data;
    })
    this.serviceCopmany.getTourGuid().subscribe(data => {
      this.Tourguid = data;
      console.log(this.Tourguid);
    })
  }
  // getTourguid(){
  //   this.serviceCopmany.getTourGuid().subscribe(data=>{
  //     this.Tourguid=data;
  //     console.log(this.Tourguid);

  //   })
  // }
  ngOnInit() {
  }

}
