import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Game} from "../../models/game"
import { GameFilters } from "../../models/game-filters"
import {map} from "rxjs"
import {environment} from "../../../../environments/environment"

@Injectable()
export class GameService {
  private gameApiUrl = environment.apiFreeGameUrl;

  constructor(private http: HttpClient) {

    if (!environment.production) {
      this.gameApiUrl = `${environment.proxyUrlCORSAnyWhere}${environment.apiFreeGameUrl}`
    }
  }

  getApiUrl() {
    return this.gameApiUrl;
  }

  getGames() {
    return this.http.get<Game[]>(this.gameApiUrl + 'games')
  }

  search(filters: GameFilters) {
    const applyFilters = ((game: Game) => {
      let restrictions = true

      if (filters?.title) {
        restrictions = game.title === filters?.title
      }

      if (filters?.genre) {
        restrictions = restrictions && game.genre === filters?.genre
      }

      return restrictions
    })

    let apiUrlSearchGameByPlatform = `${this.getApiUrl()}games`

    if (filters?.platform) {
      const searchPlatformQueryFilter = `?platform=${filters?.platform}`;

      apiUrlSearchGameByPlatform = apiUrlSearchGameByPlatform.concat(searchPlatformQueryFilter)
    }

    return this.http.get<Game []>(apiUrlSearchGameByPlatform).pipe(
        map(games => games.filter(applyFilters))
    );
  }

  getGenreGames() {
    const applyGenreMap = (game: Game) => game.genre?.trim()

    return this.getGames().pipe(
        map(games => [...new Set(games.map(applyGenreMap))]),
    );
  }

  getGameById(gameId: number | string) {
    return this.http.get<Game>(`${this.getApiUrl()}game?id=${gameId}`)
  }
}
