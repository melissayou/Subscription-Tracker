import _ from 'lodash';

const tracker = {
  subscriptions: [],

  add(newSub) {
    if (newSub) {
      this.subscriptions.push(newSub);
      localStorage.setItem('subscriptions', JSON.stringify(this.subscriptions));
    } else {
      console.log('Error adding new subscription: ', newSub);
    }
  },

  get(id) {
    return _.find(this.subscriptions, sub => sub.id == id);
  },

  remove(id) {
    _.remove(this.subscriptions, sub => sub.id == id);
  },

  getProvisionalId() {
    return this.subscriptions.length + 1;
  },

  load() {
    this.subscriptions = JSON.parse(localStorage.getItem('subscriptions'));
    console.log(this.subscriptions);
  },
};

export default tracker;
