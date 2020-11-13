import Earth from "./../src/js/earthConversions.js";


describe('Earth', () => {
  let earth;
  beforeEach(() => {
  earth = new Earth(1, 365, 8760);
});
  test('should create a new object Earth with properties', () => {
      expect(earth.years).toEqual(1);
      expect(earth.days).toEqual(365);
      expect(earth.hours).toEqual(8760);
    });

    test('should convert earth properties to mercury with method', () => {
      expect(earth.mercuryConv()).toEqual(24);
      // expect(earth.mercuryConv).toEqual(87.6);
      // expect(earth.mercuryConv).toEqual(2102.4);
    });
});