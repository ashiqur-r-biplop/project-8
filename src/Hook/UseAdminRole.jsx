import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./UseAuth";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const UseAdminRole = () => {
  const { user, loading } = useContext(AuthContext);
  const { axiosSecure } = useAxiosSecure();
  // use axios secure with react query

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin/${user?.email}`);
      return res.data.admin;
    },
  });
  return { isAdmin, isAdminLoading };
};
export default UseAdminRole;
