import {Component, inject, OnInit, signal} from '@angular/core';
import {StoryEp1Service} from '../../../services/ep1/story-ep1.service';
import {RecipeOneComponent} from '../../../components/recipe-one/recipe-one.component';
import {Story} from '../../../models/type/story_type';

@Component({
  selector: 'app-story',
  imports: [
    RecipeOneComponent
  ],
  standalone: true,
  templateUrl: './story.component.html',
  styleUrl: './story.component.scss'
})
export class StoryComponent implements OnInit {
  storyService = inject(StoryEp1Service);
  allStory = signal<Story[]>([]);

  ngOnInit(): void {
    this.allStory.set(this.storyService.getStory());
  }
}
