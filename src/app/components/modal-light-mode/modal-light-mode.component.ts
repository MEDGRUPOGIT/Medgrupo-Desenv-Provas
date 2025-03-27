import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-light-mode',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-light-mode.component.html',
  styleUrls: ['./modal-light-mode.component.scss']
})
export class ModalLightModeComponent {
  @Input() modalIsOpen!: boolean;
  @Output() isOpenEmit: EventEmitter<boolean> = new EventEmitter<boolean>();

  closeModal() {
    this.modalIsOpen = false;
  }

  emitirEvento() {
    this.modalIsOpen = false
    this.isOpenEmit.emit(this.modalIsOpen)
  }
}
