import Tool from '../../public/icons/tool.svg';
import Briefcase from '../../public/icons/briefcase.svg';
import Book from '../../public/icons/book.svg';
import Person from '../../public/icons/person.svg';
import Github from "../../public/icons/github.svg";
import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { Education } from '../components/Education';
import { Intro } from '../components/Intro';
import { Projects } from '../components/Projects';

const linksProps = [
    {
        MainComponent: Intro, 
        href: 'intro', 
        Icon: Person, 
        label: 'Intro'
    },
    { 
        MainComponent: Experience, 
        href: 'experience', 
        Icon: Briefcase, 
        label: 'Experience' 
    },
    {
        MainComponent: Projects,
        href: 'projects',
        Icon: Github,
        label: 'Projects'
    },
    { 
        MainComponent: Skills, 
        href: 'skills', 
        Icon: Tool, 
        label: 'Skills' 
    },
    { 
        MainComponent: Education, 
        href: 'education', 
        Icon: Book, 
        label: 'Education' 
    },
];

export default linksProps;