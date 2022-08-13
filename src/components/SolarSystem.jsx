import { Component } from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

const React = require('react');

export default class SolarSystem extends Component {
  render() {
    return (
      <div
        data-testid="solar-system"
        className="solar_system"
      >
        <Title headline="Planetas" />
        <div className="planets">
          { Planets.map((planet) => (<PlanetCard
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />))}
        </div>
      </div>
    );
  }
}
