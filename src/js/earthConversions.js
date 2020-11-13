export default class Earth {
  constructor(years, days, hours) {
    this.years = 1;
    this.days = 365;
    this.hours = 8760;
  }

  mercuryConv() {
    return (this.years *= .24), (this.days *= .24), (this.hours *= .24);
  }

}