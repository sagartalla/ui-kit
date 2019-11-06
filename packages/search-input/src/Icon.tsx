import * as React from 'react';

const f:Function = () => ({
    __html: `<?xml version="1.0" encoding="UTF-8"?>
    <svg width="16px" height="15px" viewBox="0 0 16 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: sketchtool 55.2 (78181) - https://sketchapp.com -->
        <title>0A266906-753B-4A95-90A7-5ECB6673090C@3x</title>
        <desc>Created with sketchtool.</desc>
        <g id="Rough" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Find-Your-Car---Select-Car-Modal---Not-Found" transform="translate(-40.000000, -133.000000)">
                <g id="Select-Car" transform="translate(0.000000, 44.000000)">
                    <g id="Group" transform="translate(20.000000, 72.000000)">
                        <g id="Search-2" transform="translate(20.000000, 17.000000)">
                            <rect id="Rectangle" x="0" y="0" width="16" height="16"></rect>
                            <circle id="Oval" stroke="#5C5D66" stroke-linecap="round" stroke-linejoin="round" cx="7.20533333" cy="7.20533333" r="5.968"></circle>
                            <path d="M11.424,11.424 L14.768,14.768" id="Path" stroke="#5C5D66" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>`    
});

const Img = () => {
    return (<span dangerouslySetInnerHTML={f()}/>);
}

export default Img;