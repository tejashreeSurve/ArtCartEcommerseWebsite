import { useQueryClient } from "react-query";

export const useSetCartItems = ({ queryName, data }: SetCartItems) => {
  const queryClient = useQueryClient();
  queryClient.setQueryData(queryName, data);
};

interface SetCartItems {
  queryName: string;
  data: any;
}
