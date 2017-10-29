import _ from 'lodash';
import FREQUENCY from './frequency';

const tracker = {
  subscriptions: [],

  save() {
    localStorage.setItem('subscriptions', JSON.stringify(this.subscriptions));
  },

  add(newSub) {
    if (newSub) {
      this.subscriptions.push(newSub);
      this.save();
    } else {
      console.log('Error adding new subscription: ', newSub);
    }
  },

  get(id) {
    return _.find(this.subscriptions, sub => sub.id == id);
  },

  edit(id, title, description, value, frequency) {
    const sub = this.get(id);
    if (sub) {
      sub.title = title || 'Click edit to add a title';
      sub.description = description || '';
      sub.value = isNaN(value) ? 0 : value;
      sub.frequency = FREQUENCY.isValid(frequency)
        ? frequency
        : FREQUENCY.MONTHLY;
      this.save();
    } else {
      console.log('Error editing existing subscription: ', sub);
    }
  },

  remove(id) {
    _.remove(this.subscriptions, sub => sub.id == id);
    this.save();
  },

  getProvisionalId() {
    const maxId = _.reduce(this.subscriptions, (max, sub) => {
      return max > sub.id ? max : sub.id
    }, -1);
    return maxId + 1;
  },

  getMonthlyPay() {
    return _.reduce(this.subscriptions, (sum, sub) => {
      return sum + sub.value * FREQUENCY.getMultiplier(sub.frequency);
    }, 0);
  },

  load() {
    this.subscriptions =
      JSON.parse(localStorage.getItem('subscriptions')) || [];
  },
};

export default tracker;
