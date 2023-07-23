import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Game} from "../../models/game"
import { GameFilters } from "../../models/game-filters"
import { map } from "rxjs"

@Injectable()
export class GameService {

  private proxyAuthorizeCors = 'https://cors-anywhere.herokuapp.com/';
  private gameApiUrl = `${this.proxyAuthorizeCors}https://www.freetogame.com/api/`;

  constructor(private http: HttpClient) {
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

      if (filters?.platform) {
        restrictions = restrictions && game.platform === filters?.platform
      }

      return restrictions
    })

    return this.getGames().pipe(
        map(games => games.filter(applyFilters))
    );
  }
}
