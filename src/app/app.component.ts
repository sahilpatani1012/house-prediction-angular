import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() { }

  public postcode: string = "";
  public rooms: string = "";
  public mapurl: string = "";


  generateMap() {
    if (this.postcode == "" || this.rooms == "") {
      alert("Please enter the postcode and number of rooms");
      return;
    }
    const encodedPostcode = encodeURIComponent(this.postcode);
    this.mapurl = `http://localhost:8000/api/map?postcode=${encodedPostcode}&rooms=${this.rooms}`;
    window.location.href = this.mapurl;
  }
}
