import * as React from "react";

const f: Function = () => ({
  __html: `<?xml version="1.0" encoding="UTF-8"?>
    <svg width="10px" height="10px" viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 55.2 (78181) - https://sketchapp.com -->
        <title>Group 12@2x</title>
        <desc>Created with Sketch.</desc>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Mobile---My-accounts-All-cards" transform="translate(-42.000000, -2796.000000)">
                <g id="Group-27-Copy-2" transform="translate(21.000000, 2727.000000)">
                    <g id="Group-12" transform="translate(21.000000, 69.000000)">
                        <circle id="Oval" fill="#27D883" cx="5" cy="5" r="5"></circle>
                        <polyline id="Path-10" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" points="3 4.75978121 4.53103092 6 7 4"></polyline>
                    </g>
                </g>
            </g>
        </g>
    </svg>`
});

const Img = () => {
  return <span dangerouslySetInnerHTML={f()} />;
};

export default Img;
