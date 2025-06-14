import { Component } from '@angular/core';
import { Example1 } from './components/example-1/example-1';

@Component({
  selector: 'app-root',
  imports: [Example1],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
