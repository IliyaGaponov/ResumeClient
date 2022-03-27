import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactLeadService } from 'src/app/services/contact-lead.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm = new FormGroup({
    "firstName": new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    "lastName": new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    "phone": new FormControl("", [Validators.required, Validators.pattern("^[0-9\-\+]{9,15}$")]),
    "email": new FormControl("", [Validators.required, Validators.email])
});
  constructor(private leadService: ContactLeadService) { }

  onSubmit() {
    this.leadService.createLead(this.contactForm.value)
      .subscribe(resp => console.log(resp));
  }
}
