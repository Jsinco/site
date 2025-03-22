import { FloatingDock } from "@/components/ui/floating-dock";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import breweryXIcon from '@/assets/breweryx.webp';
import lumaMCIcon from '@/assets/lumamc.webp';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const links = [
    {
        title: "Discord",
        icon: <FontAwesomeIcon icon={faDiscord} className="h-full w-full text-neutral-500 dark:text-neutral-300 lg:text-7xl" />,
        href: "https://discord.com/users/425407651480862721",
    },
    {
        title: "GitHub",
        icon: <FontAwesomeIcon icon={faGithub} className="h-full w-full text-neutral-500 dark:text-neutral-300 lg:text-7xl" />,
        href: "https://github.com/Jsinco",
    },
    {
        title: "LumaMC",
        icon: <img src={lumaMCIcon.src} alt="LumaMC" className="" />,
        href: "https://lumamc.net",
    },
    {
        title: "BreweryX",
        icon: <img src={breweryXIcon.src} alt="BreweryX" className="" />,
        href: "https://github.com/BreweryTeam/BreweryX",
    }
];

function WebDock() {
    return (
        <div className="fixed bottom-10 left-0 right-0 z-50 flex items-center justify-center">
            <FloatingDock items={links} />
        </div>
    );
}

export default WebDock;