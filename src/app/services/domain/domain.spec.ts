import { DomainService } from "./domain.service";
import { branches, classes, specialties } from './domain.data';

describe('domainServices', () => {
  let service: DomainService;
  beforeEach(() => { service = new DomainService(); });

  it('#getBranches should return the branches', () => {
    service.branches$.subscribe(items => expect(items).toBe(branches))
  });
  it('#getClasses should return the classes', () => {
    service.classes$.subscribe(items => expect(items).toBe(classes));
  });
  it('#getSpecialties should return the specialties', () => {
    service.specialties$.subscribe(items => expect(items).toBe(specialties));
  });
});