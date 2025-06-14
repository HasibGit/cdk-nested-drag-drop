import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
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
          value: ['chart 10, chart 11', 'chart 12'],
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
}
