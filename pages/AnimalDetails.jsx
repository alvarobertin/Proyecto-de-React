import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAnimalDidMount } from '../actions/animal';

class AnimalDetails extends Component {
  render() {
    return(
      <div>
        <p>{this.props.animal.name}</p>
        <p>{this.props.animal.description}</p>
      </div>
    );
  }

  componentDidMount() {
    const name = this.props.match.params.name;
    this.props.setAnimalDidMount(name);
    console.log(name);
  }
}

const mapStateToProps = (state) => {
  
  return {
    animal: state.animal.animal
  };
}

const mapStateToActions = {setAnimalDidMount} 

export default connect(mapStateToProps, mapStateToActions)(AnimalDetails);