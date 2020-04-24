import React from "react";
import CheckWinSize from "../div/check-win-size";
import NewRatingsMobile from "./mobile/new-ratings-mobile";
import NewRatingsDesktop from "./desktop/new-ratings-desktop";

const NewRatings = () => {
    const { width } = CheckWinSize()
    const breakpoint = 620;

return width < breakpoint ? <NewRatingsMobile /> : <NewRatingsDesktop />;
}
export default NewRatings;