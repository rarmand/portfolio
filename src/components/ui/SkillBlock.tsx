import { techStack, type TechIdType } from "../../data/TechStack";

type SkillBlockPropsType = {
  techId: TechIdType;
};

function SkillBlock({ techId }: SkillBlockPropsType) {
  const { name, iconPath } = techStack[techId];

  return (
    <div className='border border-solid border-indigo-600 rounded-2xl p-3 flex flex-row gap-2 items-center text-sm font-semibold'>
      <img src={iconPath} width={20} alt={name} />
      {name}
    </div>
  );
}

export default SkillBlock;
