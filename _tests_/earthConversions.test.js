import Earth from "./../src/js/earthConversions.js";


describe('Earth', () => {
  let earth;
  beforeEach(() => {
  earth = new Earth(1, 365, 8760);
});
  test('should create a new object Earth with properties', () => {
      expect(earth.year).toEqual(1);
      expect(earth.days).toEqual(365);
      expect(earth.ours).toEqual(8760);
    });
});