import React, { Component } from 'react';
import TopicList from './TopicList';
import TopicForm from './TopicForm';
import {
  fetchAllTopics,
  postTopic,
  deleteTopicWithId
} from '../service/serviceClient';

export default class TopicBox extends Component {
  state = { topics: [] };

  componentDidMount() {
    this.fetchTopicList();
  }

  fetchTopicList = () => {
    fetchAllTopics().then(topics => {
      this.setState({ topics });
    });
  };

  addTopic = topic => {
    postTopic(topic).then(vastaus => {
      this.fetchTopicList();
    });
  };
  deleteTopic = id => {
    deleteTopicWithId(id).then(vastaus => {
      if (vastaus.status !== 200) {
        alert('Virhe pyynnössä, status: ' + vastaus.status);
      }
      this.fetchTopicList();
    });
  };
  render() {
    return (
      <div>
        <TopicForm addCallback={this.addTopic} />
        <TopicList
          deleteCallback={this.deleteTopic}
          topics={this.state.topics}
        />
      </div>
    );
  }
}
