export type TechDataType = {
  name: string;
  iconPath: string;
};

export type TechIdType = keyof typeof techStack;

export const techStack = {
  nextjs: { name: "NextJS", iconPath: "/techstack/nextjs_icon.svg" },
  react: { name: "React", iconPath: "/techstack/react_icon.png" },
  vite: { name: "Vite", iconPath: "/techstack/vite_icon.png" },
  javascript: {
    name: "JavaScript (ES6+)",
    iconPath: "/techstack/javascript_icon.png",
  },
  typescript: {
    name: "TypeScript",
    iconPath: "/techstack/typescript_icon.png",
  },
  html: { name: "HTML5", iconPath: "/techstack/html_icon.png" },
  css: { name: "CSS3", iconPath: "/techstack/css_icon.png" },
  sass: { name: "Sass", iconPath: "/techstack/sass_icon.png" },
  tailwindcss: {
    name: "Tailwind CSS",
    iconPath: "/techstack/tailwindcss_icon.png",
  },
  cssmodules: {
    name: "CSS Modules",
    iconPath: "/techstack/cssmodules_icon.png",
  },
  graphql: { name: "GraphQL", iconPath: "/techstack/graphql_icon.png" },
  rtl: { name: "React Testing Library", iconPath: "/techstack/rtl_icon.png" },
  jest: { name: "Jest", iconPath: "/techstack/jest_icon.png" },
  cucumber: { name: "Cucumber", iconPath: "/techstack/cucumber_icon.png" },
  rwd: {
    name: "Responsive Design",
    iconPath: "/techstack/rwd_icon.png",
  },
  figma: { name: "Figma", iconPath: "/techstack/figma_icon.png" },
  flutter: { name: "Flutter", iconPath: "/techstack/flutter_icon.png" },
  dart: { name: "Dart", iconPath: "/techstack/dart_icon.png" },
  git: { name: "Git", iconPath: "/techstack/git_icon.png" },
  jira: { name: "Jira", iconPath: "/techstack/jira_icon.png" },
  firebase: { name: "Firebase", iconPath: "/techstack/firebase_icon.png" },
  linux: { name: "Linux", iconPath: "/techstack/linux_icon.png" },
  macos: { name: "MAC OS", iconPath: "/techstack/macos_icon.png" },
  windows: { name: "Windows", iconPath: "/techstack/windows_icon.png" },
  vscode: {
    name: "Visual Studio Code",
    iconPath: "/techstack/vscode_icon.png",
  },
  webstorm: {
    name: "JetBrains WebStorm",
    iconPath: "/techstack/webstorm_icon.png",
  },
  bash: { name: "Bash", iconPath: "/techstack/bash_icon.png" },
  tryhackme: {
    name: "TryHackMe",
    iconPath: "/techstack/thm_icon.png",
  },
  hackthebox: {
    name: "Hack The Box",
    iconPath: "/techstack/htb_icon.svg",
  },
} as const;
