import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'icon',
  templateUrl: 'icons.component.html',
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Icon {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.matIconRegistry.addSvgIcon(
      'home',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/iconHome.svg')
    );
  }
}
