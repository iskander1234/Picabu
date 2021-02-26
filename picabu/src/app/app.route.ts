import {Routes} from "@angular/router";
import {HotterComponent} from './hotter/hotter.component';
import {WelcomeComponent} from './welcome/welcome.component';

export const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'hotter', component: HotterComponent}
];
