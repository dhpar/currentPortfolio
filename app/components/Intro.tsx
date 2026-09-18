import resume from "../data/resume.json";
import LocationIcon from '../../public/icons/map-pin.svg';

export function Intro () {
  
  return (
    <div className="pb-10">
      <h1 className="text-2xl md:text-5xl font-light sm:text-6xl pb-1 font-sans">
        {resume.name}
      </h1>
      <div className="inline-flex items-center gap-4 pb-4">
        <h2 className="text-xl md:text-2xl text-zinc-700 dark:text-amber-200 sm:text-3xl">
          {resume.title}
        </h2>
        <span className="md:hidden">|</span>
        <address className="flex">
          <LocationIcon className="w-fit mr-2"/>
          <span>{resume.location}</span>
        </address>          
      </div>
      <ul className="flex flex-col gap-y-2">
        {resume.summary.map((paragraph,i) => 
          <li key={i}><p>{paragraph}</p></li>
        )}
      </ul>
    </div>
  );
}
