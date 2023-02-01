import { Popover, PopoverContent, PopoverTrigger } from '@chakra-ui/react';
import { FC } from 'react';

type TooltipProps = {
  icon?: JSX.Element;
  text: string;
  textClassName: string;
};
const TooltipItem: FC<TooltipProps> = ({ text, textClassName }) => {
  return (
    <a className={`py-2 px-4`}>
      <span className={textClassName}>{text}</span>
    </a>
  );
};

const TooltipDiv: FC = () => {
  return (
    <div className="wrapperMoreItem">
      <div className="tooltipMoreItem">
        <TooltipItem
          textClassName="tooltipMoreItem text-center line-21 font-black font-14 font-weight-400"
          text="Item 1"
        />
        <TooltipItem
          textClassName="tooltipMoreItem text-center line-21 font-black font-14 font-weight-400 "
          text="Item 2"
        />
        <TooltipItem
          textClassName="tooltipMoreItem text-center line-21 font-black font-14 font-weight-400"
          text="Item 3"
        />
      </div>
    </div>
  );
};

const FileUploadDropBtn: FC = () => {
  return (
    <Popover placement="bottom-start" aria-label="Actions tooltip" trigger="click">
      <PopoverTrigger>
        <span className="moreItemDropbtn">
          <span>+ 3 more</span>
        </span>
      </PopoverTrigger>
      <PopoverContent>
        <TooltipDiv />
      </PopoverContent>
    </Popover>
  );
};

export default FileUploadDropBtn;
