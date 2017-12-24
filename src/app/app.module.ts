import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { BannerComponent } from './home/banner/banner.component';
import { CategoriesComponent } from './categories/categories/categories.component';
import { ExpertsComponent } from './experts/experts.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { GetstartedComponent } from './getstarted/getstarted.component';

const appRoutes:Routes = [
  {path:'',component:HomeComponent},
  {path:'experts',component:ExpertsComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'how-it-works',component:HowitworksComponent},
  {path:'contact',component:ContactComponent},
  {path:'pricing',component:PricingComponent},
  {path:'blogs',component:BlogsComponent},
  {path:'get-started',component:GetstartedComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    CategoriesComponent,
    ExpertsComponent,
    BlogsComponent,
    HowitworksComponent,
    ContactComponent,
    PricingComponent,
    GetstartedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
