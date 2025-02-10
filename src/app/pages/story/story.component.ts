import {Component, inject, OnInit, signal} from '@angular/core';
import {StoryService} from '../../services/story.service';
import {Story} from '../../models/story';
import {RecipeOneComponent} from '../../components/recipe-one/recipe-one.component';

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
  storyService = inject(StoryService);
  allStory = signal<Story[]>([]);

  ngOnInit(): void {
    this.allStory.set(this.storyService.getStory());
  }
}
