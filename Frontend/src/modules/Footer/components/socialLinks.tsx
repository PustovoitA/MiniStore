
import { Logo } from "@ui/Logo"

const SocialLinks = () => {
    return (<div className="flex items-start flex-col gap-3.5 w-full sm:w-75 unselectable">
    <Logo/>

    <p className="text-(--grey-text-color) font-[Jost]">
        Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. 
        Gravida massa volutpat aenean odio erat nullam fringilla.
    </p>

    <ul className="flex items-center gap-5">
        <li>
            <a id="Facebook" href="#">
                <svg className="fill-[#D7DCDF] hover:fill-[#72AEC8] transition-colors" width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M352 32H288c-70.7 0-112 41.3-112 116v60H128v96h48v176h104V304h69.3l10.7-96H280v-48
                c0-27.4 7.6-46 46.9-46H352V32z"/>
                </svg>
            </a>
        </li>

        <li>
            <a id="Instagram" href="#">
                <svg 
                className="w-6 h-6 text-[#D7DCDF] hover:text-[#72AEC8] transition-colors duration-300"
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                >
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="2"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/>
                <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
                </svg>
            </a>
        </li>
        
        <li>
            <a id="Twiter" href="#">
                <svg className="fill-[#D7DCDF] hover:fill-[#72AEC8] transition-colors" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 5.92c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.6 8.6 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9A12.15 12.15 0 0 1 3.15 4.9a4.27 4.27 0 0 0 1.32 5.7 4.24 4.24 0 0 1-1.94-.54v.06a4.28 4.28 0 0 0 3.43 4.2 4.3 4.3 0 0 1-1.93.07 4.29 4.29 0 0 0 4 2.98A8.6 8.6 0 0 1 2 19.54 12.13 12.13 0 0 0 8.56 21c7.87 0 12.17-6.52 12.17-12.17 0-.19 0-.37-.01-.56A8.7 8.7 0 0 0 22 5.92z"/>
                </svg>
            </a>
        </li>

        <li>
            <a id="LinkedIn" href="#">
                <svg className="fill-[#D7DCDF] hover:fill-[#72AEC8] transition-colors" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.98 3.5C3.33 3.5 2 4.84 2 6.49c0 1.64 1.32 2.98 2.97 2.98h.03C6.64 9.47 8 8.13 8 6.49 8 4.84 6.64 3.5 4.98 3.5zM2.4 21h5.16V9.75H2.4V21zM9.34 9.75V21h5.16v-6.03c0-3.36 4.34-3.63 4.34 0V21H24v-6.89c0-6.74-7.73-6.49-9.5-3.18V9.75H9.34z"/>
                </svg>
            </a>
        </li>

        <li>
            <a id="YouTube" href="">
                <svg className="fill-[#D7DCDF] hover:fill-[#72AEC8] transition-colors" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.8zM9.75 15.5v-7l6.25 3.5-6.25 3.5z"/>
                </svg>
            </a>
        </li>
    </ul>
    </div>)
}

export default SocialLinks