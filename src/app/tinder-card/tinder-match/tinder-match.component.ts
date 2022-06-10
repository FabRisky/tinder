import { Component, EventEmitter, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-tinder-match',
  templateUrl: './tinder-match.component.html',
  styleUrls: ['./tinder-match.component.scss']
})
export class TinderMatchComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(TinderMatchComponent);
  }

}
