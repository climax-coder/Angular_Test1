import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
  theme = ''

  constructor(private themeService: ThemeService) { 
    this.theme = this.themeService.current;
  }

  ngOnInit(): void {
  }

  public switchTheme(): void {
    if (this.themeService.current === 'light') {
        this.themeService.current = 'dark';
    } else {
        this.themeService.current = 'light';
    }
    this.theme = this.themeService.current;
  }
}
