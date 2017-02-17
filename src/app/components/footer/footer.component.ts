import {
  Component,
  OnInit
} from '@angular/core';

console.log('`Footer` component loaded asynchronously');

@Component({
  selector: 'global-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';

  public ngOnInit() {
    console.log('init footer');
  }
}
