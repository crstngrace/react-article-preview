import styled from 'styled-components';
import { down, up } from 'styled-breakpoints';
import { SlideUp } from './Animation.styled';

export const StyledTooltip = styled.div`
  display: flex;
  margin-left: auto;
  color: var(--white);

  ${up('md')} {
    position: relative;
  }
`;

export const StyledTooltipContent = styled.div`
  background-color: var(--dark-grayish-blue);

  ${down('md')} {
    position: absolute;
    left: 0;
    bottom: -80px;
    display: flex;
    align-items: center;
    grid-gap: 12px;
    width: 100%;
    height: 80px;
    padding: 30px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    letter-spacing: 4px;
    visibility: hidden;
    transition: all 0.3s;
  }

  ${up('md')} {
    position: absolute;
    left: -90px;
    bottom: 50px;
    display: none;
    justify-content: center;
    gap: 10px;
    padding: 10px 35px;
    border-radius: 10px;
    animation: ${SlideUp} 0.2s;
  }

  h3 {
    margin-right: 10px;
    font-weight: normal;
    color: var(--grayish-blue);
  }

  svg {
    font-size: 20px;
  }

  &::after {
    ${up('md')} {
      content: '';
      position: absolute;
      top: 100%;
      border-width: 10px;
      border-style: solid;
      border-color: var(--dark-grayish-blue) transparent transparent transparent;
    }
  }
`;

export const StyledTooltipButton = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  font-size: 14px;
  color: var(--desaturated-dark-blue);
  background-color: var(--light-grayish-blue);
  border-radius: 50%;
  z-index: 3;

  &:hover {
    color: white;
    background-color: var(--desaturated-dark-blue);
  }

  &:hover + ${StyledTooltipContent} {
    ${down('md')} {
      bottom: 0;
      visibility: visible;
    }

    ${up('md')} {
      display: flex;
    }
  }
`;
