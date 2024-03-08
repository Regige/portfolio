import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PathService {

    private currentPathSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
    currentPath$: Observable<string> = this.currentPathSubject.asObservable();

  setCurrentPath(path: string) {
    this.currentPathSubject.next(path);
  }

  getCurrentPath(): string {
    return this.currentPathSubject.value;
  }
}
