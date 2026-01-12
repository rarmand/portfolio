import type { TechIdType } from "../data/TechStack";
import SkillsList from "./ui/SkillsList";

function Skills() {
  const frontendSkills: TechIdType[] = [
    "react",
    "vite",
    "nextjs",
    "javascript",
    "typescript",
    "html",
    "css",
    "sass",
    "tailwindcss",
    "cssmodules",
  ];
  const backendSkills: TechIdType[] = ["graphql"];
  const testingSkills: TechIdType[] = ["rtl", "jest", "cucumber"];
  const uxUiTools: TechIdType[] = ["rwd", "figma"];
  const tools: TechIdType[] = [
    "git",
    "jira",
    "firebase",
    "linux",
    "macos",
    "windows",
    "vscode",
    "webstorm",
  ];
  const mobileSkills: TechIdType[] = ["flutter", "dart"];
  const cybersecuritySkills: TechIdType[] = ["bash", "tryhackme", "hackthebox"];

  return (
    <section id='skills' className='h-screen flex'>
      <div className='container m-auto flex flex-wrap gap-10'>
        <h3>My technology stack:</h3>

        <SkillsList skills={frontendSkills} title='Frontend Development' />
        <SkillsList skills={backendSkills} title='Backend Development' />
        <SkillsList skills={testingSkills} title='Testing' />
        <SkillsList skills={uxUiTools} title='UI/UX Tools' />
        <SkillsList skills={tools} title='Tools' />
        <SkillsList skills={mobileSkills} title='Mobile development' />
        <SkillsList skills={cybersecuritySkills} title='Cybersecurity' />
      </div>
    </section>
  );
}

export default Skills;
