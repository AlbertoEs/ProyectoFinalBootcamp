import { TestBed } from '@angular/core/testing';

import { LanguageCoockieService } from './language-cookie.service';

describe('LanguageCoockieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LanguageCoockieService = TestBed.get(LanguageCoockieService);
    expect(service).toBeTruthy();
  });
});
