import * as React from 'react';

const f:Function = () => ({
    __html: `<?xml version="1.0" encoding="UTF-8"?>
    <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: sketchtool 55.2 (78181) - https://sketchapp.com -->
        <title>CD7AAA97-E30B-43B5-8E8E-0CC48F947053@3x</title>
        <desc>Created with sketchtool.</desc>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Choose-Car-Type" transform="translate(-295.000000, -438.000000)">
                <g id="Group-26" transform="translate(0.000000, 44.000000)">
                    <g id="Group-22" transform="translate(30.000000, 375.000000)">
                        <g id="Group-3">
                            <g id="Group-2-Copy" transform="translate(265.000000, 19.000000)">
                                <circle id="Oval" fill="#9174E7" cx="8" cy="8" r="8"></circle>
                                <polyline id="Path-6" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" points="5 7.81235132 7.12130532 10 11 6"></polyline>
                            </g>
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