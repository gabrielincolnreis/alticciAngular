import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AlticciService } from './alticci.service';

describe('AlticciService', () => {
  let service: AlticciService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AlticciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
