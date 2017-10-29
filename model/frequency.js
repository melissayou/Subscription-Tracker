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
};

export default FREQUENCY;
