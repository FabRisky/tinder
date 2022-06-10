import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinderMatchComponent } from './tinder-match.component';

describe('TinderMatchComponent', () => {
  let component: TinderMatchComponent;
  let fixture: ComponentFixture<TinderMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinderMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TinderMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
