import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgwWowModule } from 'ngx-wow';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import {FormsModule } form "@ang"



import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { PopularTourComponent } from './popular-tour/popular-tour.component';
import { PopularHotelComponent } from './popular-hotel/popular-hotel.component';
import { PopularRestaurantComponent } from './popular-restaurant/popular-restaurant.component';
import { AdventureComponent } from './adventure/adventure.component';
import { FooterComponent } from './footer/footer.component';
import { EnjoyWithUsComponent } from './enjoy-with-us/enjoy-with-us.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { TourDetailsComponent } from './tour-details/tour-details.component';
import { ViewAllToursComponent } from './view-all-tours/view-all-tours.component';
import { RestaurantDetailsComponent } from './alexandria/alex-restaurants/restaurant-details/restaurant-details.component';
import { ViewAllRestaurantsComponent } from './alexandria/alex-restaurants/view-all-restaurants/view-all-restaurants.component';
import { PopualrVisitsComponent } from './popualr-visits/popualr-visits.component';
import { AlexandriaComponent } from './alexandria/alexandria.component';
import { AlexVisitsComponent } from './alexandria/alex-visits/alex-visits.component';
import { VisitsDetailsComponent } from './alexandria/alex-visits/visits-details/visits-details.component';
import { AlexRestaurantsComponent } from './alexandria/alex-restaurants/alex-restaurants.component';
import { AlexHotelsComponent } from './alexandria/alex-hotels/alex-hotels.component';
import { HotelDetailsComponent } from './alexandria/alex-hotels/hotel-details/hotel-details.component';
import { ViewAllHotelsComponent } from './alexandria/alex-hotels/view-all-hotels/view-all-hotels.component';
import { ViewAllVisitsComponent } from './alexandria/alex-visits/view-all-visits/view-all-visits.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyTripComponent } from './my-trip/my-trip.component';
import { GuideMeComponent } from './guide-me/guide-me.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TourGuidComponent } from './tour-guid/tour-guid.component';
import { TourGuidProfileComponent } from './tour-guid-profile/tour-guid-profile.component';
import { ComapanyPackageComponent } from './comapany-package/comapany-package.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { PackageDetailsComponent } from './package-details/package-details.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    PopularTourComponent,
    PopularHotelComponent,
    PopularRestaurantComponent,
    AdventureComponent,
    FooterComponent,
    EnjoyWithUsComponent,
    HeroSectionComponent,
    TourDetailsComponent,
    ViewAllToursComponent,
    RestaurantDetailsComponent,
    ViewAllRestaurantsComponent,
    PopualrVisitsComponent,
    AlexandriaComponent,
    AlexVisitsComponent,
    VisitsDetailsComponent,
    AlexRestaurantsComponent,
    AlexHotelsComponent,
    HotelDetailsComponent,
    ViewAllHotelsComponent,
    ViewAllVisitsComponent,
    LoginComponent,
    RegisterComponent,
    MyTripComponent,
    GuideMeComponent,
    AboutUsComponent,
    TourGuidComponent,
    TourGuidProfileComponent,

    ComapanyPackageComponent,
    PackageDetailsComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    CarouselModule,
    NgwWowModule,
    AlertModule.forRoot(),
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RatingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
