//images 
import LandingPage from "../assets/landing.jpg";
import FaveClubs from "../assets/favclub2.jpg";
import RickAndMorty from "../assets/rick.jpg";
import Makeup from "../assets/makeup.jpg";
import TvShow from "../assets/tvshow.jpg";
import GuessNumber from "../assets/guessNumber.jpg";
//icons
import { FaReact, FaSass, FaCss3Alt } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";

export const projectsData = [
    {
        "title": "Responsive Landing page",
        "link": "https://sararid.github.io/Landing-page-with-html-css/",
        "image": LandingPage,
        "icons": [
            <FaSass />
        ]
    },
    {
        "title": "Responsive Landing page",
        "link": "https://github.com/Sararid/Favorite-club-app",
        "image": FaveClubs,
        "icons": [
            <FaReact />,
            <DiJavascript1 />,
            <FaCss3Alt />
        ]
    },
    {
        "title": "Guess the number App",
        "link": "https://github.com/Sararid/guess-the-number-app",
        "image": GuessNumber,
        "icons": [
            <DiJavascript1 />,
            <FaCss3Alt />]
    },
    {
        "title": "TV shows Search Engine",
        "link": "https://github.com/Sararid/tv-shows-search-engine",
        "image": TvShow,
        "icons": [
            <DiJavascript1 />,
            <FaCss3Alt />,
            <FaSass />
        ]
    },
    {
        "title": "Rick and Morty App",
        "link": "https://github.com/Sararid/Rick-and-Morty-search-engine",
        "image": RickAndMorty,
        "icons": [
            <FaReact />,
            <FaSass />
        ]
    },
    {
        "title": "RANDA Shop",
        "link": "https://github.com/Sararid/JUMP2DIGITAL-Minimalistic-checkout-",
        "image": Makeup,
        "icons": [
            <FaReact />,
            <FaSass />
        ]
    },
]