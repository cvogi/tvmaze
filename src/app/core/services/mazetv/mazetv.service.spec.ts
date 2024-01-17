import { TestBed } from '@angular/core/testing';

import { MazetvService } from './mazetv.service';

describe('MazetvService', () => {
  let service: MazetvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MazetvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
