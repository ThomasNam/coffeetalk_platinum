import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {StoryComponent} from './story/story.component';
import {RecipeComponent} from './recipe/recipe.component';
import {ChallengeComponent} from './challenge/challenge.component';
import {Ep1StartPageComponent} from './ep1-start-page/ep1-start-page.component';

export const routes: Routes = [
  {
    path: '', component: Ep1StartPageComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'story', component: StoryComponent},
      {path: 'recipe', component: RecipeComponent},
      {path: 'challenge', component: ChallengeComponent},
    ]
  },
];
