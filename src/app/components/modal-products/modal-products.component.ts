import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-products.component.html',
  styleUrl: './modal-products.component.scss',
})
export class ModalProductsComponent {
  @Input() modalIsOpen!: boolean;
  @Output() isOpenEmit: EventEmitter<boolean> = new EventEmitter<boolean>();

  products = [
    { name: '2022 MEDCURSO', image: '../../../assets/img/modal-products/logo-medgrupo.png' },
    { name: '2022 M.E.D', image: '../../../assets/img/modal-products/logo-med.png' },
    { name: '2022 RACIPE', image: '../../../assets/img/modal-products/logo-racipe.png' },
    { name: '2021 CPMED', image: '../../../assets/img/modal-products/logo-cpmed.png' }
  ];

  closeModal() {
    this.modalIsOpen = false;
  }

  emitirEvento() {
    this.modalIsOpen = false
    this.isOpenEmit.emit(this.modalIsOpen)
  }
}

