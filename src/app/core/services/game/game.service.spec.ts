import {TestBed} from '@angular/core/testing'

import {GameService} from './game.service'
import {HttpClient} from "@angular/common/http"
import {Game} from "../../models/game"
import {of} from "rxjs"
import {GameFilters} from "../../models/game-filters"
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing"

describe('GameService', () => {
    let service: GameService
    let httpClientSpy: jasmine.SpyObj<HttpClient>;

    const filters = {
        title: 'A'
    } as GameFilters

    beforeEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [GameService]
        })

        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        service = new GameService(httpClientSpy)
    })

    it('getGames should be return a games list', (done: DoneFn) => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        service = new GameService(httpClientSpy)

        const expectedGames: Game[] = [
            { id: 1, title: 'A' } as Game,
            { id: 2, title: 'B' } as Game
        ];

        httpClientSpy.get.and.returnValue(of(expectedGames));

         service.getGames().subscribe({
           next: games => {
             expect(games)
               .withContext('expected games')
               .toEqual(expectedGames);
             done();
           },
           error: done.fail
         })

        expect(httpClientSpy.get.calls.count())
            .withContext('one call')
            .toBe(1);

    })

    it('search should be return a games list filtered', (done: DoneFn) => {

        const expectedGames: Game[] = [
            { id: 1, title: 'A' } as Game,
        ];

        httpClientSpy.get.and.returnValue(of(expectedGames));

        service.search(filters).subscribe({
            next: games => {
                expect(games)
                    .withContext('expected games')
                    .toEqual(expectedGames);
                done();
            },
            error: done.fail
        })

        expect(httpClientSpy.get.calls.count())
            .withContext('one call')
            .toBe(1);
    })

    it('search should be return a games list filtered empty', (done: DoneFn) => {
        const expectedGames: Game[] = [];

        httpClientSpy.get.and.returnValue(of(expectedGames));

        service.search(filters).subscribe({
            next: games => {
                expect(games)
                    .withContext('expected games')
                    .toEqual(expectedGames);
                done();
            },
            error: done.fail
        })

        expect(httpClientSpy.get.calls.count())
            .withContext('one call')
            .toBe(1);
    })

    it('search should be return a games list filtered by platform', (done: DoneFn) => {
        const expectedGames: Game[] = [
            {platform: 'platform one'} as Game
        ]

        const filters = {
            platform: 'platform one'
        } as GameFilters

        httpClientSpy.get.and.returnValue(of(expectedGames));

        service.search(filters).subscribe({
            next: games => {
                expect(games)
                    .withContext('expected games')
                    .toEqual(expectedGames);
                done();
            },
            error: done.fail
        })

        expect(httpClientSpy.get.calls.count())
            .withContext('one call')
            .toBe(1);
    })

    it('getGenreGames should be return a genre games list', (done: DoneFn) => {
        const service = TestBed.inject(GameService)
        const httpTestingController = TestBed.inject(HttpTestingController);

        const genresList: (string | undefined)[] = [];

        service.getGenreGames().subscribe(genresResponse => {
          console.log('genresResponse', genresResponse)
          done();
        })

        const request = httpTestingController.expectOne(service.getApiUrl() + 'games');
        request.flush(genresList);

        // httpTestingController.verify();
        //
        // expect(genresList).toEqual(genres);
        //
        // console.log('genresList', genresList)
        //
        // expect(genresList).toBeDefined()
        // expect(Array.isArray(genresList)).toBeTrue()
        // expect(genresList.length).toBeGreaterThan(1)
        // expect(genresList[0]).toBeInstanceOf(String)
    })
})
