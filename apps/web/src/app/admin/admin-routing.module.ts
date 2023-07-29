import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { PeopleComponent } from './people/people.component';
import { GroupsComponent } from './groups/groups.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: '', component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'people', component: PeopleComponent },
      { path: 'groups', component: GroupsComponent },
      { path: 'contacts', component: ContactsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
