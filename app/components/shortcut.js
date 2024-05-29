import React from 'react';
import Image from 'next/image';

const Shortcut_Button = ({id, imageUrl, shortcutName, shortcutLink }) => {


    const handleShortcutClick = () =>{
        window.location.href = shortcutLink;
    }


    return (
        // Website Image
        <div className="relative bg-white shadow-md rounded-md overflow-hidden cursor-pointer" onClick={handleShortcutClick}>
            <Image
                // src="https://img.icons8.com/ios-filled/50/shortcut.png"
                src={imageUrl}
                alt="Card Image"
                width={70}
                height={70}
                className="object-cover object-center"
            />

            {/* Edit button */}
            <button className="absolute top-2 right-2 p-2 bg-gray-800 text-white rounded-full" key={id}>
                <Image
                    src="https://img.icons8.com/ios/50/EBEBEB/edit--v1.png"
                    alt="Edit Icon"
                    height={10}
                    width={10}
                    className="object-cover object-center"
                />
            </button>

            {/* Centered text */}
            <h3 className="text-center mx-auto">{shortcutName}</h3>
        </div>
    );
};

export default Shortcut_Button;
