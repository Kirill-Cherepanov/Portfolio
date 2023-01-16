import { ProjectType } from '@/types';

type ProjectProps = ProjectType;

export function Project({
  name,
  type,
  technologies,
  urls,
  description,
  essay,
}: ProjectProps) {
  return (
    <div className="w-full h-full text-center bg-red-600 text-[128px] font-bold text-blue-900 flex justify-center items-center">
      Making this shit was tough
      <img src="https://cdn.myanimelist.net/images/anime/1533/127447l.jpg" />
    </div>
  );
}
