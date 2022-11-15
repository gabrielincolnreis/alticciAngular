import { Component, OnInit } from '@angular/core';
import { AlticciService } from 'src/core/service/alticci.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-alticci';
  result: number = 0;

  constructor(private alticciService: AlticciService) {}

  enter(value: any) {
    this.alticciService.getAlticciIndex(value).subscribe((response) => {
      this.result = response;
    });
  }
}
