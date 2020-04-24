import React from "react";
import CheckWinSize from "../div/check-win-size";
import MyRatingsMobile from "./mobile/my-ratings-mobile";
import MyRatingsDesktop from "./desktop/my-ratings-desktop";

const MyRatings = () => {
    const { width } = CheckWinSize()
    const breakpoint = 620;

return width < breakpoint ? <MyRatingsMobile /> : <MyRatingsDesktop />;
}
export default MyRatings;