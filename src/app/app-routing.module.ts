import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PopularTourComponent } from './popular-tour/popular-tour.component';
import { TourDetailsComponent } from './tour-details/tour-details.component';
import { ViewAllToursComponent } from './view-all-tours/view-all-tours.component';
import { RestaurantDetailsComponent } from './alexandria/alex-restaurants/restaurant-details/restaurant-details.component';
import { ViewAllRestaurantsComponent } from './alexandria/alex-restaurants/view-all-restaurants/view-all-restaurants.component';
import { AlexandriaComponent } from './alexandria/alexandria.component';
import { VisitsDetailsComponent } from './alexandria/alex-visits/visits-details/visits-details.component';
import { HotelDetailsComponent } from './alexandria/alex-hotels/hotel-details/hotel-details.component';
import { ViewAllHotelsComponent } from './alexandria/alex-hotels/view-all-hotels/view-all-hotels.component';
import { ViewAllVisitsComponent } from './alexandria/alex-visits/view-all-visits/view-all-visits.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MyTripComponent } from './my-trip/my-trip.component';
import { GuideMeComponent } from './guide-me/guide-me.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TourGuidProfileComponent } from './tour-guid-profile/tour-guid-profile.component';
import { ComapanyPackageComponent } from './comapany-package/comapany-package.component';
import { PackageDetailsComponent } from './package-details/package-details.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  {
    path: "my-trip/:id",
    component: MyTripComponent
  },
  {
    path:"my-trip",
    component:MyTripComponent
  },
  { 
    path: "guide-me",
    component: GuideMeComponent
  },
  {
    path: "alexandria",
    component: AlexandriaComponent
  }
  ,
  {
    path: "alexandria/places/:id",
    component: VisitsDetailsComponent
  },
  {
    path: "alexandria/restaurants/:id",
    component: RestaurantDetailsComponent
  },
  {
    path: "alexandria/hotels/:id",
    component: HotelDetailsComponent
  },
  { path:"aboutus",component:AboutUsComponent},
  { path:"tourguid/:id",component:TourGuidProfileComponent},
  { path:"tourguid",component:TourGuidProfileComponent},
  { path: "tour", component: PopularTourComponent },
  { path: "tourdetail", component: TourDetailsComponent },
  { path: "tours", component: ViewAllToursComponent },
  { path: "restaurants", component: ViewAllRestaurantsComponent },
  { path: "hotels", component: ViewAllHotelsComponent },
  { path: "places", component: ViewAllVisitsComponent },
  { path: "companypackage", component: ComapanyPackageComponent },
  { path:"companypackage/:id",component:PackageDetailsComponent},
  { path:"**",component:NotFoundPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
