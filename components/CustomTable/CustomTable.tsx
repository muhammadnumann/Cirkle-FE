import styles from './CustomTable.module.css';
interface Table {
  className?: string;
  children: React.ReactNode;
}
interface Thead {
  className?: string;
  children: React.ReactNode;
}
interface Tbody {
  className?: string;
  children: React.ReactNode;
}
interface Tr {
  id?: string;
  className?: string;
  children: React.ReactNode;
}
interface Th {
  className?: string;
  children: React.ReactNode;
}
interface Td {
  className?: string;
  children: React.ReactNode;
}
interface P {
  className?: string;
  children: React.ReactNode;
}

export const Table: React.FC<Table> = ({ className, children }) => {
  return (
    <>
      <table className={`${styles.main} table ${className}`}>{children}</table>
    </>
  );
};
export const Thead: React.FC<Thead> = ({ children }) => {
  return (
    <>
      <thead className={`${styles.thead}`}>{children}</thead>
    </>
  );
};
export const Tbody: React.FC<Tbody> = ({ children, className }) => {
  return (
    <>
      <tbody className={`styles.tbody ${className}`} id="abd">
        {children}
      </tbody>
    </>
  );
};
export const Th: React.FC<Th> = ({ children, className }) => {
  return (
    <>
      <th className={`th ${className}`}>{children}</th>
    </>
  );
};
export const Tr: React.FC<Tr> = ({ children, id, className }) => {
  return (
    <>
      <tr key={id} className={`${className}`}>
        {children}
      </tr>
    </>
  );
};
export const Td: React.FC<Td> = ({ children, className }) => {
  return (
    <>
      <td className={`${className}`}>{children}</td>
    </>
  );
};
export const P: React.FC<P> = ({ children, className }) => {
  return (
    <>
      <p className={`${className}`}>{children}</p>
    </>
  );
};
