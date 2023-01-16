import { Logo, SwitchCheckbox } from '.';

export function Navbar() {
  return (
    <div className="backdrop-blur-md fixed top-0 left-0 right-0 z-10">
      <div className="max-w-5xl mx-auto flex justify-between [&>*]:grow text-main items-center">
        <Logo className="text-center" />
        <ul className="flex justify-between items-center grow">
          <li>Me</li>
          <li>About</li>
          <li>Projects</li>
          <li className="flex flex-col items-center">
            <div className="border-b-2 border-main w-full text-center">
              Skills
            </div>
            <div>Contact</div>
          </li>
        </ul>
        <SwitchCheckbox theme="dark" className="flex justify-center" />
      </div>
    </div>
  );
}
