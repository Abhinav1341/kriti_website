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
    <div className="m-auto justify-center mb-12 flex flex-col">
      <h1 className="md:text-[1.8rem] text-2xl mb-4 text-gray-200 text-center">
        Time Left until Hackathon Begins!!
      </h1>
      {Object.keys(timeLeft).length ? (
        <div className="flex flex-row gap-5 text-xl text-semibold text-gray-900 mx-auto">
          <div className="text-center bg-gray-50 p-4 rounded-md">
            {timeLeft.days} <br /> Days
          </div>
          <div className="text-center bg-gray-50 p-4 rounded-md">
            {timeLeft.hours} <br /> Hours
          </div>
          <div className="text-center bg-gray-50 p-4 rounded-md">
            {timeLeft.minutes} <br /> Minutes
          </div>
          <div className="text-center bg-gray-50 p-4 rounded-md">
            {timeLeft.seconds} <br /> Seconds
          </div>
        </div>
      ) : (
        <p>The countdown has ended!</p>
      )}
    </div>
  );
};

export default CountdownTimer;
