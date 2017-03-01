import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { fetchTopics } from '../services/topicService';
import { TopicCard } from '../components';


export default class Topics extends Component {

constructor(props) {
  super(props);
  this.state = {
    isLoading: false,
    topics: []
  };
  this.getTopics= this.getTopics.bind(this);
} 
componentDidMount() {
  this.getTopics();
}

getTopics() {
  var dataTopics = [];
  var tempTopics = fetchTopics();
  tempTopics
  .then(data => {
    dataTopics = Array.from(data);
    if (dataTopics.length > 0){
      this.setState({
        topics: dataTopics
      });
    }
  })
  .catch(error => {
    console.log(error);
  })
}

onTouchTap(e) {
  console.log("button town");
}

  render() {
    const { className, ...props } = this.props;
    const topicCards =  this.state.topics.map((topic) =>
        <TopicCard 
        onTouchTap={() => this.onTouchTap()} 
        key={topic._id}
        {...topic}/>
        )

    return (
      <div className={classnames('Topic', className)} {...props}>
        { topicCards }
      </div>
    );
  }

}
