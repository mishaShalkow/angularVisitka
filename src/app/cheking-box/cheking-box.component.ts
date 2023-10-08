import {Component, Inject, OnInit} from '@angular/core'
import {FormControl, FormGroup} from '@angular/forms'
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import {PersonalBoxComponent} from '../personal-box/personal-box.component'

@Component({
  selector: 'app-cheking-box',
  templateUrl: './cheking-box.component.html',
  styleUrls: ['./cheking-box.component.scss'],
})
export class ChekingBoxComponent implements OnInit {
  password: number = 12345
  myForm: FormGroup = new FormGroup({
    password: new FormControl(''),
  })
  constructor(
    public dialogRef: MatDialogRef<ChekingBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  url = PersonalBoxComponent
  ngOnInit(): void {}

  onSubmit() {
    this.data = {
      password: this.myForm.value.password,
    }

    if (this.data.password != this.password) {
      alert('ВВеден неверный пароль')
    } else {
      this.dialogRef.close()
    }
  }
  onNoClick(): void {
    this.dialogRef.close(null)
  }
}
