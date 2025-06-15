import { Component } from '@angular/core';

import { CommonModule, NgFor, NgIf } from '@angular/common';
import { SortablejsModule } from 'nxt-sortablejs';
import { Options } from 'sortablejs';

@Component({
  selector: 'app-example-2',
  imports: [CommonModule, NgIf, NgFor, SortablejsModule],
  templateUrl: './example-2.html',
  styleUrl: './example-2.scss',
})
export class Example2 {
  todo = [
    'Get to work',
    [
      'Morning routine',
      [
        'Get up',
        'Brush teeth',
        ['Wash face', 'Use mouthwash'],
        'Take a shower',
      ],
      'Check e-mail',
      'Walk dog',
    ],
    [
      'Commute',
      ['Prepare for work', 'Gather items', ['Laptop', 'Keys', 'Wallet']],
      'Drive to office',
      'Park car',
    ],
    'Pick up groceries',
    'Go home',
    'Evening routine',
    'Fall asleep',
  ];

  normalOptions: Options = {
    group: 'normal-group',
  };

  isArray(item: any): boolean {
    return Array.isArray(item);
  }

  toArray(value: any): string[] {
    return Array.isArray(value) ? value : [value];
  }
}
