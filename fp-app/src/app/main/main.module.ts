import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { MainRoutingModule } from './main-routing.module';
import { SlideshowItemComponent } from './slideshow/slideshow-item/slideshow-item.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { ContactMapComponent } from './contact/contact-map/contact-map.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavigationComponent,
    HomeComponent,
    ContactComponent,
    SlideshowComponent,
    SlideshowItemComponent,
    ContactFormComponent,
    ContactMapComponent
  ],
  exports: [
    NavigationComponent
  ],
  imports: [
    MainRoutingModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
