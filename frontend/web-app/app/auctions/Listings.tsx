"use client";
import { Auction, PageResult } from "@/types";
import AuctionCard from "./AuctionCard";
import AppPagination from "../components/AppPagination";
import { getData } from "../actions/auctionActions";
import { useEffect, useState } from "react";
import Filters from "./Filters";
import { useParamsStore } from "../hooks/useParamsStore";
import { useShallow } from "zustand/shallow";
import queryString from "query-string";
import EmptyFilter from "../components/EmptyFilter";

export default function Listings() {
  const [data, setData] = useState<PageResult<Auction>>();
  const params = useParamsStore(
    useShallow((state) => ({
      pageNumber: state.pageNumber,
      pageSize: state.pageSize,
      searchTerm: state.searchTerm,
      orderBy: state.orderBy,
      filterBy: state.filterBy,
    }))
  );
  const setParams = useParamsStore((state) => state.setParams);
  const url = queryString.stringifyUrl(
    { url: "", query: params },
    { skipEmptyString: true }
  );

  function setPageNumber(pageNumber: number) {
    setParams({ pageNumber });
  }

  useEffect(() => {
    getData(url).then((data) => {
      setData(data);
    });
  }, [url]);

  if (!data) return <h3>Loading...</h3>;

  return (
    <>
      <Filters />
      {data.totalCount == 0 ? (
        <EmptyFilter showReset />
      ) : (
        <>
          <div className="grid grid-cols-4 gap-6 my-10">
            {data &&
              data.result.map((auction: Auction) => (
                <AuctionCard auction={auction} key={auction.id}></AuctionCard>
              ))}
          </div>
          <div className="flex justify-center">
            <AppPagination
              currentPage={params.pageNumber}
              pageCount={data.pageCount}
              pageChanged={setPageNumber}
            />
          </div>
        </>
      )}
    </>
  );
}
