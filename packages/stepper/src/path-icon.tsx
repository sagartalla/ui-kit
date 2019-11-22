import * as React from "react";

const f: Function = () => ({
  __html: `<?xml version="1.0" encoding="UTF-8"?>
        <svg width="1px" height="9px" viewBox="0 0 1 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 55.2 (78181) - https://sketchapp.com -->
            <title>Path 9@2x</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                <g id="Mobile---My-accounts-All-cards" transform="translate(-47.000000, -2808.000000)" stroke="#27D883">
                    <g id="Group-27-Copy-2" transform="translate(21.000000, 2727.000000)">
                        <path d="M26.5,82 L26.5,88.832827" id="Path-9"></path>
                    </g>
                </g>
            </g>
        </svg>`
});

const Img = () => {
  return <span dangerouslySetInnerHTML={f()} />;
};

export default Img;
