import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {Planets.map((item, index) => (
          <PlanetCard
            key={ index }
            planetName={ item.name }
            planetImage={ item.image }
          />))}
      </div>
    );
  }
}

export default SolarSystem;
