import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FrontComponent } from './front/front.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      { path: '', component: FrontComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact', component: ContactComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
