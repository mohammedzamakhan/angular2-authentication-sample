import {View, Component} from 'angular2/angular2';
import {Home} from '../home/home';
import { Router, RouterOutlet } from 'angular2/router';
import { LoggedInOutlet } from './LoggedInOutlet';

@Component({
  selector: 'auth-app'
})
@View({
  templateUrl: 'app/app.html',
  directives: [LoggedInOutlet, RouterOutlet]
})
export class App {
  constructor(router: Router) {
    router
      .config('/home', Home, 'home')
      .then((_) => router.navigate('/home'))
  }
}
