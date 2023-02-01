import DeleteIcon from 'components/icons/list/delete';
import { Popover, PopoverContent, PopoverTrigger } from '@chakra-ui/react';
import { FC } from 'react';
import EmailDropbtnBlue from 'components/icons/emailDropBtnBlue';
import ThreeDotIcon from 'components/icons/threeDotIcon';

type TooltipProps = {
  icon?: JSX.Element;
  text: string;
  textClassName: string;
};
const TooltipItem: FC<TooltipProps> = ({ icon, text, textClassName }) => {
  return (
    <a className={`tooltipRowUploadFile`}>
      {icon ? icon : <div>&nbsp;</div>}
      <span className={textClassName}>{text}</span>
    </a>
  );
};

const TooltipDiv: FC = () => {
  return (
    <div className="wrapperUploadFile">
      <div className="tooltipUploadFile">
        <TooltipItem
          icon={<EmailDropbtnBlue />}
          textClassName="text-center line-21 font-black font-12 font-weight-500"
          text="Email To"
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

const ReportCard: FC = () => {
  return (
    <Popover placement="bottom-start" aria-label="Actions tooltip" trigger="click">
      <PopoverTrigger>
        <ThreeDotIcon />
      </PopoverTrigger>
      <PopoverContent>
        <TooltipDiv />
      </PopoverContent>
    </Popover>
  );
};

export default ReportCard;
