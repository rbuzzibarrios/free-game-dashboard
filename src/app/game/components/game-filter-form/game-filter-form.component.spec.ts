import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFilterFormComponent } from './game-filter-form.component';
import {GameService} from "../../../core/services/game/game.service"
import {HttpClient, HttpHandler} from "@angular/common/http"
import {NgSelectComponent, NgSelectModule} from "@ng-select/ng-select"
import {NO_ERRORS_SCHEMA} from "@angular/core"

describe('GameFilterFormComponent', () => {
  let component: GameFilterFormComponent;
  let fixture: ComponentFixture<GameFilterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[NgSelectModule],
      declarations: [GameFilterFormComponent, NgSelectComponent],
      providers: [GameService, HttpClient, HttpHandler],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(GameFilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
