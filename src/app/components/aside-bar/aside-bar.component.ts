import { Component } from '@angular/core';
import home from '../../../assets/data/home.json'
import { CommonModule } from '@angular/common';
import { ModalProductsComponent } from "../modal-products/modal-products.component";
import { ModalLightModeComponent } from '../modal-light-mode/modal-light-mode.component';


@Component({
  selector: 'app-aside-bar',
  standalone: true,
  imports: [CommonModule, ModalProductsComponent, ModalLightModeComponent],
  templateUrl: './aside-bar.component.html',
  styleUrl: './aside-bar.component.scss'
})
export class AsideBarComponent {
  user = home.user;
  navigation = home.navigation;

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
