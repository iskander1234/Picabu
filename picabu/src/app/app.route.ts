import {Routes} from "@angular/router";
import {HotterComponent} from './hotter/hotter.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {CommunitiesComponent} from './communities/communities.component';
import {AuthGuard} from './auth/auth.guard';
import {ServiceComponent} from './search/service/service.component';
import {TheBestComponent} from './ theBest/the-best.component';
import {FreshComponent} from './fresh/fresh.component';

export const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
 {path: 'hotter', component: HotterComponent},
 {path: 'communities', component: CommunitiesComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'the-best', component: TheBestComponent},
  {path: 'fresh', component: FreshComponent},
  // {path: 'hotter', component: HotterComponent, canActivate:[AuthGuard]},
  // { path: 'communities',
  //   component: CommunitiesComponent,
  //   canActivate:[AuthGuard]
  // },
];
