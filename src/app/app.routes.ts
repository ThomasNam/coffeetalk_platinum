import {Routes} from '@angular/router';
import {StartPageComponent} from './pages/start-page/start-page.component';

export const routes: Routes = [

  { path: '', component: StartPageComponent },
  {
    path: 'ep1',
    loadChildren: () => import('./pages/ep1/ep1.routes').then((mod) => mod.routes),
  },
];
