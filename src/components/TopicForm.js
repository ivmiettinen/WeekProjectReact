import React, { Component } from 'react';

//
export default class TopicForm extends Component {
  state = {
    title: '',
    description: '',
    timetomaster: '',
    timespent: '',
    source: '',
    startlearningdate: '',
    inprogress: ''
  };
  handleQuoteChange = e => {
    this.setState({ title: e.target.value });
  };
  handleNameChange = e => {
    this.setState({ description: e.target.value });
  };
  handleTimetomasterChange = e => {
    this.setState({ timetomaster: parseInt(e.target.value) });
  };
  handleTimespentChange = e => {
    this.setState({ timespent: parseInt(e.target.value) });
  };

  handleSourceChange = e => {
    this.setState({ source: e.target.value });
  };

  handleStartlearningdateChange = e => {
    this.setState({ startlearningdate: e.target.value });
  };

  handleInprogressChange = e => {
    this.setState({ inprogress: e.target.value });
  };

  handleCreateClick = e => {
    e.preventDefault();
    if (this.state.description.trim() === '') {
      window.alert('Title must contain text');
      return;
    }
    if (this.state.title.trim() === '') {
      window.alert('Description must contain text');
      return;
    }
    this.props.addCallback(this.state);
    this.setState({
      title: '',
      description: '',
      timetomaster: '',
      timespent: '',
      source: '',
      startlearningdate: '',
      inprogress: ''
    });
    // this.props.history.push('/topic');
  };
  render() {
    return (
      <div className='QuoteForm AppComponent'>
        <form>
          <p className='inputrow'>
            <label htmlFor='form_quotetext'>Title:</label>
            <textarea
              type='text'
              placeholder='title'
              id='form_quotetext'
              value={this.state.title}
              onChange={this.handleQuoteChange}
              required='required'
            />
          </p>
          <p className='inputrow'>
            <label htmlFor='form_author'>Description:</label>
            <input
              type='text'
              placeholder='description'
              id='form_author'
              autoComplete='off'
              value={this.state.description}
              onChange={this.handleNameChange}
            />
          </p>
          <p className='inputrow'>
            <label htmlFor='form_timetomaster'>Time to master:</label>
            <textarea
              type='text'
              placeholder='give a number, how many days will it take to master this topic'
              id='form_timetomaster'
              value={this.state.timetomaster}
              onChange={this.handleTimetomasterChange}
            />
          </p>
          <p className='inputrow'>
            <label htmlFor='form_timespent'>Timespent:</label>
            <textarea
              type='text'
              placeholder='give a number, how many days did it actually take to master this topic'
              id='form_timespent'
              value={this.state.timespent}
              onChange={this.handleTimespentChange}
            />
          </p>

          <p className='inputrow'>
            <label htmlFor='form_source'>Source:</label>
            <textarea
              type='text'
              placeholder='Sources'
              id='form_source'
              value={this.state.source}
              onChange={this.handleSourceChange}
            />
          </p>
          <p className='inputrow'>
            <label htmlFor='form_source'>Start learning date:</label>
            <textarea
              type='text'
              placeholder='Give a date'
              id='form_startlearningdate'
              value={this.state.startlearningdate}
              onChange={this.handleStartlearningdateChange}
            />
          </p>
          <p className='inputrow'>
            <label htmlFor='form_source'>Start learning date:</label>
            <textarea
              type='text'
              placeholder='Is it still under progress?'
              id='form_startlearningdate'
              value={this.state.inprogress}
              onChange={this.handleInprogressChange}
            />
          </p>
          {/* <p className='inputrow'>
            <label htmlFor='form_source'>
              Checkbox{' '}
              <input
                name='inprogress'
                type='checkbox'
                checked={this.state.inprogress}
                onChange={this.handleInprogressChange}
              />{' '}
            </label>
          </p> */}

          <p className='buttonp'>
            <input
              type='submit'
              value='Create'
              onClick={this.handleCreateClick}
            />
          </p>
        </form>
      </div>
    );
  }
}
