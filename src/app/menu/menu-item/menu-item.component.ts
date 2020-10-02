import { Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  @Input() public menuFor: TemplateRef<MenuComponent>;

  @ViewChild('viewContainerRef', { read: ViewContainerRef }) public viewContainerRef: ViewContainerRef;

  constructor() {}

  public onClick(): void {
    this.addTemplateToContainer(this.menuFor);
  }

  private addTemplateToContainer(template: TemplateRef<any>): void {
    this.viewContainerRef.createEmbeddedView(template);
  }

}
