import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AheaderComponent } from './aheader/aheader.component';
import { BfeaturesComponent } from './bfeatures/bfeatures.component';
import { QuickInstallComponent } from './quick-install/quick-install.component';

import { ServicesComponent } from './services/services.component';
import { PriceTableComponent } from './price-table/price-table.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

@NgModule({
  declarations: [
    AppComponent,
    AheaderComponent,
    BfeaturesComponent,
    QuickInstallComponent,
    ServicesComponent,
    PriceTableComponent,
    AboutUsComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
