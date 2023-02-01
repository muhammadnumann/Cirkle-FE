import { FC } from 'react';
import { v1Tag } from '../../internal/fetcher/types';

type TagProps = {
  tag: v1Tag;
};
const Tag: FC<TagProps> = ({ tag }: TagProps) => {
  return <div className="tag-widget">{tag.description}</div>;
};

type Props = {
  tags?: v1Tag[];
};
const TagWidget: FC<Props> = ({ tags }: Props) => {
  return (
    <div className="tags">
      <h5>Tags</h5>
      {tags?.map((tag) => (
        <Tag key={tag.id} tag={tag} />
      ))}
    </div>
  );
};

export default TagWidget;
