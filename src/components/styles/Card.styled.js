import styled from 'styled-components';
import { down, up } from 'styled-breakpoints';

export const StyledCard = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  justify-content: center;
  width: 90%;
  max-width: 800px;
  border-radius: 20px;
  background-color: var(--white);

  ${down('md')} {
    flex-direction: column;
    overflow: hidden;
  }
`;

export const StyledFeaturedImage = styled.div`
  ${down('md')} {
    width: 100%;
    height: 200px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top left;

    ${up('md')} {
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    }
  }
`;

export const StyledCardContent = styled.div`
  padding: 30px 30px 20px;
`;

export const StyledCardDescription = styled.div`
  h1 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 30px;
    color: var(--desaturated-dark-blue);
  }
`;

export const StyledCardAction = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }

  .author-details {
    display: flex;
    flex-direction: column;
    flex-basis: 60%;

    p {
      color: var(--grayish-blue);
    }
  }
`;
