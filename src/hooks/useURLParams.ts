import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";
import { SortType } from "@/utils/types";

export const useURLParams = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // get the sort parameter from URL, default to 'gold'
  const sortBy = (searchParams.get("sort") as SortType) || "gold";

  // update the sort parameter
  const setSortBy = useCallback(
    (sort: SortType) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("sort", sort);
      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, router, pathname]
  );

  return { sortBy, setSortBy };
};
