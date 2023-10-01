import moment from "moment";
import { useEffect, useState } from "react";

const CountdownTimer = ({ time }) => {
  const targetDate = moment(time, "YYYY-MM-DD HH:mm:ss");
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = moment();
    const duration = moment.duration(targetDate.diff(now));
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();
    if (days === 0) {
      return `${hours}:${minutes}:${seconds}`;
    } else {
      return `${days} days ${hours}:${minutes}:${seconds}`;
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return timeRemaining;
};

export default CountdownTimer;
