import { useEffect, useState } from "react";
import AdminSIdebar from "../../components/AdminSIdebar";

const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    const hoursInString = hours.toString().padStart(2, "0");
    const minutesInString = minutes.toString().padStart(2, "0");
    const secondsInString = seconds.toString().padStart(2, "0");

    return `${hoursInString} : ${minutesInString} : ${secondsInString}`;
};

const Stopwatch = () => {
    const [time, setTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);

    useEffect(() => {
        let intervalId: NodeJS.Timeout | null = null;

        if (isRunning) {
            intervalId = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isRunning]);

    const resetHandler = () => {
        setTime(0);
        setIsRunning(false);
    };

    return (
        <div className="adminContainer">
            <AdminSIdebar />
            <main className="admin-dashboard-app">
                <h1>Stopwatch</h1>
                <section>
                    <div className="stopwatch">
                        <h2>{formatTime(time)}</h2>
                        <button className="start" onClick={() => setIsRunning((prev) => !prev)}>
                            {isRunning ? "Stop" : "Start"}
                        </button>
                        <button className="reset" onClick={resetHandler}>
                            Reset
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Stopwatch;
