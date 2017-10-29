import React from 'react';
import PropTypes from 'prop-types';
import FREQUENCY from '../model/frequency';
import tracker from '../model/tracker';

class SubscriptionEditPage extends React.Component {
  constructor(props) {
    super(props);
    this.initializeState(props);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.updateFrequency = this.updateFrequency.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  initializeState(props) {
    if (props.isShownProp && props.isEditProp) {
      const sub = tracker.get(props.subIdProp)
      this.state = {
        title: sub.title,
        description: sub.description,
        value: sub.value,
        frequency: sub.frequency,
      }
    } else {
      this.state = {
        title: '',
        description:'',
        value: 0.00,
        frequency: FREQUENCY.MONTHLY,
      }
    }
  }

  updateTitle(event) {
    this.setState({title: event.target.value});
  }

  updateDescription(event) {
    this.setState({description: event.target.value});
  }

  updateValue(event) {
    this.setState({value: event.target.value});
  }

  updateFrequency(event) {
    this.setState({frequency: event.target.value});
  }

  onSave() {
    const title = this.state.title;
    const desc = this.state.description;
    const value = this.state.value;
    const freq = this.state.frequency;
    if (this.props.isEditProp) {
      this.props.onEditProp(this.props.subIdProp, title, desc, value, freq);
    } else {
      this.props.onAddProp(title, desc, value, freq);
    }
    this.props.onCloseProp();
  }

  componentWillReceiveProps(nextProps) {
    this.initializeState(nextProps);
  }

  render () {
    if (!this.props.isShownProp) {
      return null;
    }

    return (
      <div>
        <div>
          Title:
          <input
            type="text"
            value={this.state.title}
            onChange={this.updateTitle} />
          <br/>
          Description:
          <input
            type="text"
            value={this.state.description}
            onChange={this.updateDescription} />
          <br/>
          Value:
          <input
            type="text"
            value={this.state.value}
            onChange={this.updateValue} />
          <br/>
          Frequency:
          <select value={this.state.frequency} onChange={this.updateFrequency}>
            <option value={FREQUENCY.DAILY}>DAILY</option>
            <option value={FREQUENCY.WEEKLY}>WEEKLY</option>
            <option value={FREQUENCY.MONTHLY}>MONTHLY</option>
            <option value={FREQUENCY.QUARTERLY}>QUARTERLY</option>
            <option value={FREQUENCY.YEARLY}>YEARLY</option>
          </select>
          <br/>
        </div>
        <button onClick={this.onSave}>
          {this.props.isEditProp ? 'Save' : 'Create'}
        </button>
        <button onClick={this.props.onCloseProp}>
          Cancel
        </button>
      </div>
    );
  }
}

export default SubscriptionEditPage;
