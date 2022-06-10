import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer){
    this.matIconRegistry.addSvgIcon(
      "heart",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/heart.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "decline",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/decline.svg")
    );
  }
  title = 'tinder';
}
