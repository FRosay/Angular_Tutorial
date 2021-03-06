import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

import { Hero, Trait } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  traits: any;
  heroForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  myTraits = []
  newTrait = "<input class=\"form-control\" formControlName=\"trait";

  createForm() {
    this.heroForm = this.fb.group({
      name: [ '', Validators.required ],
      age: [ '', Validators.required ],
      traits: this.fb.array([]),
      bio: '',
   })
  }

 

  addTrait() {
    this.myTraits.push()
  }

}
