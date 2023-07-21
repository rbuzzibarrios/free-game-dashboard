import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Game} from "../../models/game"

@Injectable()
export class GameService {

  private gameApiUrl = 'https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/'

  constructor(private http: HttpClient) {
  }

  getGames() {
    return this.http.get<Game[]>(this.gameApiUrl + 'games')
  }
}
