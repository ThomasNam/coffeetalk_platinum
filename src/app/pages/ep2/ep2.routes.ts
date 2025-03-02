import {Routes} from '@angular/router';
import {Ep2StartPageComponent} from './ep2-start-page/ep2-start-page.component';
import {Ep2HomePageComponent} from './ep2-home-page/ep2-home-page.component';

export const routes: Routes = [
  {
    path: '', component: Ep2StartPageComponent, children: [
      {path: '', component: Ep2HomePageComponent},
      // {path: 'about', component: AboutComponent},
      // {path: 'story', component: StoryComponent},
      // {path: 'recipe', component: RecipeComponent},
      // {path: 'challenge', component: ChallengeComponent},
    ]
  },
];
