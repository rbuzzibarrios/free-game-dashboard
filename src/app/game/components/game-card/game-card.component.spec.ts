import {HttpClient, HttpHandler} from "@angular/common/http"

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCardComponent } from './game-card.component';

describe('GameCardComponent', () => {
  let component: GameCardComponent;
  let fixture: ComponentFixture<GameCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameCardComponent],
      providers: [HttpClient, HttpHandler]
    });
    fixture = TestBed.createComponent(GameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
