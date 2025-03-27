import { Component } from '@angular/core';
import home from '../../../assets/data/home.json'
import { ModalProductsComponent } from "../modal-products/modal-products.component";
import { ModalLightModeComponent } from '../modal-light-mode/modal-light-mode.component';

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [ModalProductsComponent, ModalLightModeComponent],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss'
})
export class HeaderMobileComponent {
  user = home.user;

  modalIsOpen = false;
  modalLightModeComponent = false;


  openModal() {
    this.modalIsOpen = true;
  }

  openModalLightDarkMode(){
    this.modalLightModeComponent = true;
  }

  emitirEvento(event: boolean) {
    this.modalIsOpen = event;
  }

  emitirEventoLight(event: boolean) {
    this.modalLightModeComponent = event;
  }
}
