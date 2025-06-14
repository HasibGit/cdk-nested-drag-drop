import { Component } from '@angular/core';
import { Example1 } from './components/example-1/example-1';
import { Example2 } from './components/example-2/example-2';

@Component({
  selector: 'app-root',
  imports: [Example1, Example2],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
