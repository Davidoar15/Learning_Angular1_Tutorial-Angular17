import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>Your Games, {{ username }}:</p>
    <ul>
      <!-- Directiva @for (new version) -->
      @for (game of games; track game.id) {
        <li (click)="fav(game.name)">
          {{ game.name }}
        </li>
      }
      <!--
          Directiva *ngFor (old version)
        <li *ngFor="let game of games">
          <a href="{{ game.id }}">{{ game.name }}</a>
        </li>
      -->
    </ul>
  `,
  styles: `
    li {
      color: #57f;
      cursor: pointer;
    }

    p {
      color: white;
    }
  `
})
export class GamesComponent {
  // * Props Father to Child (user -> games)
  @Input() username = '';

  // * Props Child to Father (games -> user)
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }

  games = [
    {
      id: 1,
      name: 'Pokémon Stadium'
    },
    {
      id: 2,
      name: 'Pokémon Stadium 2'
    },    
    {
      id: 3,
      name: 'PokéPark'
    },
  ]
}
