import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    BodyComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  sideBarOpen: Boolean = true;
  currentYear = new Date().getFullYear();

  constructor() {}

  openSidebar(): void {
    this.sideBarOpen = true;
  }

  closeSidebar(): void {
    this.sideBarOpen = false;
  }

  /** HostListener to update the flag on window resize */
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.closeSidebar();
  }

  isLargeScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 768) {
        return true;
    } else {
        return false;
    }
  }
}
