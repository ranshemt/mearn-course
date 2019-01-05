import React, { Component } from 'react'
// import { MdEdit, MdDelete, MdSave } from "react-icons/md"
import Idea from './Idea'

class IdeasList extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      ideas: [
        {id: 3, idea: 'Tripper API'},
        {id: 7, idea: 'Cyber Crawler App'}
      ]
    }
  }
  eachIdea(idea, i) {
    return <Idea key={'idea'+i} index={i}>{idea.idea}</Idea>
  }
  render() {
    return (
      <div className="ideasList">
        { this.state.ideas.map(this.eachIdea) }
      </div>
    )
  }
}

export default IdeasList;
