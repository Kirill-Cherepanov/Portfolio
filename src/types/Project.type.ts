export type ProjectType = {
  name: string;
  type: string;
  technologies: string[];
  urls: {
    deploy: string;
    repo: string;
  };
  description: string[];
  essay: string;
};
