import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [DragDropModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
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

  menuItemGroups: string[] = [];
  menuItems: string[] = [];
  kpiGroups: string[] = [];

  ngOnInit(): void {
    this.initializeDraggableAreaIds();
  }

  get draggableAreasForMenuItems(): string[] {
    return ['root', ...this.menuItemGroups];
  }

  get draggableAreasForKpiGroups(): string[] {
    return this.menuItems;
  }

  get draggableAreasForKpis(): string[] {
    return [...this.kpiGroups, ...this.menuItems];
  }

  initializeDraggableAreaIds() {
    this.data.forEach((item) => {
      if (item.type == 'MENU_ITEM_GROUP') {
        this.menuItemGroups.push(item.name);
        const menuItemGroup = item;

        menuItemGroup.value.forEach((menuItem) => {
          if (typeof menuItem != 'string') {
            this.menuItems.push(menuItem.name);

            menuItem.value.forEach((widget) => {
              if (typeof widget != 'string' && widget.type == 'KPI_GROUP') {
                this.kpiGroups.push(widget.name);
              }
            });
          }
        });
      } else if (item.type == 'MENU_ITEM') {
        const menuItem = item;
        this.menuItems.push(menuItem.name);

        menuItem.value.forEach((widget) => {
          if (typeof widget != 'string' && widget.type == 'KPI_GROUP') {
            this.kpiGroups.push(widget.name);
          }
        });
      }
    });
  }

  drop(event: CdkDragDrop<any>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  isKpiGroup(item: any): boolean {
    return typeof item !== 'string' && item?.type === 'KPI_GROUP';
  }
}
