import React, { Component } from 'react';

export default class Topic extends Component {
  deleteMe = () => {
    this.props.deleteCallback(this.props.topic.id);
  };
  render() {
    const {
      id,
      title,
      timetomaster,
      source,
      startlearningdate,
      inprogress,
      description
    } = this.props.topic;
    return (
      <div className='Quote'>
        <span className='quoteid'>id:{id}</span>
        <p className='title'>title: {title}</p>
        <p className='description'>title: {description}</p>
        <p className='timetomaster'>timetomaster: {timetomaster}</p>
        <p className='source'>source: {source}</p>
        <p className='startlearningdate'>
          startlearningdate: {startlearningdate}
        </p>
        <p className='inprogress'>inprogress: {inprogress}</p>

        <p>
          <button type='button' onClick={this.deleteMe}>
            Delete
          </button>
        </p>
      </div>
    );
  }
}
