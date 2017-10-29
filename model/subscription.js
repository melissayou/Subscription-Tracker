import tracker from './tracker';
import FREQUENCY from './frequency';

const subscription = {
  create(title, description, value, frequency) {
    return {
      id: tracker.getProvisionalId(),
      title: title || 'Click edit to add a title',
      description: description || '',
      value: isNaN(value) ? 0 : value,
      frequency:
        FREQUENCY.isValid(frequency) ? frequency : FREQUENCY.MONTHLY,
    };
  },
};

export default subscription;
