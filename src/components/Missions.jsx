import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import './Missions.css';

class Missions extends React.Component {
  render() {
    return (
      <div className="missions-container" data-testid="missions">
        <Title headline="Missões" />
        <section className="missions">
          {missions.map((item, index) => (
            <MissionCard
              key={ index }
              name={ item.name }
              year={ item.year }
              country={ item.country }
              destination={ item.destination }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Missions;
