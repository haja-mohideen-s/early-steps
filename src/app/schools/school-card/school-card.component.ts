import { Component, Input } from '@angular/core';
import { Record } from '../../models/school';

@Component({
  selector: 'app-school-card',
  standalone: false,
  templateUrl: './school-card.component.html',
  styleUrl: './school-card.component.css'
})
export class SchoolCardComponent {
  @Input() school!: Record;


}
