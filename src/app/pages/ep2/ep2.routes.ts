import {Routes} from '@angular/router';
import {Ep2StartPageComponent} from './ep2-start-page/ep2-start-page.component';
import {Ep2HomePageComponent} from './ep2-home-page/ep2-home-page.component';
import {Ep2AboutComponent} from './ep2-about/ep2-about.component';
import {Ep2RecipeComponent} from './ep2-recipe/ep2-recipe.component';

export const routes: Routes = [
  {
    path: '', component: Ep2StartPageComponent, children: [
      {path: '', component: Ep2HomePageComponent},
      {path: 'about', component: Ep2AboutComponent},
      // {path: 'story', component: StoryComponent},
      {path: 'recipe', component: Ep2RecipeComponent},
      // {path: 'challenge', component: ChallengeComponent},
    ]
  },
];
