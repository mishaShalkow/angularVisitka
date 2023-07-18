import {Component, OnInit, Inject} from '@angular/core'
import {FormControl, FormGroup} from '@angular/forms'
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
})
export class DialogBoxComponent implements OnInit {
  myForm: FormGroup = new FormGroup({
    fullName: new FormControl(''),
    awayDelivery: new FormControl(''),
    numberCustomer: new FormControl(''),
  })

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onSubmit() {
    this.data = {
      fullName: this.myForm.value.fullName,
      awayDelivery: this.myForm.value.awayDelivery,
      numberCustomer: this.myForm.value.numberCustomer,
    }
    this.dialogRef.close(this.data)
  }

  onNoClick(): void {
    this.dialogRef.close(null)
  }

  ngOnInit(): void {}
}
