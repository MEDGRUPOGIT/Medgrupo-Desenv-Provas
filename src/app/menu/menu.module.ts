import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

@NgModule({
  declarations: [MenuComponent, MenuItemComponent],
  exports: [MenuComponent, MenuItemComponent],
  imports: [
    CommonModule
  ]
})
export class MenuModule { }
