export default class Age {
  constructor(years, days, hours, lifeEx) {
    this.years = years;
    this.days = days;
    this.hours = hours;
    this.lifeEx = lifeEx;
  }

  mercuryConv() {
    return (this.years *= .24), (this.days *= .24), (this.hours *= .24);
  }

  venusConv() {
    return (this.years *= .62), (this.days *= .62), (this.hours *= .62);
  }

  marsConv() {
    return (this.years *= 1.88), (this.days *= 1.88), (this.hours *= 1.88);
  }

  jupiterConv() {
    return (this.years *= 11.86), (this.days *= 11.86), (this.hours *= 11.86);
  }

  lifeExEarth() {
    return this.lifeEx - this.years;
  }

  lifeExMercury() {
    return (this.lifeEx - this.years) * .24;
  }

  lifeOverMercury() {
    return (this.years - this.lifeEx) * .24;
  }

  lifeExVenus() {
    return (this.lifeEx - this.years) * .62;
  }

  lifeOverVenus() {
    return (this.years - this.lifeEx) * .62;
  }

  lifeExMars() {
    return (this.lifeEx - this.years) * 1.88;
  }

  lifeOverMars() {
    return (this.years - this.lifeEx) * 1.88;
  }

  lifeExJupiter() {
    return Math.round((this.lifeEx - this.years) * 11.86);
  }

  // lifeOverJupiter() {
  //   return (this.years - this.lifeEx) * 11.86;
  // }
}
