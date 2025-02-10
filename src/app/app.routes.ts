import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {RecipeComponent} from './pages/recipe/recipe.component';
import {StoryComponent} from './pages/story/story.component';
import {ChallengeComponent} from './pages/challenge/challenge.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'story', component: StoryComponent },
  { path: 'recipe', component: RecipeComponent },
  { path: 'challenge', component: ChallengeComponent },
];
