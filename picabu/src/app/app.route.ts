import {Routes} from "@angular/router";
import {HotterComponent} from './hotter/hotter.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {CommunitiesComponent} from './communities/communities.component';
import {AuthGuard} from './auth/auth.guard';

export const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {
    path: 'hotter',
    component: HotterComponent,
    canActivate:[AuthGuard]},
  { path: 'communities',
    component: CommunitiesComponent,
    canActivate:[AuthGuard]
  },
];
