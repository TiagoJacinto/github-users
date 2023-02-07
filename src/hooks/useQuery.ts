import { useEffect, useState } from "react";

export function useQuery<T>(
  queryFunction: () => Promise<T>,
  ...dependencies: any[]
) {
  const [data, setData] = useState<T>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      setData(await queryFunction());
    } catch (error: any) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, dependencies);

  return { data, isError, isLoading };
}
