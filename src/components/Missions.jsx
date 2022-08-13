import { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

const React = require('react');

export default class Missions extends Component {
  render() {
    return (
      <div
        data-testid="missions"
        className="missions"
      >
        <Title headline="Missões" />

        <div className="mission_card_container">
          { missions.map((mission) => (
            <MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />
          ))}
        </div>
      </div>
    );
  }
}
