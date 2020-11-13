import Age from "../src/js/ageConversions.js";


describe('Age', () => {
  let age;
  beforeEach(() => {
  age = new Age(65, 23725, 569400);
});
  test('should create a new object Earth with properties', () => {
      expect(age.years).toEqual(65);
      expect(age.days).toEqual(23725);
      expect(age.hours).toEqual(569400);
    });

    test('should convert earth properties to mercury with method', () => {
      expect(age.mercuryConv()).toEqual((15.6, 5694, 136656));
    });
});