const FREQUENCY = {
  DAILY: 'DAILY',
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY',
  QUARTERLY: 'QUARTERLY',
  YEARLY: 'YEARLY',
  isValid(f) {
    const values = [
      this.DAILY, this.WEEKLY, this.MONTHLY, this.QUARTERLY, this.YEARLY,
    ];
    return values.includes(f);
  },
  getMultiplier(f) {
    const m = {
      DAILY: 30,
      WEEKLY: 4.2,
      MONTHLY: 1,
      QUARTERLY: 1/3,
      YEARLY: 1/12,
    }
    return m[f];
  },
};

export default FREQUENCY;
