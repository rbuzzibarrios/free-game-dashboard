import {ComponentFixture, TestBed} from '@angular/core/testing'

import {GamePageComponent} from './game-page.component'
import {HttpClient, HttpHandler} from "@angular/common/http"
import {GameFilterFormComponent} from "../../components/game-filter-form/game-filter-form.component"
import {NgSelectComponent, NgSelectModule} from "@ng-select/ng-select"
import {NO_ERRORS_SCHEMA} from "@angular/core"

describe('GamePageComponent', () => {
  let component: GamePageComponent
  let fixture: ComponentFixture<GamePageComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgSelectModule],
      declarations: [GamePageComponent, GameFilterFormComponent, NgSelectComponent],
      providers: [HttpClient, HttpHandler],
      schemas:[NO_ERRORS_SCHEMA]
    })
    fixture = TestBed.createComponent(GamePageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
