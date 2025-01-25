import React from "react";
import styles from "./FilterBar.module.css";

const FilterBar = ({ filters, setFilters }) => {

    const regions = ["서울", "경기", "인천", "부산"];

    const genderMapping = {
        남녀모두: 0,
        남자: 1,
        여자: -1,
    };

    const handleRegionChange = (e) => setFilters({ ...filters, region: e.target.value });
    const toggleSoldout = () => setFilters({ ...filters, soldout: !filters.soldout });
    const handleGenderToggle = (gender) => {
        setFilters({
            ...filters,
            gender: filters.gender === genderMapping[gender] ? "" : genderMapping[gender],
        });
    };

    return (
        <div className={styles.filterBar}>
            {/* 지역 필터 */}
            <div className={styles.filterSection}>
                <select value={filters.region} onChange={handleRegionChange} className={styles.filterSelect}>
                    {regions.map((region, index) => (
                        <option key={index} value={index}>
                            {region}
                        </option>
                    ))}
                </select>
            </div>

            {/* 마감 가리기 필터 */}
            <div className={styles.filterSection}>
                <button
                    className={`${styles.soldoutButton} ${filters.soldout ? styles.active : ""}`}
                    onClick={toggleSoldout}
                >
                    마감 가리기
                </button>
            </div>

            {/* 성별 필터 */}
            <div className={styles.filterSection}>
                <div className={styles.genderFilters}>
                    {["남자", "여자", "남녀모두"].map((gender, index) => (
                        <button
                            key={index}
                            className={`${styles.genderButton} ${filters.gender === { 남자: 1, 여자: -1, 남녀모두: 0 }[gender]
                                ? styles.active : ""
                                }`}
                            onClick={() => handleGenderToggle(gender)}
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
