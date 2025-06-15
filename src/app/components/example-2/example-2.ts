import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import Sortable from 'sortablejs';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-example-2',
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './example-2.html',
  styleUrl: './example-2.scss',
})
export class Example2 implements AfterViewInit, OnDestroy {
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

  private sortableInstances: Sortable[] = [];

  ngAfterViewInit() {
    this.initializeSortable();
  }

  ngOnDestroy() {
    this.destroySortable();
  }

  initializeSortable() {
    // Destroy any existing instances
    this.destroySortable();

    // Initialize root level
    this.createSortableForElement(
      '.example-list:not(.example-list .example-list)',
      {
        group: 'normal-group',
        animation: 150,
        fallbackOnBody: true,
        swapThreshold: 0.65,
        onEnd: (evt) => this.handleSortEnd(evt),
      },
    );

    // Initialize nested levels
    this.createSortableForElement('.example-list .example-list', {
      group: 'normal-group',
      animation: 150,
      fallbackOnBody: true,
      swapThreshold: 0.65,
      onEnd: (evt) => this.handleSortEnd(evt),
    });
  }

  private createSortableForElement(
    selector: string,
    options: Sortable.Options,
  ) {
    document.querySelectorAll(selector).forEach((el) => {
      const sortable = new Sortable(el as HTMLElement, options);
      this.sortableInstances.push(sortable);
    });
  }

  private destroySortable() {
    this.sortableInstances.forEach((instance) => instance.destroy());
    this.sortableInstances = [];
  }

  private handleSortEnd(evt: Sortable.SortableEvent) {
    // Get the parent list element
    const parentListEl = evt.to;
    const parentId = parentListEl.id;

    // Get all items in the list
    const items = Array.from(parentListEl.children).map((child: any) => {
      return child.getAttribute('data-id') || child.innerText.trim();
    });

    // Update your data model here
    console.log('Items after sort:', items);
    // You'll need to implement logic to update your nested todo array
    // based on the DOM changes
    console.log(this.todo);
  }

  isArray(item: any): boolean {
    return Array.isArray(item);
  }

  toArray(value: any): string[] {
    return Array.isArray(value) ? value : [value];
  }

  trackByIdx(index: number): number {
    return index;
  }
}
