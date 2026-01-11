import SkillBlock from "./SkillBlock";

type SkillsListPropsType = {
  skills: string[];
  name: string;
};

function SkillsList({ skills, name }: SkillsListPropsType) {
  return (
    <div className='border border-solid border-indigo-600 rounded-md p-6 gap-6 flex flex-col text-left'>
      <h3 className=''>{name}</h3>

      <ul className='flex flex-row flex-wrap gap-2'>
        {skills.map((skill) => (
          <li key={skill}>
            <SkillBlock name={skill} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsList;
