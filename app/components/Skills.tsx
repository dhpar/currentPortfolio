import resume from "../data/resume.json";

export function Skills () {
  
  return (
    <ul className="pb-8">
        {resume.skills.map((skill, i) => (
        <li key={i} className="pb-8">
            <h4 className="pb-1">
              {skill.title}
            </h4>
            <p className="text-amber-200 bg-opacity-70 py-2 font-bold">
              {skill.tech.join(", ")}.
            </p>
        </li>
        ))}
    </ul>
  );
}
