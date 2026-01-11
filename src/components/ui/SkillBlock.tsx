type SkillBlockPropsType = {
  name: string;
};

function SkillBlock({ name }: SkillBlockPropsType) {
  return (
    <div className='border border-solid border-indigo-600 rounded-2xl p-3'>
      {name}
    </div>
  );
}

export default SkillBlock;
