import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitchService {
  private isDarkThemeSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isDarkTheme$: Observable<boolean> = this.isDarkThemeSubject.asObservable();

  constructor() { }

  setTheme(isDark: boolean): void {
    this.isDarkThemeSubject.next(isDark);
  }

  getTheme(): boolean {
    return this.isDarkThemeSubject.getValue();
  }
}
