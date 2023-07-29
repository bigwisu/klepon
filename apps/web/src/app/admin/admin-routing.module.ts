import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { PeopleComponent } from './people/people.component';
import { GroupsComponent } from './groups/groups.component';

const routes: Routes = [
  { path: '', component: AdminComponent,
    children: [
      { path: 'people', component: PeopleComponent },
      { path: 'groups', component: GroupsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
