import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tour-guid-profile',
  templateUrl: './tour-guid-profile.component.html',
  styleUrls: ['./tour-guid-profile.component.scss']
})
export class TourGuidProfileComponent implements OnInit {
  // getTourGuidPackage
  guidData;
  constructor(private service: UsersService, private activeRoute: ActivatedRoute) {
    this.activeRoute.paramMap.subscribe(param => {
      this.guidPackages(param.get('id'));
    })
    
  }
  guidPackages(lname){
    this.service.getTourGuidPackage(lname).subscribe(data=>{
      this.guidData=data;
      console.log(this.guidData);
    })
  }

  ngOnInit() {
  }

}
