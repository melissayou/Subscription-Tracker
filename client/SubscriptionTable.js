import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
//import style from '../public/style.css';
//import Modal from './Modal.js';

class SubscriptionTable extends React.Component {
  render() {
    if (this.props.subProp.length > 0) {
      return (
         <div>{
           _.map(
             this.props.subProp,
             (sub) =>
               <TableRow
                 key={sub.id}
                 subEntryProp={sub}
                 onRemoveProp={this.props.onRemoveProp}
                 onShowModalProp={this.props.onShowModalProp}
               />,
           )
         }
        </div>
      );
    }
    return <div>No Subscriptions</div>;
  }
}


class TableRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const subId = this.props.subEntryProp.id;
    return (
      <div class= "sub-details">
        <div class = "first-row">
          <span class="text-left">{this.props.subEntryProp.title}</span>
          <span class="text-right">{'$ ' + this.props.subEntryProp.value}</span>
          <span>
            <button
              //class="text-right"
              class="EditButton"
              onClick={() => this.props.onShowModalProp(true, subId)}>
              Edit
            </button>
          </span>

        </div>
        <br/>

        <div class="second-row">
          <span class="text-left">{this.props.subEntryProp.description}</span>
          <span>
            <button
              class="text-right"
              class="DeleteButton"
              onClick={()=>this.props.onRemoveProp(subId)}>
              Delete
            </button>
          </span>
          <span class="text-right">{this.props.subEntryProp.frequency}</span>
        </div>
      </div>
    );
  }
}

SubscriptionTable.propTypes ={
  subProp: PropTypes.array.isRequired,
  onRemoveProp: PropTypes.func.isRequired,
  onShowModalProp: PropTypes.func.isRequired,
};

TableRow.propTypes ={
  subEntryProp: PropTypes.object.isRequired,
  onRemoveProp: PropTypes.func.isRequired,
  onShowModalProp: PropTypes.func.isRequired,
};

export default SubscriptionTable;
