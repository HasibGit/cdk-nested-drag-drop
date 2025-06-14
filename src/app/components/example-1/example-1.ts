import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';
import { SortablejsModule } from 'nxt-sortablejs';
import { Options } from 'sortablejs';

type KpiItem = { type: 'KPI'; name: string };
type KpiGroup = { type: 'KPI_GROUP'; name: string; value: KpiItem[] };
type MenuItem = {
  type: 'MENU_ITEM';
  name: string;
  value: (KpiItem | KpiGroup)[];
};
type MenuItemGroup = {
  type: 'MENU_ITEM_GROUP';
  name: string;
  value: MenuItem[];
};

type DataItem = MenuItem | MenuItemGroup;

@Component({
  selector: 'app-example-1',
  imports: [DragDropModule, CommonModule, SortablejsModule],
  templateUrl: './example-1.html',
  styleUrl: './example-1.scss',
})
export class Example1 {
  protected title = 'cdk-nested-drag-drop';

  data: DataItem[] = [
    {
      name: 'Menu Item Group 1',
      type: 'MENU_ITEM_GROUP',
      value: [
        {
          name: 'Menu Item 1',
          type: 'MENU_ITEM',
          value: [
            { type: 'KPI', name: 'chart 1' },
            { type: 'KPI', name: 'chart 12' },
            {
              name: 'KPI Group 1',
              type: 'KPI_GROUP',
              value: [
                { type: 'KPI', name: 'chart 3' },
                { type: 'KPI', name: 'chart 4' },
              ],
            },
            { type: 'KPI', name: 'chart 5' },
          ],
        },
        {
          name: 'Menu Item 2',
          type: 'MENU_ITEM',
          value: [
            { type: 'KPI', name: 'chart 6' },
            { type: 'KPI', name: 'chart 7' },
          ],
        },
      ],
    },
    {
      name: 'Menu Item 3',
      type: 'MENU_ITEM',
      value: [
        { type: 'KPI', name: 'chart 8' },
        { type: 'KPI', name: 'chart 9' },
        {
          name: 'KPI Group 2',
          type: 'KPI_GROUP',
          value: [
            { type: 'KPI', name: 'chart 10' },
            { type: 'KPI', name: 'chart 11' },
            { type: 'KPI', name: 'chart 12' },
          ],
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
            { type: 'KPI', name: 'chart 13' },
            { type: 'KPI', name: 'chart 14' },
            {
              name: 'KPI Group 3',
              type: 'KPI_GROUP',
              value: [
                { type: 'KPI', name: 'chart 15' },
                { type: 'KPI', name: 'chart 16' },
              ],
            },
            { type: 'KPI', name: 'chart 17' },
          ],
        },
        {
          name: 'Menu Item 5',
          type: 'MENU_ITEM',
          value: [
            { type: 'KPI', name: 'chart 17' },
            { type: 'KPI', name: 'chart 18' },
          ],
        },
      ],
    },
  ];

  normalOptions: Options = {
    group: 'nested',
  };

  isArray(item: any): boolean {
    return Array.isArray(item);
  }

  toArray(value: any): string[] {
    return Array.isArray(value) ? value : [value];
  }
}
