/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
// import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
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
  return (
    <ProgressContainer
      style={SIZES[size]}
      role="progressbar"
      aria-valuenow={value}
    >
      <ProgressIndicator value={value} />
    </ProgressContainer>
  );
};

const ProgressContainer = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;
`;

const ProgressIndicator = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  transition: 0.5s;
  width: ${p => p.value + '%'}; 
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  /* This is not correct, but not sure how to make it gradual */
  border-bottom-right-radius: ${p => p.value < 100 ? 0 : '4px' };
  border-top-right-radius: ${p => p.value < 100 ? 0 : '4px' };
`;

export default ProgressBar;
