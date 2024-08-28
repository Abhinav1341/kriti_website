import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-09-15T17:00:00"); // 15th August 2024, 5:00 PM
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1 className="text-2xl text-gray-200 ">
        Time Left until Hackathon Begins!!
      </h1>
      {Object.keys(timeLeft).length ? (
        <div className="flex flex-row gap-2">
          <p className="">
            {timeLeft.days} <br /> Days
          </p>
          <p>
            {timeLeft.hours} <br /> Hours
          </p>
          <p>
            {timeLeft.minutes} <br /> Minutes
          </p>
          <p>
            {timeLeft.seconds} <br /> Seconds
          </p>
        </div>
      ) : (
        <p>The countdown has ended!</p>
      )}
    </div>
  );
};

export default CountdownTimer;
