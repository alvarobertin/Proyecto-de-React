import React, { Component } from 'react';
import { connect } from 'react-redux';

import AnimalCard from '../components/AnimalCard';
import styles from './Animals.css';

class Animals extends Component {
  render() {
    return(
      <div className='test'>
        <h1 className='titulo'>Animales</h1>
        <div className='row'>
          {
            this.props.animals.map(animal => {
              return <div className='col-sm-4' key={animal.id}>
                <AnimalCard animal={animal} />
                <br />
              </div>
            })
          }
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (state) => {
  return {
    animals: state.animal.animals
  };
}

export default connect(mapStoreToProps)(Animals);