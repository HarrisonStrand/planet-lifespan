import Age from "../src/js/ageConversions.js";

describe('Age', () => {
  let age;
  let age2;
  beforeEach(() => {
  age = new Age(65, 23725, 569400, 100);
  age2 = new Age(102, 37230, 893520, 100);
  afterEach(() => {
  age = new Age();
  age2 = new Age();
  })
});
  test('should create a new object Age with properties', () => {
      expect(age.years).toEqual(65);
      expect(age.days).toEqual(23725);
      expect(age.hours).toEqual(569400);
    });

    test('should convert earth properties to mercury with method', () => {
      expect(age.mercuryConv()).toEqual((15.6, 5694, 136656));
    });

    test('should convert earth properties to venus with method', () => {
      expect(age.venusConv()).toEqual((40.3, 14709.5, 353028));
    });

    test('should convert earth properties to mars with method', () => {
      expect(age.marsConv()).toEqual((122.2, 44603, 1070472));
    });

    test('should convert earth properties to jupiter with method', () => {
      expect(age.jupiterConv()).toEqual((770.9, 281378.5, 6753084));
    });

    test('should return the number of expected years on Earth with method', () => {
      expect(age.lifeExEarth()).toEqual(35);
    });

    test('should return the number of expected years on Mercury with method', () => {
      expect(age.lifeExMercury()).toEqual(8);
    });

    test('should return the number over expected years on Mercury with method', () => {
      expect(age2.lifeOverMercury()).toEqual(.48);
    });

    test('should return the number of expected years on Venus with method', () => {
      expect(age.lifeExVenus()).toEqual(22);
    });

    test('should return the number over expected years on Venus with method', () => {
      expect(age2.lifeOverVenus()).toEqual(1.24);
    });

    test('should return the number of expected years on Mars with method', () => {
      expect(age.lifeExMars()).toEqual(66);
    });

    test('should return the number over expected years on Mars with method', () => {
      expect(age2.lifeOverMars()).toEqual(3.76);
    });

    test('should return the number of expected years on Jupiter with method', () => {
      expect(age.lifeExJupiter()).toEqual(415);
    });

    test('should return the number over expected years on Jupiter with method', () => {
      expect(age2.lifeOverJupiter()).toEqual(23.72);
    });

    test('should subtract 10 years of expected years of life with method', () => {
      expect(age.smokingEx()).toEqual(90);
    });
});