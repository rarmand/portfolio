import type { TechIdType } from "../../data/TechStack";
import SkillBlock from "./SkillBlock";

type SkillsListPropsType = {
  skills: TechIdType[];
  title: string;
};

function SkillsList({ skills, title }: SkillsListPropsType) {
  return (
    <div className='border border-solid border-indigo-600 rounded-lg p-5 gap-6 flex flex-col text-left'>
      <h3 className=''>{title}</h3>

      <ul className='flex flex-row flex-wrap gap-2'>
        {skills.map((skill) => (
          <li key={skill}>
            <SkillBlock techId={skill} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsList;
