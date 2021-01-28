import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import GraffitiItem from './GraffitiItem';
import Button from '../../shared/components/FormElements/Button';
import './GraffitiList.css';

const GraffitiList = props => {
  if (props.items.length === 0) {
    return (
      <div className="graffiti-list center">
        <Card>
          <h2>No Graffiti found. Maybe create one?</h2>
          <Button to="/places/new">Share Graffiti</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="graffiti-list">
      {props.items.map(graffito => (
        <GraffitiItem
          key={graffito.id}
          id={graffito.id}
          image={graffito.image}
          title={graffito.title}
          description={graffito.description}
          address={graffito.address}
          creatorId={graffito.creator}
          coordinates={graffito.location}
          onDelete={props.onDeleteGraffiti}
        />
      ))}
    </ul>
  );
};

export default GraffitiList;
