import { Popover, PopoverContent, PopoverTrigger } from '@chakra-ui/react';
import { FC } from 'react';
import InfoIcon from 'components/icons/info';

type TooltipProps = {
  icon?: JSX.Element;
  text: string;
  textClassName: string;
};
const TooltipItem: FC<TooltipProps> = ({ text, textClassName }) => {
  return (
    <a className={``}>
      <span className={textClassName}>{text}</span>
    </a>
  );
};

const TooltipDiv: FC = () => {
  return (
    <div className="wrapperInfoIcon">
      <div className="infoIconDropBtn">
        <TooltipItem
          textClassName="infoIconDropBtn text-center line-21 font-black font-14 font-weight-400"
          text="Here we will show the note of the icon"
        />
      </div>
    </div>
  );
};

const InfoIconDropBtn: FC = () => {
  return (
    <Popover placement="bottom-start" aria-label="Actions tooltip" trigger="click">
      <PopoverTrigger>
        <span>
          <InfoIcon />
        </span>
      </PopoverTrigger>
      <PopoverContent>
        <TooltipDiv />
      </PopoverContent>
    </Popover>
  );
};

export default InfoIconDropBtn;
