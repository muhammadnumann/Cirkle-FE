import DeleteIcon from 'components/icons/list/delete';
import EditIcon from 'components/icons/list/edit';
import ListActionsIcon from 'components/icons/listActions';
import { Popover, PopoverContent, PopoverTrigger } from '@chakra-ui/react';
import { FC } from 'react';
import styles from './tooltip.module.css';

type TooltipProps = {
  icon?: JSX.Element;
  text: string;
  textClassName: string;
};
const TooltipItem: FC<TooltipProps> = ({ icon, text, textClassName }) => {
  return (
    <a className={styles.tooltipRow}>
      {icon ? icon : <div>&nbsp;</div>}
      <span className={textClassName}>{text}</span>
    </a>
  );
};

const TooltipDiv: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tooltip}>
        <TooltipItem icon={<EditIcon />} textClassName={styles.edit} text="Edit" />
        <TooltipItem icon={<DeleteIcon />} textClassName={styles.delete} text="Delete" />
      </div>
    </div>
  );
};

const ListTooltip: FC = () => {
  return (
    <Popover placement="bottom-end" aria-label="Actions tooltip" trigger="hover">
      <PopoverTrigger>
        <ListActionsIcon />
      </PopoverTrigger>
      <PopoverContent>
        <TooltipDiv />
      </PopoverContent>
    </Popover>
  );
};

export default ListTooltip;
