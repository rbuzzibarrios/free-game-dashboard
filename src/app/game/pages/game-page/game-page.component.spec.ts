import {ComponentFixture, TestBed} from '@angular/core/testing'

import {GamePageComponent} from './game-page.component'
import {HttpClient, HttpHandler} from "@angular/common/http"

describe('GamePageComponent', () => {
  let component: GamePageComponent
  let fixture: ComponentFixture<GamePageComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamePageComponent],
      providers: [HttpClient, HttpHandler]
    })
    fixture = TestBed.createComponent(GamePageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
