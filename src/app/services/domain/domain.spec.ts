import { DomainService } from "./domain.service";
import { branches, classes, specialties } from './domain.data';

describe('domainServices', () => {
    let service: DomainService;
    beforeEach(() => { service = new DomainService(); });
  
    it('#getBranches should return the branches', () => {
      expect(service.getBranches()).toBe(branches);
    });
    it('#getClasses should return the classes', () => {
      expect(service.getClasses()).toBe(classes);
    });
    it('#getSpecialties should return the specialties', () => {
      expect(service.getSpecialties()).toBe(specialties);
    });
  });