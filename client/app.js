import React from 'react';
import { render } from 'react-dom';
import tracker from '../model/tracker';
import subscription from '../model/subscription';
import FREQUENCY from '../model/frequency';

class SubscriptionTracker extends React.Component {
  render() {
    // const sub = subscription.create('a', 'd', 12, FREQUENCY.MONTHLY);
    // tracker.add(sub);
    return (<div>{tracker.subscriptions.length}</div>);
  }
}

tracker.load();
render(<SubscriptionTracker />, document.getElementById('reactRoot'));
