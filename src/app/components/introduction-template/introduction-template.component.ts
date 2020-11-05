import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-introduction-template',
  templateUrl: './introduction-template.component.html',
  styleUrls: ['./introduction-template.component.css']
})
export class IntroductionTemplateComponent implements OnInit {

  constructor() { }

  @Input()
  title: string;

  @Input()
  buttonText: string;

  @Input()
  routerLink: string;

  ngOnInit(): void {
  }

}
