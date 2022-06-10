import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { trigger, keyframes, animate, transition } from "@angular/animations";
import * as keyFrameAnim from './keyframes-animation';
import { TinderMatchComponent } from './tinder-match/tinder-match.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-tinder-card',
  templateUrl: './tinder-card.component.html',
  styleUrls: ['./tinder-card.component.scss'],
  providers: [UserService],
  animations: [
    trigger('cardAnimator', [
      transition('* => swipeRight', animate(750, keyframes(keyFrameAnim.swipeRight))),
      transition('* => swipeLeft', animate(750, keyframes(keyFrameAnim.swipeLeft)))
    ])
  ]
})
export class TinderCardComponent implements OnInit {

 users:any;
 animationState: string | undefined;
 index:number = 0;

  constructor(private userService:UserService, public dialog: MatDialog) { 
  }

  getUserInfo() {
    this.userService.getUserData().subscribe((res:any) => {
      this.users = res
    });
  }

  ngOnInit(): void {
    this.getUserInfo();
  }

  startAnimation(state:any) {
    // let test = this.randomIntFromInterval(24)
    // console.log(test)
    if (!this.animationState) {
      this.animationState = state;
      if (this.animationState !== 'swipeLeft' && (this.index === 4 || this.index === 10 || this.index === 16)) {
        // if (this.animationState !== 'swipeLeft' && this.randomIntFromInterval(24) === this.index) {
        const dialogRef = this.dialog.open(TinderMatchComponent, {
          width: '20%',
          panelClass: 'custom-match-dialog'
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log(this.index)
        });
      } 
      else this.getUserInfo();
    }
  }

  resetAnimationState(state:any) {
    this.animationState = '';
    this.index++;
  }

  //for tests
  randomIntFromInterval(range:number) { 
    return Math.floor( Math.random() * range / 2 ) * 2;
  }
  

  ngOnDestroy() {
    // this.userService.unsubscribe();
  }

}
