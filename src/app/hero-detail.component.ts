import { Component, Input } from '@angular/core'; //3
import { Hero } from './hero'; //1

@Component({
  selector: 'hero-detail', //<hero-detail></hero-detail>
  template:  // 2-2
    `<div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div>
        <label>id: </label>{{hero.id}}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class HeroDetailComponent {
  @Input() hero: Hero; //3
}
