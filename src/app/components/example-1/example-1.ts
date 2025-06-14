import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';
import { SortablejsModule } from 'nxt-sortablejs';
import { Options } from 'sortablejs';

@Component({
  selector: 'app-example-1',
  imports: [DragDropModule, CommonModule, SortablejsModule],
  templateUrl: './example-1.html',
  styleUrl: './example-1.scss',
})
export class Example1 {
  protected title = 'cdk-nested-drag-drop';

  data = [
    {
      name: 'Menu Item Group 1',
      type: 'MENU_ITEM_GROUP',
      value: [
        {
          name: 'Menu Item 1',
          type: 'MENU_ITEM',
          value: [
            'chart 1',
            'chart 2',
            {
              name: 'KPI Group 1',
              type: 'KPI_GROUP',
              value: ['chart 3', 'chart 4'],
            },
            'chart 5',
          ],
        },
        {
          name: 'Menu Item 2',
          type: 'MENU_ITEM',
          value: ['chart 6', 'chart 7'],
        },
      ],
    },
    {
      name: 'Menu Item 3',
      type: 'MENU_ITEM',
      value: [
        'chart 8',
        'chart 9',
        {
          name: 'KPI Group 2',
          type: 'KPI_GROUP',
          value: ['chart 10', 'chart 11', 'chart 12'],
        },
      ],
    },
    {
      name: 'Menu Item Group 3',
      type: 'MENU_ITEM_GROUP',
      value: [
        {
          name: 'Menu Item 4',
          type: 'MENU_ITEM',
          value: [
            'chart 13',
            'chart 14',
            {
              name: 'KPI Group 3',
              type: 'KPI_GROUP',
              value: ['chart 15', 'chart 16'],
            },
            'chart 17',
          ],
        },
        {
          name: 'Menu Item 5',
          type: 'MENU_ITEM',
          value: ['chart 18', 'chart 19'],
        },
      ],
    },
  ];

  normalOptions: Options = {
    group: 'nested', // same group name enables cross-list dragging
    animation: 150,
    fallbackOnBody: true,
    swapThreshold: 0.65,
  };

  isArray(item: any): boolean {
    return Array.isArray(item);
  }

  toArray(value: any): string[] {
    return Array.isArray(value) ? value : [value];
  }
}
