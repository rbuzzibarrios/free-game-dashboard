import {TestBed} from '@angular/core/testing'

import {GameService} from './game.service'
import {HttpClient, HttpHandler} from "@angular/common/http"

describe('GameService', () => {
    let service: GameService

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [GameService, HttpClient, HttpHandler]
        })
        service = TestBed.inject(GameService)
    })

    it('should be created', () => {
        expect(service).toBeTruthy()
    })
})
