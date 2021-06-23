import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  armiesForm: FormGroup;

  constructor(public appService: AppService) {
    this.armiesForm = new FormGroup({
      soldiers1: new FormControl('', [Validators.required]),
      soldiers2: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {

  }

  onBattle() {
    if (this.armiesForm.invalid) {
      return;
    }
    this.appService.battle(this.armiesForm.value.soldiers1, this.armiesForm.value.soldiers2);
  }
}
