import {
  StyledCard,
  StyledFeaturedImage,
  StyledCardContent,
  StyledCardDescription,
  StyledCardAction
} from './styles/Card.styled';
import ShareTooltip from './ShareTooltip';

const Card = () => {
  return (
    <StyledCard>
      <StyledFeaturedImage>
        <img src='./images/drawers.jpg' />
      </StyledFeaturedImage>
      <StyledCardContent>
        <StyledCardDescription>
          <h1>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
        </StyledCardDescription>

        <StyledCardAction>
          <img src='./images/avatar-michelle.jpg' />
          <div className='author-details'>
            <h3>Michelle Appleton</h3>
            <p>28 Jun 2020</p>
          </div>
          <ShareTooltip />
        </StyledCardAction>
      </StyledCardContent>
    </StyledCard>
  );
};

export default Card;
