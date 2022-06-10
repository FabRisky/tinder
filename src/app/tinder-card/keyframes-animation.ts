import { keyframes, style,animate } from '@angular/animations';

export const swipeRight = [
  style({ opacity: 1 }),
  style({ transform: 'translate3d(800%, 0, 0) rotate3d(0, 0, 1, 100deg)', opacity: 0 }),
]

export const swipeLeft = [
  style({ opacity: 1 }),
  style({ transform: 'translate3d(-800%, 0, 0) rotate3d(0, 0, 1, -100deg)', opacity: 0 }),
]