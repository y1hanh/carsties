"use client";
import Countdown, { zeroPad } from "react-countdown";

const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}) => {
  if (completed) {
    return <span>Finished</span>;
  } else {
    // Render a countdown
    return (
      <div
        className={`border-2 border-white text-white py-1 px-2 rounded-lg flex justify-center
    ${
      completed
        ? "bg-red-600"
        : days == 0 && hours < 10
        ? "bg-amber-600"
        : "bg-green-600"
    }`}
      >
        {completed ? (
          <span>Auction finished</span>
        ) : (
          <span suppressHydrationWarning={true}>
            {days}: {zeroPad(hours)}: {zeroPad(minutes)}: {zeroPad(seconds)}
          </span>
        )}
      </div>
    );
  }
};

type CountDownTimerProps = {
  auctionEnd: string | undefined;
};

export default function CountDownTimer({ auctionEnd }: CountDownTimerProps) {
  return (
    <div>
      <Countdown date={auctionEnd} renderer={renderer} />
    </div>
  );
}
