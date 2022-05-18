import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

// noinspection JSUnusedLocalSymbols
const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <SelectDisplay>
        {displayedValue}
      </SelectDisplay>
      <OffsetIcon id='chevron-down' size={24}/>
      <SelectHidden value={value} onChange={onChange}>
        {children}
      </SelectHidden>
    </SelectWrapper>
  );
};


const SelectWrapper = styled.div`
  position: relative;
  width: fit-content;
  border: none;
  border-radius: 8px;
  color: ${COLORS.gray700};

  &:hover {
    color: black;
  }
  
  // Retain system default focus highlight/color
  // noinspection CssOverwrittenProperties
  &:focus-within {
    outline: 5px auto Highlight;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const SelectHidden = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 14px;
  color: inherit;
  background-color: inherit;
  padding: 4px;
`;

// noinspection CssReplaceWithShorthandSafely
const SelectDisplay = styled.div`
  border: none;
  border-radius: 8px;
  padding: 12px;
  padding-right: 52px;
 
  width: fit-content;
  font-size: 16px;
  color: inherit;
  background-color: ${COLORS.transparentGray15};
`;


const OffsetIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 18px;
  margin: auto;
`;

export default Select;
