import React, { Component } from 'react';
import { MdEdit, MdDelete, MdSave } from "react-icons/md"

class Idea extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      editing: false 
    }

    this.edit = this.edit.bind(this)
    this.delete = this.delete.bind(this)
    this.save = this.save.bind(this)
    this.renderForm = this.renderForm.bind(this)
    this.renderUI = this.renderUI.bind(this)

  }

  edit(props) {
    this.setState({
      editing: true
    })
  }

  delete(props) {
    alert('delete it!')
  }

  save(props) {
    alert(this.newIdea.value)
  }

  renderForm(props) {
    return (
      <div>
        <form >
          <textarea ref={input => this.newIdea = input} cols="30" rows="10" />
          <span>
            <button onClick={this.save}><MdSave /></button>
          </span>
        </form>
      </div>
    )
  }

  renderUI(props) {
    return (
      <div>
        <p>{this.props.children}</p>
        <span>
          <button onClick={this.edit}><MdEdit /></button>
          <button onClick={this.delete}><MdDelete /></button>
        </span>
      </div>
    )
  }

  render() {
    return this.state.editing ? this.renderForm() : this.renderUI()
  }
}

export default Idea
