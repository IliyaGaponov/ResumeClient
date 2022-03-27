import { TestBed } from '@angular/core/testing';

import { ContactLeadService } from './contact-lead.service';

describe('ContactLeadService', () => {
  let service: ContactLeadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactLeadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
