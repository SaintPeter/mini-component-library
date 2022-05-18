import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    bottomBorder: 1,
    padding: 4
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    bottomBorder: 2,
    padding: 4
  }
};

const IconInput = ({
                     label,
                     icon,
                     width = 250,
                     size,
                     placeholder,
                   }) => {
  const styles = SIZES[size];

  if(!styles) {
    throw Error(`Invalid Size Selected: ${size}`);
  }

  return (
    <Wrapper style={{'--width': width + 'px'}}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <InputIcon id={icon} size={styles.iconSize} />
      <NativeInput type="text" placeholder={placeholder}
      style={{
        '--border-thickness': styles.bottomBorder + 'px',
        '--padding-left': styles.iconSize * 1.5 + 'px',
        '--font-size': styles.fontSize + 'px',
        '--padding': styles.padding + 'px',
      }}/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: var(--width);
`;

// noinspection CssReplaceWithShorthandSafely
const NativeInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: var(--border-thickness) solid black; 
  font-size: var(--font-size);
  padding: var(--padding);
  padding-left: var(--padding-left);
  font-weight: 700;
  color: ${COLORS.gray700};
  
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
  
  &:focus {
    outline-offset: 4px;
  }
  
  &:hover {
    color: black;
  }
`;

const InputIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 4px;
  margin: auto;
`;


export default IconInput;
