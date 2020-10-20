import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAnimalDidMount } from '../actions/animal';
import styles from './AnimalDetails.css';

class AnimalDetails extends Component {
  render() {
    return(
      <div>
        <div class="card">
          <img id = "an" class="card-img-top" src={this.props.animal.img} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">{this.props.animal.name}</h5>
            <p class="card-text">{this.props.animal.description}</p>
            <a href="http://localhost:3000/" class="btn btn-primary">Ver otros animales</a>
          </div>
        </div>
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