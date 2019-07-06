import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  city1 = 'Amsterdam';
  
  citiesList = [
    'London',
    'amsterdam',
    'bangalore',
    'delhi'
  ]

  forecast1 = {
    wind: 12,
    date: '12 June',
    time: '15:00',
    iconUrl: 'https://openweathermap.org/img/w/02d.png',
    temperature: 20,
    weather: 'broken cloud'
  }

  forecast2 = {
    wind: 12,
    date: '12 June',
    time: '18:00',
    iconUrl: 'https://openweathermap.org/img/w/02d.png',
    temperature: 17,
    weather: 'broken cloud'
  }
}
