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

  // mercuryConv() {
  //   return (this.years *= .24), (this.days *= .24), (this.hours *= .24);
  // }

  // mercuryConv() {
  //   return (this.years *= .24), (this.days *= .24), (this.hours *= .24);
  // }

}