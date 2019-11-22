import * as React from "react";

const f: Function = () => ({
  __html: `<?xml version="1.0" encoding="UTF-8"?>
        <svg width="10px" height="10px" viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 55.2 (78181) - https://sketchapp.com -->
            <title>Group 102 Copy 2@2x</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Mobile---My-accounts-All-cards" transform="translate(-42.000000, -2820.000000)">
                    <g id="Group-27-Copy-2" transform="translate(21.000000, 2727.000000)">
                        <g id="Group-102-Copy-2" transform="translate(21.000000, 93.000000)">
                            <circle id="Oval-Copy-22" fill="#FF942E" cx="5" cy="5" r="5"></circle>
                            <g id="Group-100" transform="translate(4.500000, 2.000000)" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M0.5,0.272749321 L0.5,2.67886503" id="Path-11"></path>
                                <path d="M0.5,4.5 L0.5,4.67886503" id="Path-11-Copy"></path>
                            </g>
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
