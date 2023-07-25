import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFilterFormComponent } from './game-filter-form.component';

describe('GameFilterFormComponent', () => {
  let component: GameFilterFormComponent;
  let fixture: ComponentFixture<GameFilterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameFilterFormComponent]
    });
    fixture = TestBed.createComponent(GameFilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
