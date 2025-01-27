import React, { useEffect, useState } from "react";
import styles from "./DateSelector.module.css";

const DateSelector = ({ onDateChange }) => {

    const today = new Date();
    const yoil = ['일', '월', '화', '수', '목', '금', '토'];

    // 2주간의 날짜 생성
    const dates = Array.from({ length: 14 }, (_, i) => {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        return {
            day: yoil[date.getDay()],
            year: date.getFullYear(),
            month: date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1,
            date: date.getDate()
        };
    });

    // 슬라이드의 시작 인덱스 (현재 화면에 보이는 첫 날짜)
    const [startIndex, setStartIndex] = useState(0);
    // 선택된 날짜의 인덱스 (전체 날짜 배열 기준)
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        // 초기 날짜 전달(초기 상태일 때만 실행)
        if (dates.length > 0 && selectedIndex === 0) {
            const initialDate = `${dates[0].year}-${dates[0].month}-${dates[0].date}`;
            onDateChange(initialDate); // 초기 날짜를 부모로 전달
        }
    }, [dates, onDateChange, selectedIndex]);

    const handleDateSelect = (item, index) => {
        const globalIndex = startIndex + index;
        setSelectedIndex(globalIndex);
        const selectedDate = dates[globalIndex];
        onDateChange(`${selectedDate.year}-${selectedDate.month}-${selectedDate.date}`);
    };

    // 화살표 클릭 시 슬라이드 이동
    const handleArrowClick = (direction) => {
        setStartIndex((prevIndex) => {
            if (direction === "left") {
                return prevIndex > 0 ? prevIndex - 1 : 0;
            } else if (direction === "right") {
                return prevIndex < dates.length - 7 ? prevIndex + 1 : dates.length - 7;
            }
            return prevIndex;
        });
    };

    return (
        <div>
            <div className={styles.dateSelector}>
                <button
                    className={styles.arrowButton}
                    onClick={() => handleArrowClick("left")}
                >
                    {"<"}
                </button>
                <div className={styles.dateList}>
                    {dates.slice(startIndex, startIndex + 7).map((item, index) => (
                        <div
                            key={startIndex + index}
                            className={`${styles.dateItem} ${startIndex + index === selectedIndex ? styles.selected : ""
                                }`}
                            onClick={() => handleDateSelect(item, index)}
                        >
                            <div className={styles.date}>{item.date}</div>
                            <div className={styles.day}>{item.day}</div>
                        </div>
                    ))}
                </div>
                <button
                    className={styles.arrowButton}
                    onClick={() => handleArrowClick("right")}
                >
                    {">"}
                </button>
            </div>
        </div>
    );
};

export default DateSelector;
