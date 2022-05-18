/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  large: {
    height: '24px',
    padding: '4px',
    borderRadius: '8px'
  },
  medium: {
    height: '12px',
    padding: 0,
    borderRadius: '4px'
  },
  small: {
    height: '8px',
    padding: 0,
    borderRadius: '4px'
  },

};

const ProgressBar = ({value, size}) => {
  const styles = STYLES[size];

  if(!styles) {
    throw Error(`Unrecognized Style Value: ${size}`);
  }

  return (
    <ProgressContainer
      style={styles}
      role="progressbar"
      aria-valuenow={value}
    >
      <BarWrapper>
        <Bar style={{'--width': value + '%'}} />
      </BarWrapper>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </ProgressContainer>
  );
};

const ProgressContainer = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  transition: 0.5s;
  width: var(--width);
`;

const BarWrapper = styled.div`
  height: 100%;
  border-radius: 4px;
  /* Clip the bar at the radius of the containing element */
  overflow: hidden;
`;

export default ProgressBar;
