import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideBarComponent } from "./components/aside-bar/aside-bar.component";
import { CardMainComponent } from "./components/card-main/card-main.component";
import { CardProgressComponent } from "./components/card-progress/card-progress.component";
import { ModalProductsComponent } from "./components/modal-products/modal-products.component";
import { HeaderMobileComponent } from "./components/header-mobile/header-mobile.component";
import { ModalLightModeComponent } from "./components/modal-light-mode/modal-light-mode.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsideBarComponent, CardMainComponent, CardProgressComponent, ModalProductsComponent, HeaderMobileComponent, ModalLightModeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'medgrupo-teste';
}
