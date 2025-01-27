import React, { useState } from "react";
import Header from "../components/Header/Header";
import DateSelector from "../components/DateSelector/DateSelector";
import FilterBar from "../components/FilterBar/FilterBar";
import MatchList from "../components/MatchList/MatchList";
import Description from "../components/Description/Description";

const MainPage = () => {
    const [selectedDate, setSelectedDate] = useState(""); // 날짜 상태
    const [filters, setFilters] = useState({ region: "0", gender: "", soldout: false }); // 필터 상태

    return (
        <div style={{ margin: "0 25%" }}>
            <Header />
            <Description />
            <DateSelector onDateChange={setSelectedDate} />
            <FilterBar filters={filters} setFilters={setFilters} />
            {selectedDate && (
                <MatchList data={{ matchDate: selectedDate, filters }} />
            )}
        </div>
    );
};

export default MainPage;
