import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-project-sample',
  standalone: true,
  imports: [],
  templateUrl: './project-sample.component.html',
  styleUrl: './project-sample.component.scss'
})
export class ProjectSampleComponent {

  @Input() name:string = '';
  @Input() image:string = '';
  @Input() tools:string = '';
  @Input() description:string = '';
  @Input() link:string = '';
  @Input() github:string = '';
  @Input() showReverse:boolean = false;
  @Input() i:number = 0;

}
