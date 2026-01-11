import SkillsList from "./ui/SkillsList";

function Skills() {
  const frontendSkills = [
    "React",
    "Vite",
    "NextJS",
    "JavaScript (ES6+)",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Sass",
    "Tailwind CSS",
    "CSS Modules",
  ];
  const backendSkills = ["GraphQL"];
  const testingSkills = ["React Testing Library", "Jest", "Cucumber"];
  const uxUiTools = ["Responsive Design", "Figma"];
  const tools = [
    "Git",
    "Jira",
    "Firebase",
    "Linux",
    "MAC OS",
    "Windows",
    "Visual Studio Code",
    "JetBrains WebStorm",
  ];
  const mobileSkills = ["Flutter", "Dart"];
  const cybersecuritySkills = ["Bash", "TryHackMe courses", "Hack The Box"];

  return (
    <section id='skills' className='h-screen flex'>
      <div className='container m-auto flex flex-wrap gap-10'>
        <h3>My technology stack:</h3>

        <SkillsList skills={frontendSkills} name='Frontend Development' />
        <SkillsList skills={backendSkills} name='Backend Development' />
        <SkillsList skills={testingSkills} name='Testing' />
        <SkillsList skills={uxUiTools} name='UI/UX Tools' />
        <SkillsList skills={tools} name='Tools' />
        <SkillsList skills={mobileSkills} name='Mobile development' />
        <SkillsList skills={cybersecuritySkills} name='Cybersecurity' />
      </div>
    </section>
  );
}

export default Skills;
