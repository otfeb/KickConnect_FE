import React, { useState } from "react";
import styles from "./DateSelector.module.css";

const DateSelector = () => {
    const dates = [
        { day: "월", date: "22" },
        { day: "화", date: "23" },
        { day: "수", date: "24" },
        { day: "목", date: "25" },
        { day: "금", date: "26" },
        { day: "토", date: "27" },
        { day: "일", date: "28" },
    ];

    // 오늘 날짜를 기본 선택
    const [selectedIndex, setSelectedIndex] = useState(0);

    // 화살표 클릭 시 날짜 변경
    const handleArrowClick = (direction) => {
        if (direction === "left") {
            setSelectedIndex((prevIndex) =>
                prevIndex > 0 ? prevIndex - 1 : dates.length - 1
            );
        } else if (direction === "right") {
            setSelectedIndex((prevIndex) =>
                prevIndex < dates.length - 1 ? prevIndex + 1 : 0
            );
        }
    };

    return (
        <div className={styles.dateSelector}>
            <button
                className={styles.arrowButton}
                onClick={() => handleArrowClick("left")}
            >
                {"<"}
            </button>
            {dates.map((item, index) => (
                <div
                    key={index}
                    className={`${styles.dateItem} ${index === selectedIndex ? styles.selected : ""
                        }`}
                    onClick={() => setSelectedIndex(index)}
                >
                    <div className={styles.date}>{item.date}</div>
                    <div className={styles.day}>{item.day}</div>
                </div>
            ))}
            <button
                className={styles.arrowButton}
                onClick={() => handleArrowClick("right")}
            >
                {">"}
            </button>
        </div>
    );
};

export default DateSelector;
