import CountDownTimer from "./CountDownTimer";
import CarImage from "./CarImage";
import { Auction } from "@/types";

type Props = {
  auction: Auction;
};

export default function AuctionCard({ auction }: Props) {
  return (
    <a href="#">
      <div className="relative w-full bg-gray-200 aspect-[16/10] rounded-lg overflow-hidden">
        <CarImage imageUrl={auction.imageUrl} />
        <div className="absolute bottom-2 left-2">
          <CountDownTimer auctionEnd={auction.auctionEnd} />
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <h3 className="text-gray-700">
          {auction.make} {auction.model}
        </h3>
        <h3 className="text-gray-700">{auction.year}</h3>
      </div>
    </a>
  );
}
