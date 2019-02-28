import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';

const CounterContainers = ({ color, number }) => {
  return (
    <div>
      <Counter color={color} value={number} />
    </div>
  );
};

const mapStateToProps = ({ counter }) => ({
  color: counter.color,
  number: counter.number,
});

export default connect(mapStateToProps)(CounterContainers);
