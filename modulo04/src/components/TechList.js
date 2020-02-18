import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {
  state = {
    newTech: '',
    techs:  [
      'NodeJS',
      'ReactJS',
      'ReactNative'
    ],
  }

  handleInputChange = e => {
    this.setState({ newTech: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    });
  }

  handleDelete = tech => {
    console.log(tech)

    this.setState({
      techs: this.state.techs.filter(t => t !== tech),
    })
  }
  render() {
    return (
    <form>
      <ul>
        { this.state.techs.map(tech => (
          <TechItem key={tech} tech={tech} onDelete={() => this.handleDelete(tech)} />
        )) }
        <TechItem />
      </ul>
      <input
        type="text"
        onChange={this.handleInputChange}
        value={this.state.newTech}
      />
      <input type="submit" onClick={this.handleSubmit} />
      </form>
    )
  }
}

export default TechList;