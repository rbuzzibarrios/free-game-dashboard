import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameViewPageComponent } from './game-view-page.component';
import {HttpClient, HttpHandler} from "@angular/common/http"

describe('GameViewPageComponent', () => {
  let component: GameViewPageComponent;
  let fixture: ComponentFixture<GameViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameViewPageComponent],
      providers: [HttpClient, HttpHandler]
    });
    fixture = TestBed.createComponent(GameViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
