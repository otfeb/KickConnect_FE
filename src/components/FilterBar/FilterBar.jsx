import React, { useState } from "react";
import styles from "./FilterBar.module.css";

const FilterBar = () => {
    // 상태 정의
    const [selectedRegion, setSelectedRegion] = useState("전체");
    const [isDeadlineFiltered, setIsDeadlineFiltered] = useState(false);
    const [selectedGender, setSelectedGender] = useState("");

    // 지역 목록
    const regions = ["전체", "서울", "경기", "인천", "부산", "대구", "광주", "대전", "울산", "강원", "제주"];

    return (
        <div className={styles.filterBar}>
            {/* 지역 필터 */}
            <div className={styles.filterSection}>
                <label className={styles.filterLabel}>지역:</label>
                <select
                    className={styles.filterSelect}
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                >
                    {regions.map((region, index) => (
                        <option key={index} value={region}>
                            {region}
                        </option>
                    ))}
                </select>
            </div>

            {/* 마감 가리기 필터 */}
            <div className={styles.filterSection}>
                <label className={styles.filterLabel}>마감 가리기:</label>
                <label className={styles.toggleSwitch}>
                    <input
                        type="checkbox"
                        checked={isDeadlineFiltered}
                        onChange={() => setIsDeadlineFiltered(!isDeadlineFiltered)}
                    />
                    <span className={styles.slider}></span>
                </label>
            </div>

            {/* 성별 필터 */}
            <div className={styles.filterSection}>
                <label className={styles.filterLabel}>성별:</label>
                <div className={styles.genderFilters}>
                    {["남자", "여자", "남녀모두"].map((gender, index) => (
                        <button
                            key={index}
                            className={`${styles.genderButton} ${selectedGender === gender ? styles.activeGender : ""
                                }`}
                            onClick={() => setSelectedGender(gender === selectedGender ? "" : gender)}
                        >
                            {gender}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
