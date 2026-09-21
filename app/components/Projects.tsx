import resume from "../data/resume.json";

export const Projects = () =>(
    <ul className="flex flex-col gap-4b">
        {resume.projects.map(({name, link, description, tech}, i) => (
            <li key={i} className="">
                <a href={link} className="border border-amber-200 grid gap-y-8 gap-x-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr2fr))] p-4 hover:bg-amber-200 hover:text-amber-900" rel="noreferrer" target="_blank">
                    <h4 className="col-span-1 text-amber-200 in-[a:hover]:text-amber-900 font-bold text-lg">
                        {name}
                    </h4>
                    <p className='col-span-1 align-end'>
                        {description}
                    </p>
                    <ul className="col-span-2 flex flex-wrap items-start">
                        {tech.map((element,j) => 
                            <li key={j} className="bg-amber-200 text-amber-900 bg-opacity-70 border px-4 py-2 rounded-full font-bold inline mr-4 mb-4">
                                {element}
                            </li>
                        )}
                    </ul>
                </a>        
            </li>
        ))}
    </ul>
);