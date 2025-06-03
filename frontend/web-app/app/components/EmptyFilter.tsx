import { useParamsStore } from "../hooks/useParamsStore";
import Heading from "./Heading";
import { Button } from "flowbite-react";

type Props = {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
};

export default function EmptyFilter({
  title = "No results found",
  subtitle = "Try changing the filters or search term",
  showReset,
}: Props) {
  const reset = useParamsStore((state) => state.reset);
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-[40vh]">
      <Heading title={title} subtitle={subtitle} center />
      <div className="mt-4">
        {showReset && (
          <Button onClick={reset} outline>
            Reset Filters
          </Button>
        )}
      </div>
    </div>
  );
}
