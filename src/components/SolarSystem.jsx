import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';
import './SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <section className="container-planets">
          {Planets.map((item, index) => (
            <PlanetCard
              key={ index }
              planetName={ item.name }
              planetImage={ item.image }
            />))}
        </section>
      </div>
    );
  }
}

export default SolarSystem;
