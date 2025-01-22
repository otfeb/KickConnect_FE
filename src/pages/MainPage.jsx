import React from "react";
import Header from "../components/Header/Header";
import DateSelector from "../components/DateSelector/DateSelector";
import FilterBar from "../components/FilterBar/FilterBar";
import MatchList from "../components/MatchList/MatchList";
import Description from "../components/Description/Description";

const MainPage = () => {
    return (
        <div style={{ margin: "0 25%" }}>
            <Header />
            <Description />
            <DateSelector />
            <FilterBar />
            <MatchList />
        </div>
    );
};

export default MainPage;
