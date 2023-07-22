import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Game} from "../../models/game"

@Injectable()
export class GameService {

  private proxyAuthorizeCors = 'https://cors-anywhere.herokuapp.com/';
  private gameApiUrl = `${this.proxyAuthorizeCors}https://www.freetogame.com/api/`;

  constructor(private http: HttpClient) {
  }

  getGames() {
    return this.http.get<Game[]>(this.gameApiUrl + 'games')
  }
}
