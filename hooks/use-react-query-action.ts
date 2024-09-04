import { useQuery } from "@tanstack/react-query";
import { instance } from "@/services/instance";
import { useParams } from "next/navigation";

const useReactQueryAction = <T>(url: string) => {
  let params: any = useParams();

  Object.keys(params).map((key) => {
    url = url.replace(`[${key}]`, params[key]);
  });

  return useQuery<T>({
    queryKey: [url],
    queryFn: async () => {
      try {
        let { data } = await instance.get(url);
        return data;
      } catch (error) {
        return error;
      }
    },
  });
};

export default useReactQueryAction;
