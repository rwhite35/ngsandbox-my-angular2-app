import {FormGroup, FormControl, Validators, ValidationErrors} from '@angular/forms';
import {OnInit} from '@angular/core';

export class ModelFormComponent implements OnInit {

    public goodForm: FormGroup;

    ngOnInit() {
        this.goodForm = new FormGroup({

            stepone: new FormGroup({
                title: new FormControl('', [
                    Validators.required,
                    Validators.maxLength( 3),
                    Validators.maxLength( 24)
                ]),
                numOfLevels: new FormControl('', Validators.maxLength)
            }),
            /** add additional input groups for goodform here */
        });
    }
}
