import MobileComponent from "./mobil-component";
import DesktopComponent from "./desktop-component.";
import React from "react";

const MyComponent = () => {
    // Declare a new state variable with the "useState" Hook
const [width, setWidth] = React.useState(window.innerWidth);
const breakpoint = 620;

React.useEffect(() => {
    /* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    /* passing an empty array as the dependencies of the effect will cause this
       effect to only run when the component mounts, and not each time it updates.
       We only want the listener to be added once */
}, []);

return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
}
export default MyComponent;