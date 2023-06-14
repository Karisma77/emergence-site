import agriculture from '../assets/categories/agriculture.jpg'
import art from '../assets/categories/arts.jpg'
import civil from '../assets/categories/civil.jpg'
import geology from '../assets/categories/geology.jpg'
import management from '../assets/categories/gestion.jpg'
import computer from '../assets/categories/informatique.jpg'
import law from '../assets/categories/juridique.jpg'
import temp from '../assets/categories/thermique.jpg'

export const data = [
    {
        id: 1,
        name: "Génie civil",
        class: 'bg-[#F7961E] bg-blend-color mix-blend-color',
        image: civil,
        link: 'civil-engineering'
    },
    {
        id: 2,
        name: "Génie thermique",
        class: 'bg-[#579D43] bg-blend-color mix-blend-darken',
        image: temp,
        link: 'thermal-engineering'
    },
    {
        id: 3,
        name: "Carrière juridique",
        class: 'bg-[#664B9E] bg-blend-hard-light mix-blend-hard-light',
        image: law,
        link: 'legal-career'
    },
    {
        id: 4,
        name: "Gestion",
        class: 'bg-[#EE4C23] bg-blend-color mix-blend-darken',
        image: management,
        link: 'management'
    },
    {
        id: 5,
        name: "Génie géolique & pétrolier",
        class: 'bg-[#4174B9] bg-blend-color mix-blend-darken',
        image: geology,
        link: 'geological-petroleum-engineering'
    },
    {
        id: 6,
        name: "Agriculture & Elevage",
        class: 'bg-[#10837E] bg-blend-color mix-blend-darken',
        image: agriculture,
        link: 'agriculture-livestock'
    },
    {
        id: 7,
        name: "Génie informatique",
        class: 'bg-[#EB5379] bg-blend-hard-light mix-blend-hard-light',
        image: computer,
        link: 'computer-engineering'
    },
    {
        id: 8,
        name: "Arts & Métiers de la culture",
        class: 'bg-[#ED322D] bg-blend-color mix-blend-darken',
        image: art,
        link: 'arts'
    },
]