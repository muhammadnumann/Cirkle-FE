import ListSortIcon from 'components/icons/listSort';
import { objectKeys } from 'internal/utils';
import {
  FC,
  Key,
  ReactNode,
  useContext,
  useState,
  useEffect,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';
import styles from './listpage.module.css';

type ListHeaderItemProps = {
  field: string;
  text: string;
  sortable?: boolean;
};

type Sort = {
  sortField: string;
  sortAsc: boolean;
};

type SorterContext = {
  sorter: Sort;
  setSorter: Dispatch<SetStateAction<Sort>>;
};

const sortContext = createContext<SorterContext>({
  sorter: { sortField: 'sNum', sortAsc: true },
  setSorter: () => null,
});

const ListHeaderItem: FC<ListHeaderItemProps> = ({
  field,
  text,
  sortable,
}: ListHeaderItemProps) => {
  const { sorter, setSorter } = useContext(sortContext);
  const fieldSorted = sorter.sortField === field;
  const handleSorter = () => {
    if (sorter.sortField === field) {
      setSorter({ sortField: sorter.sortField, sortAsc: !sorter.sortAsc });
    } else {
      setSorter({ sortField: field, sortAsc: sorter.sortAsc });
    }
  };
  return (
    <th>
      <div className={styles.listHeaderItem}>
        <span>{text}</span>
        {sortable && (
          <ListSortIcon
            onClick={handleSorter}
            className={styles.sortIcon}
            direction={fieldSorted ? (sorter.sortAsc ? 1 : 2) : 0}
          />
        )}
      </div>
    </th>
  );
};

export const ListHeader = <T extends StringObject>(props: TableHeaders<T>) => {
  return (
    <thead id={styles.listHeader}>
      <tr className={styles.listRow}>
        {objectKeys(props).map((key) => {
          const { text, sortable } = props[key];
          return (
            <ListHeaderItem key={String(key)} field={String(key)} text={text} sortable={sortable} />
          );
        })}
      </tr>
    </thead>
  );
};

type ListBodyRowProps<T extends StringObject, K> = {
  item: K;
  columns: TableHeaders<T>;
  renderer: CustomRenderer<T, K>;
};
const ListBodyRow = <T extends StringObject, K>({
  columns,
  item,
  renderer,
}: ListBodyRowProps<T, K>) => {
  // debugger;

  return (
    <tr className={styles.listRow}>
      {objectKeys(columns).map((column) => {
        const customRenderer = renderer[column];
        // debugger;
        return (
          <td key={String(column)}>
            <div className={styles.listRowItem}>{customRenderer(item)}</div>
          </td>
        );
      })}
    </tr>
  );
};

export interface ListBodyImpl<T extends StringObject, K> {
  columns: TableHeaders<T>;
  renderer: CustomRenderer<T, K>;
  valueCalc: CustomValueCalc<T, K>;
  keyGenerator: KeyGenerator<K>;
}

interface ListBodyProps<T extends StringObject, K> extends ListBodyImpl<T, K> {
  items: K[];
}
export const ListBody = <T extends StringObject, K>({
  columns,
  items,
  renderer,
  keyGenerator,
}: ListBodyProps<T, K>) => {
  return (
    <tbody>
      {items.map((item) => {
        return (
          <ListBodyRow key={keyGenerator(item)} columns={columns} item={item} renderer={renderer} />
        );
      })}
    </tbody>
  );
};

type StringObject = Record<string, never>;
export type TableHeaders<T extends StringObject> = Record<
  keyof T,
  { text: string; sortable?: boolean }
>;
export type CustomValueCalc<T, K> = Record<keyof T, (it: K) => string | number | undefined | null>;
export type CustomRenderer<T, K> = Record<keyof T, (it: K) => ReactNode>;
export type KeyGenerator<K> = (item: K) => Key;

type ListProps<T extends StringObject, K> = {
  listContainerClassName?: string;
  tableClassName?: string;
  columns: TableHeaders<T>;
  items: K[] | undefined;
  valueCalc: CustomValueCalc<T, K>;
  renderer: CustomRenderer<T, K>;
  keyGenerator: KeyGenerator<K>;
};
export const ListPage = <T extends StringObject, K>({
  listContainerClassName,
  tableClassName,
  columns,
  items,
  valueCalc,
  renderer,
  keyGenerator,
}: ListProps<T, K>) => {
  const [sort, setSort] = useState<Sort>({ sortField: 'sNum', sortAsc: true });
  const [myItems, setMyItems] = useState<K[] | undefined>(() => items);
  const sortItems = (theseItems: K[], sort: Sort) => {
    const calc = valueCalc[sort.sortField];
    return [...theseItems].sort((a, b) => {
      let left = calc(a) || '';
      let right = calc(b) || '';
      if (typeof left === 'string') {
        left = left.toUpperCase();
      }
      if (typeof right === 'string') {
        right = right.toUpperCase();
      }
      if (left == right) {
        return 0;
      }
      if (left > right) {
        return sort.sortAsc ? -1 : 1;
      } else {
        return sort.sortAsc ? 1 : -1;
      }
    });
  };

  useEffect(() => {
    if (myItems) {
      setMyItems(sortItems(myItems, sort));
    }
  }, [sort, setMyItems]);

  useEffect(() => {
    setMyItems(items);
  }, [items, setMyItems]);

  return (
    <div className={listContainerClassName}>
      <table id={styles.list} className={tableClassName}>
        <sortContext.Provider value={{ sorter: sort, setSorter: setSort }}>
          <ListHeader {...columns} />
        </sortContext.Provider>
        {myItems && (
          <ListBody
            keyGenerator={keyGenerator}
            columns={columns}
            items={myItems}
            valueCalc={valueCalc}
            renderer={renderer}
          />
        )}
      </table>
    </div>
  );
};

export default ListPage;
