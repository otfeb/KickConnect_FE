import React from "react";
import styles from "./MatchList.module.css";

const MatchList = () => {
    const matchs = [
        { date: "1월 22일", time: "19:00", location: "서울 구장", details: "남녀모두 • 6vs6", status: "신청 가능" },
        { date: "1월 22일", time: "20:00", location: "부산 구장", details: "남녀모두 • 6vs6", status: "마감 임박" },
        { date: "1월 23일", time: "18:00", location: "대구 구장", details: "남녀모두 • 6vs6", status: "마감" },
        { date: "1월 23일", time: "19:30", location: "인천 구장", details: "남녀모두 • 6vs6", status: "신청 가능" },
        { date: "1월 24일", time: "17:00", location: "광주 구장", details: "남녀모두 • 6vs6", status: "마감 임박" },
        { date: "1월 24일", time: "19:00", location: "대전 구장", details: "남녀모두 • 6vs6", status: "마감" },
        { date: "1월 25일", time: "20:00", location: "울산 구장", details: "남녀모두 • 6vs6", status: "신청 가능" },
        { date: "1월 26일", time: "18:30", location: "경기 구장", details: "남녀모두 • 6vs6", status: "마감 임박" },
        { date: "1월 27일", time: "19:00", location: "강원 구장", details: "남녀모두 • 6vs6", status: "마감" },
        { date: "1월 28일", time: "17:30", location: "제주 구장", details: "남녀모두 • 6vs6", status: "신청 가능" },
    ];

    return (
        <div className={styles.matchListWrapper}>
            <p className={styles.matchCount}>총 {matchs.length}개의 매치</p>
            <ul className={styles.matchList}>
                {matchs.map((match, index) => (
                    <li key={index} className={styles.matchItem}>
                        <a href="#" className={styles.matchLink}>
                            <div className={styles.left}>
                                <div>{match.date}</div>
                                <div className={styles.time}>{match.time}</div>
                            </div>
                            <div className={styles.appNameWrapper}>
                                <span className={styles.appName}>플랩</span>
                            </div>
                            <div className={styles.center}>
                                <div className={styles.locationWrapper}>
                                    <span>{match.location}</span>
                                </div>
                                <div className={styles.details}>{match.details}</div>
                            </div>

                            <div className={styles.right}>
                                <button
                                    className={`${styles.statusButton} ${match.status === "신청 가능"
                                        ? styles.statusAvailable
                                        : match.status === "마감 임박"
                                            ? styles.statusUrgent
                                            : styles.statusClosed
                                        }`}
                                >
                                    {match.status}
                                </button>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MatchList;
