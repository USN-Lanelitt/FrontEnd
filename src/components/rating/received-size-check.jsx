/*Nicole har jobbet med denne siden*/

import React from "react";
import CheckWinSize from "../div/check-win-size";
import ReceivedRatingsMobile from "./mobile/received-ratings-mobile";
import ReceivedRatingsDesktop from "./desktop/received-ratings-desktop";

const ReceivedRatings = () => {
    const { width } = CheckWinSize()
    const breakpoint = 620;

return width < breakpoint ? <ReceivedRatingsMobile /> : <ReceivedRatingsDesktop />;
}
export default ReceivedRatings;