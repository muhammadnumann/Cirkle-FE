import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  showOpacity: boolean;
}>;
const OpacityWrapper: FC<Props> = ({ showOpacity, children }: Props) => {
  if (!showOpacity) {
    return <>{children}</>;
  }

  return <g opacity={0.5}>{children}</g>;
};

export default OpacityWrapper;
