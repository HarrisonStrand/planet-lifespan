import Age from "../src/js/ageConversions.js";


describe('Age', () => {
  let age;
  beforeEach(() => {
  age = new Age(65, 23725, 569400, 100);
  afterEach(() => {
  age = new Age();
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
      expect(age.lifeExMercury()).toEqual(8.4);
    });

    test('should return the number over expected years on Mercury with method', () => {
      age = new Age(102, 37230, 893520, 100);
      expect(age.lifeOverMercury()).toEqual(.48);
    });

    test('should return the number of expected years on Venus with method', () => {
      expect(age.lifeExVenus()).toEqual(21.7);
    });

    test('should return the number over expected years on Venus with method', () => {
      age = new Age(102, 37230, 893520, 100);
      expect(age.lifeOverVenus()).toEqual(1.24);
    });

    test('should return the number of expected years on Mars with method', () => {
      expect(age.lifeExMars()).toEqual(65.8);
    });

    test('should return the number over expected years on Mars with method', () => {
      age = new Age(102, 37230, 893520, 100);
      expect(age.lifeOverMars()).toEqual(3.7);
    });

    // test('should return the number of expected years on Jupiter with method', () => {
    //   expect(age.lifeExJupiter()).toEqual();
    // });

    // test('should return the number over expected years on Jupiter with method', () => {
    //   age = new Age(102, 37230, 893520, 100);
    //   expect(age.lifeOverJupiter()).toEqual();
    // });
});