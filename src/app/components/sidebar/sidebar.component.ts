import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import DataObject from '../../../data/home.json'
import { SidebarNavigation } from '../../../models/SidebarNavigation';
import { SidebarUser } from '../../../models/SidebarUser';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { HttpClientModule } from '@angular/common/http';
// import { Icon } from '../icons/icons.component';
// import home from '../../../assets/icons/iconHome.svg';
// src\assets\icons\iconHome.svg

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule,
    HttpClientModule
    ,InlineSVGModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  user = signal<SidebarUser>(DataObject.user);
  navigation = signal<Array<SidebarNavigation>>(DataObject.navigation); //TODO: Fazer o serviço para o JSON

}

