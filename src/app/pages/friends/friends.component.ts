import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageShellComponent } from '../../core/layout/page-shell.component';

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [CommonModule, FormsModule, PageShellComponent],
  templateUrl: './friends.component.html',
})
export class FriendsComponent {
  friends = [
    { name: 'Marcus Chen', online: true, watching: 'Watching Dune: Part Two', status: '' },
    { name: 'Sarah Jenkins', online: true, watching: null, status: 'Online' },
    { name: 'David Kim', online: false, watching: null, status: 'Last seen 2h ago' },
    { name: 'Elena Rodriguez', online: false, watching: null, status: 'Last seen yesterday' },
  ];

  activities: {
    id: number;
    user: string;
    action: string;
    movie: string;
    target?: string;
    time: string;
    rating?: number;
    review?: string;
    description?: string;
    likes?: number;
    comments?: number;
    replyable?: boolean;
    image: string;
  }[] = [
    {
      id: 1,
      user: 'Marcus Chen',
      action: 'watched',
      movie: 'Oppenheimer',
      image: '/assets/img/shoftv-poster-fight.jpg',
      time: '2h ago',
      rating: 5,
      review: 'Absolutely mind-blowing cinematography. A masterpiece from Nolan.',
      likes: 12,
      comments: 3,
    },
    {
      id: 2,
      user: 'Sarah Jenkins',
      action: 'added',
      movie: 'The Matrix',
      image: '/assets/img/shoftv-poster-rain.jpg',
      target: 'Watchlist',
      time: '5h ago',
      description: 'Planning to rewatch this classic over the weekend!',
    },
    {
      id: 3,
      user: 'David Kim',
      action: 'watched',
      movie: 'Blade Runner 2049',
      image: '/assets/img/shoftv-poster-desert.jpg',
      time: '1d ago',
      rating: 4,
      review: 'Visually stunning, but pacing felt a bit slow in the middle act.',
      likes: 4,
      replyable: true,
    },
  ];

}
