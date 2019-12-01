import React, { Component } from 'react';
import Topic from './Topic';

export default class TopicList extends Component {
  render() {
    const topicItems = this.props.topics
      //   .sort(function(q1, q2) {
      //     const author1last = q1.author.split(' ').slice(-1)[0];
      //     const author2last = q2.author.split(' ').slice(-1)[0];
      //     if (author1last === author2last) return 0;
      //     if (author1last > author2last) return 1;
      //     return -1;
      //   })
      .map(topic => {
        return (
          <Topic
            deleteCallback={this.props.deleteCallback}
            topic={topic}
            key={topic.id}
          />
        );
      });
    return (
      <div className='QuoteList AppComponent'>
        <h2>QuoteList</h2>
        {topicItems}
      </div>
    );
  }
}
