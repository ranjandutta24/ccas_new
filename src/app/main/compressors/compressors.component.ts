import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compressors',
  templateUrl: './compressors.component.html',
  styleUrls: ['./compressors.component.scss'],
})
export class CompressorsComponent implements OnInit {
  activeSection: string = 'section1';
  setActiveSection(section: string): void {
    this.activeSection = section;
  }

  isActive(section: string): boolean {
    return this.activeSection === section;
  }
  constructor() {}

  ngOnInit(): void {}
}
