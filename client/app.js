import React from 'react';
import { render } from 'react-dom';
import tracker from '../model/tracker';
import subscription from '../model/subscription';
import FREQUENCY from '../model/frequency';
import SubscriptionTable from './SubscriptionTable';
import SubscriptionEditPage from './SubscriptionEditPage.js'

class SubscriptionTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
      isEdit: false,
      subId: null,
      subscriptions: tracker.subscriptions,
    }
    this.add = this.add.bind(this);
    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  refresh() {
    this.setState({
      subscriptions: tracker.subscriptions,
    });
  }

  add(title, description, value, frequency) {
    tracker.add(subscription.create(title, description, value, frequency));
    this.refresh();
  }

  edit(id, title, description, value, frequency) {
    tracker.edit(id, title, description, value, frequency);
    this.refresh();
  }

  remove(id) {
    tracker.remove(id);
    this.refresh();
  }

  /**
   * When add, pass in (false, null)
   * When edit, pass in (true, id)
   */
  showModal(isEdit, subId) {
    this.setState({
      isShown: true,
      isEdit: isEdit,
      subId: subId,
    });
  }

  closeModal() {
    this.setState({
      isShown: false,
      isEdit: false,
      subId: null,
    })
  }


  render() {
    if (this.state.isShown) {
      return (
        <SubscriptionEditPage
          isShownProp={this.state.isShown}
          isEditProp={this.state.isEdit}
          subIdProp={this.state.subId}
          onEditProp={this.edit}
          onAddProp={this.add}
          onCloseProp={this.closeModal}
        />
      );
    }

    return (
      <div>
        <SubscriptionTable
          subProp={this.state.subscriptions}
          onRemoveProp={this.remove}
          onShowModalProp={this.showModal}
        />
        <button class="addButton" onClick={() => this.showModal(false, null)} >
          Add
        </button>
      </div>
    );
  }

}

tracker.load();
render(<SubscriptionTracker />, document.getElementById('reactRoot'));
