import * as React from "react";

const f: Function = () => ({
  __html: `<?xml version="1.0" encoding="UTF-8"?>
        <svg width="12px" height="12px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 55.2 (78181) - https://sketchapp.com -->
            <title>Oval Copy 22</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Mobile---My-accounts-All-cards" transform="translate(-41.000000, -2643.000000)" stroke="#27D883">
                    <g id="Group-13-Copy-4" transform="translate(21.000000, 2551.000000)">
                        <g id="Group-13-Copy">
                            <g id="Group-45" transform="translate(21.000000, 67.000000)">
                                <circle id="Oval-Copy-22" cx="5" cy="31" r="5"></circle>
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
