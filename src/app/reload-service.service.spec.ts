import { TestBed } from '@angular/core/testing';

import { ReloadServiceService } from './reload-service.service';

describe('ReloadServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReloadServiceService = TestBed.get(ReloadServiceService);
    expect(service).toBeTruthy();
  });
});
