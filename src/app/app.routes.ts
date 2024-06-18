import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { EditUserComponent } from './edit-user/edit-user.component';

export const routes: Routes = [
  { path: 'accueil', component: HomeComponent },
  { path: 'gestion-utilisateurs', component: ManageUserComponent },
  { path: 'connexion', component: LoginComponent },
  { path: 'add-user', component: EditUserComponent },
  { path: 'edit-user/:id', component: EditUserComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
