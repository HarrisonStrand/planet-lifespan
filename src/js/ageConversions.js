export default class Age {
  constructor(years, days, hours) {
    this.years = years;
    this.days = days;
    this.hours = hours;
  }

  mercuryConv() {
    return (this.years *= .24), (this.days *= .24), (this.hours *= .24);
  }

}