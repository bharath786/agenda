import { ConstructionComponent } from './../../construction/construction.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SetupComponent } from './setup/setup.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreferencesComponent } from './preferences/preferences.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { FormsModule } from '@angular/forms';
import { ModalDirective, ModalModule } from 'ngx-bootstrap';
import { TreeModule } from 'primeng/tree';
import { StructureComponent } from './structure/structure.component';
import { SharedModule } from '../../shared/shared.module';
import { TargetComponent } from './target/target.component';


export const routes :Routes = [
  { path: '', redirectTo: 'manageusers', pathMatch: 'full'},
  { path: 'manageusers', component: ManageUsersComponent, data: { breadcrumb: 'Users' , helptext:{heading:'Users', text:'Users & Permissions can be managed from here'} } },
  { path: 'preferences', component: PreferencesComponent, data: { breadcrumb: 'Preferences' , helptext:{heading:'Preferences', text:'Default configuration parameters for the application can be managed from here' }} },
  { path: 'setup', component: SetupComponent, data: { breadcrumb: 'Setup', helptext:{heading:'Setup', text:"Analytics, Dimensions and their respective KRA's & KPI's can be managed here"}  } },
  { path: 'structure', component: StructureComponent, data: { breadcrumb: 'Structure' , helptext:{heading:'Structure', text:'Organisation structure can be managed from here'} } },
  { path: 'target', component: TargetComponent, data: { breadcrumb: 'Target' , helptext:{heading:'Target', text:'KPI targets can be managed from here'} } }



];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),ModalModule.forRoot(),
    FormsModule,
    TreeModule,
    HttpClientModule,
    SharedModule,
    
  ],
  exports:[RouterModule],
  declarations: [PreferencesComponent, ManageUsersComponent, SetupComponent, StructureComponent, TargetComponent]
})
export class AdminSettingsModule { 


}
