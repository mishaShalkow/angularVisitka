import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core'
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-forms-buy',
  templateUrl: './forms-buy.component.html',
  styleUrls: ['./forms-buy.component.scss'],
})
export class FormsBuyComponent implements OnInit {
  firstName: string = ''
  positionName: string = ''
  positionDelivery: string = ''
  numberDelivery: string = ''
  wayDelivery: string = ''
  submit(form: NgForm) {
    console.log(form)
  }

  onSubmit(form: NgForm) {
    console.log(form)
  }

  buyOrderPosition = 'Оформить заказ'
  @Output() close = new EventEmitter<void>()
  constructor() {}

  ngOnInit(): void {}
}
