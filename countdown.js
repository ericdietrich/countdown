export default class CountDown  {
  constructor (futureDate) {
    this.futureDate = futureDate
  }
  get _futureDate () {
    return new Date(this.futureDate)
  }
  get _actualDate () {
    return new Date();
  }
  get _timeStampDiff () {
    return this._futureDate.getTime() - this._actualDate.getTime();
  }
  get days () {
    return Math.floor (this._timeStampDiff / (24 * 60 * 60 * 1000));
  }
  get hours () {
    return Math.floor (this._timeStampDiff / ( 60 * 60 * 1000));
  }
  get minutes () {
    return Math.floor (this._timeStampDiff / ( 60 * 1000));
  }
  get seconds () {
    return Math.floor (this._timeStampDiff / ( 1000));
  }
  get total () {
    let days = this.days;
    let hours = this.hours % 24;
    let minutes = this.minutes % 60
    let seconds = this.seconds % 60;
    return {
      days,
      hours,
      minutes,
      seconds
    }
  }
} 