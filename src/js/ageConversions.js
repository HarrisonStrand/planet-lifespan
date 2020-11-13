export default class Age {
  constructor(years, days, hours) {
    this.years = years;
    this.days = days;
    this.hours = hours;
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

  // mercuryConv() {
  //   return (this.years *= .24), (this.days *= .24), (this.hours *= .24);
  // }

}