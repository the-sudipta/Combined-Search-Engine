"use client"
import Image from "next/image";
import {useEffect, useState} from "react";
import Google_Logo from '@/public/google.png';
import Bing_Logo from '@/public/bing.png';
import Duck_Duck_Go_Logo from '@/public/duck_duck_go.png';
import Shortcut_Button from "@/app/components/shortcut";

export default function Home() {
    const [selectedEngineImage, setSelectedEngineImage] = useState(Google_Logo);
    const [selectedEngineID, setSelectedEngineID] = useState('google');
    const [textareaContent, setTextareaContent] = useState('');
    const [textareaHeight, setTextareaHeight] = useState(25);
    const [textareaBackgroundHeight, setTextareaBackgroundHeight] = useState(60);
    const [textareaRoundness, setTextareaRoundness] = useState(50);
    // const [searchStatement, setSearchStatement] = useState(null);
    // const imageUrlWithTimestamp = `https://random.imagecdn.app/500/150?timestamp=${new Date().getTime()}`;

    useEffect(() => {

    }, []);
    const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const [randomNumber, setRandomNumber] = useState(randomInt(1,3600));


    const imageUrlWithRand = `https://random.imagecdn.app/500/150?random=${randomNumber}`;


    const handleTextareaChange = (event) => {
        setTextareaContent(event.target.value);
        setTextareaHeight(event.target.scrollHeight);
        if (event.target.scrollHeight <= 25) {
            setTextareaBackgroundHeight(60);
        } else {
            setTextareaRoundness(20);
            setTextareaBackgroundHeight(50 + event.target.scrollHeight);
        }
    };

    const handleLogoClick = (logo, id) => {
        setSelectedEngineImage(logo);
        setSelectedEngineID(id);
        console.log(`Clicked on ${id} logo`);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            submitForm();
        }
    };

    const logos = [
        { id: 'google', src: Google_Logo, alt: 'Google Logo', width: 50 },
        { id: 'bing', src: Bing_Logo, alt: 'Bing Logo', width: 50 },
        { id: 'duckduckgo', src: Duck_Duck_Go_Logo, alt: 'DuckDuckGo Logo', width: 50 },
    ];

    const shortcuts = [

        {
            "id": 1,
            "name": "Google",
            "url": "https://www.google.com",
            "image": "https://img.icons8.com/color/48/google-logo.png"
        },

        {
            "id": 2,
            "name": "Youtube",
            "url": "https://www.youtube.com",
            "image": "https://img.icons8.com/color/48/youtube-play.png"
        },
        {
            "id": 3,
            "name": "Facebook",
            "url": "https://www.facebook.com",
            "image": "https://img.icons8.com/color/48/facebook-new.png"
        },
        {
            "id": 4,
            "name": "Twitter",
            "url": "https://www.twitter.com",
            "image": "https://img.icons8.com/color/48/twitter--v1.png"
        },
        {
            "id": 5,
            "name": "Instagram",
            "url": "https://www.instagram.com",
            "image": "https://img.icons8.com/color/48/instagram-new--v1.png"
        },
        {
            "id": 6,
            "name": "Linkedin",
            "url": "https://www.linkedin.com",
            "image": "https://img.icons8.com/color/48/linkedin.png"
        }

    ]



    const submitForm = () => {
        console.log("Form submitted! Search Engine = "+selectedEngineID);

        let searchStatement = '';
        /**
         * encodeURIComponent is used to encode the Search text in the URL. Normally, in the URL, there is no space and also there are some other restrictions
         * If we use encodeURIComponent, then it automatically fix that issues.
         */
        searchStatement = 'https://www.'+selectedEngineID+'.com/search?q='+encodeURIComponent(textareaContent);
        window.location.href = searchStatement;
        // alert(searchStatement);

    };

    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="relative w-screen h-screen overflow-hidden">
                    <Image
                        id="background_image"
                        src={imageUrlWithRand}
                        alt="Random Image"
                        layout="fill"
                        objectFit="cover"
                        className="z-999"
                    />

                    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10">

                        <Image src={selectedEngineImage} alt="Search Engine Logo" width={400} className="z-20 transition-all duration-300 transform hover:scale-110" />

                        <div id="search_engine_selector" className="flex z-30 mt-4 space-x-4">
                            {logos.map((logo) => (
                                <Image
                                    key={logo.id}
                                    id={`${logo.id}_logo`}
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={logo.width}
                                    className={`z-20 cursor-pointer transition-all duration-300 transform hover:scale-110 
                                    ${selectedEngineImage === logo.src ? 'border-0 border-blue-500 backdrop-blur shadow-lg dark:shadow-dark-xl filter-dark-xl scale-140' : ''}`}
                                    onClick={() => handleLogoClick(logo.src, logo.id)}
                                />
                            ))}
                        </div>

                        <div id="search_bar_holder" className="z-30 mt-4 pt-4 pl-4 pr-4 pb-1 bg-white shadow-md border focus:outline-none w-80"
                             style={{ height: `${textareaBackgroundHeight}px`, borderRadius: `${textareaRoundness}px` }}>

                            <form action="" className="flex items-center" onKeyDown={handleKeyDown}>

                                <textarea
                                    placeholder="Search and Start the web"
                                    value={textareaContent}
                                    onChange={handleTextareaChange}
                                    className="px-4 w-full focus:outline-none min-h-0 rounded-full resize-none"
                                    style={{ height: `${textareaHeight}px`, borderRadius: `${textareaRoundness}px` }}
                                />
                            </form>
                        </div>

                        <div id="shortcuts" className="z-30 mt-4 flex space-x-4">
                            {shortcuts.map(shortcut => (
                                <Shortcut_Button
                                    key={shortcut.id}
                                    id={shortcut.id}
                                    imageUrl={shortcut.image}
                                    shortcutName={shortcut.name}
                                    shortcutLink={shortcut.url}
                                />
                            ))}
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}