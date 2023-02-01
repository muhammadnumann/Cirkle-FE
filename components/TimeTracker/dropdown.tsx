import DeleteIcon from 'components/icons/list/delete';
import { Popover, PopoverContent, PopoverTrigger } from '@chakra-ui/react';
import { FC } from 'react';
import Document from 'components/icons/list/document';
import Image from 'next/image';
import threeDots from '../../public/icons/threeDots.svg';

type TooltipProps = {
  icon?: JSX.Element;
  text: string;
  textClassName: string;
};
const TooltipItem: FC<TooltipProps> = ({ icon, text, textClassName }) => {
  return (
    <a className={`adjustments`}>
      {icon ? icon : <div>&nbsp;</div>}
      <span className={textClassName}>{text}</span>
    </a>
  );
};

const TimeTrackerDiv: FC = () => {
  return (
    <div className="TimetrackerActions">
      <div className="TimeTrackerFile">
        <TooltipItem
          icon={<Document />}
          textClassName="text-center line-21 font-black font-12 font-weight-500 overflow-visible"
          text="Duplicate"
        />
        <TooltipItem
          icon={<DeleteIcon />}
          textClassName="text-center line-21 font-orange font-12 font-weight-500"
          text="Delete"
        />
      </div>
    </div>
  );
};

const TimeTrackingDropdown: FC = () => {
  return (
    <Popover placement="bottom-end" aria-label="Actions tooltip " trigger="click">
      <PopoverTrigger>
        <Image src={threeDots} alt='' />
      </PopoverTrigger>
      <PopoverContent className="chakra-dropdown ">
        <TimeTrackerDiv />
      </PopoverContent>
    </Popover>
  );
};

export default TimeTrackingDropdown;
