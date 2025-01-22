import React, { useEffect, useState } from "react";
import styles from "./MatchList.module.css";
import axios from "axios";

const MatchList = () => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/matches");
                setMatches(response.data); // API 응답 데이터를 상태에 저장
            } catch (error) {
                console.error("Error fetching matches:", error);
            } finally {
                setLoading(false); // 로딩 상태 종료
            }
        };

        fetchMatches();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const month = date.getMonth() + 1; // 0부터 시작하므로 +1
        const day = date.getDate();
        return `${month}월 ${day}일`;
    };

    const formatTime = (timeString) => {
        const date = new Date(timeString);
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        return `${hours}:${minutes}`;
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.matchListWrapper}>
            <p className={styles.matchCount}>총 {matches.length}개의 매치</p>
            <ul className={styles.matchList}>
                {matches.map((match) => (
                    <li key={match.match_id} className={styles.matchItem}>
                        <a
                            href={`https://www.plabfootball.com/match/${match.match_id}`}
                            className={styles.matchLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className={styles.left}>
                                <div>{formatDate(match.match_date)}</div>
                                <div className={styles.time}>{formatTime(match.match_date)}</div>
                            </div>
                            <div className={styles.appNameWrapper}>
                                <span className={styles.appName}>{match.app_name}</span>
                            </div>
                            <div className={styles.center}>
                                <div className={styles.locationWrapper}>
                                    <span>{match.place}</span>
                                </div>
                                <div className={styles.details}>
                                    {match.gender} {match.match_players}
                                </div>
                            </div>
                            <div className={styles.right}>
                                <button
                                    className={`${styles.statusButton} ${match.apply_status === "available"
                                        ? styles.statusAvailable
                                        : match.apply_status === "hurry"
                                            ? styles.statusUrgent
                                            : styles.statusClosed
                                        }`}
                                >
                                    {match.apply_status === "available"
                                        ? "신청 가능"
                                        : match.apply_status === "hurry"
                                            ? "마감 임박"
                                            : "마감"}
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
