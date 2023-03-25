export type ProjectType = {
  name: string;
  type: string;
  technologies: string[];
  urls: {
    deploy: string;
    repo: string;
  };
  demo: { mobile: string; desktop: string };
  description: string[];
  essay?: JSX.Element;
};
