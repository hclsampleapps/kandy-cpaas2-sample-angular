import { TestBed, inject } from '@angular/core/testing';

import { KandyService } from './kandy.service';

describe('KandyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KandyService]
    });
  });

  it('should be created', inject([KandyService], (service: KandyService) => {
    expect(service).toBeTruthy();
  }));
});
