import { FC } from 'react';
import { v1Skill } from '../../internal/fetcher/types';

type SkillProps = {
  skill: v1Skill;
};

const Skill: FC<SkillProps> = ({ skill }: SkillProps) => {
  return <div className="skill-widget">{skill.description}</div>;
};

type Props = {
  skills?: v1Skill[];
};
const SkillWidget: FC<Props> = ({ skills }: Props) => {
  return (
    <div className="skills">
      <h5>Skills</h5>
      {skills?.map((skill) => (
        <Skill key={skill.id} skill={skill} />
      ))}
    </div>
  );
};

export default SkillWidget;
