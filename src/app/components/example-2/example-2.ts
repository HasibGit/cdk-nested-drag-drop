import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
  CdkDragEnter,
  CdkDragExit,
  CdkDragStart,
  DragDropModule,
} from '@angular/cdk/drag-drop';
import { asapScheduler, asyncScheduler } from 'rxjs';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { SortablejsModule } from 'nxt-sortablejs';
import { Options } from 'sortablejs';

@Component({
  selector: 'app-example-2',
  imports: [DragDropModule, CommonModule, NgIf, NgFor, SortablejsModule],
  templateUrl: './example-2.html',
  styleUrl: './example-2.scss',
})
export class Example2 {
  todo = [
    'Get to work',
    ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'],
    ['Preare for work', 'Drive to office', 'Üark car'],
    'Pick up groceries',
    'Go home',
    'Fall asleep',
  ];

  normalOptions: Options = {
    group: 'normal-group',
  };

  @ViewChildren(CdkDropList)
  private dlq: QueryList<CdkDropList>;

  public dls: CdkDropList[] = [];

  drop(event: any) {
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

  isArray(item: any): boolean {
    return Array.isArray(item);
  }

  toArray(value: string | string[]): string[] {
    return Array.isArray(value) ? value : [value];
  }

  ngAfterViewInit() {
    let ldls: CdkDropList[] = [];

    this.dlq.forEach((dl) => {
      console.log('found DropList ' + dl.id);
      ldls.push(dl);
    });

    ldls = ldls.reverse();

    asapScheduler.schedule(() => {
      this.dls = ldls;
    });
  }

  public onDragEntered(event: CdkDragEnter) {
    console.log('enter ' + event.container.id);
    this.enforceDragToSelf(event.container);
  }

  public onDragStarted(event: CdkDragStart) {
    console.log('start ' + event.source.dropContainer.id);

    this.enforceDragToSelf(event.source.dropContainer);
  }

  private enforceDragToSelf(dl: CdkDropList) {
    const siblings = dl.connectedTo as CdkDropList<any>[];

    const ref = dl._dropListRef;
    asapScheduler.schedule(() => {
      ref.connectedTo(siblings.map((list) => list._dropListRef));
    });
  }
}
