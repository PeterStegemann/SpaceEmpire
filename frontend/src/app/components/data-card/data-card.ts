import { Component, Input } from '@angular/core';
import { CommonModule} from "@angular/common";

@Component
({
  imports: [ CommonModule],
  selector: 'app-data-card',
  standalone: true,
  styleUrl: './data-card.css',
  templateUrl: './data-card.html',
})
export class DataCard
{
  @Input() message: string = '';
}
