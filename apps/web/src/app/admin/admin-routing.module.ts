import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { PeopleComponent } from './people/people.component';
import { GroupsComponent } from './groups/groups.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddressComponent } from './address/address.component';

const routes: Routes = [
  { path: '', component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'people', component: PeopleComponent },
      { path: 'groups', component: GroupsComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'address', component: AddressComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
