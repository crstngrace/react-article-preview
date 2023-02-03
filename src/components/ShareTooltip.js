import {
  FaShare,
  FaFacebookSquare,
  FaTwitter,
  FaPinterest
} from 'react-icons/fa';
import {
  StyledTooltip,
  StyledTooltipButton,
  StyledTooltipContent
} from './styles/Tooltip.styled';

const ShareTooltip = () => {
  return (
    <StyledTooltip>
      <StyledTooltipButton>
        <FaShare />
      </StyledTooltipButton>

      <StyledTooltipContent>
        <h3>SHARE</h3>

        <FaFacebookSquare />
        <FaTwitter />
        <FaPinterest />
      </StyledTooltipContent>
    </StyledTooltip>
  );
};

export default ShareTooltip;
