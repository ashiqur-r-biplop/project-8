import { useContext, useEffect, useState } from "react";
import UseAxiosSecure from "./UseAxiosSecure";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useUserRole = () => {
  const { axiosSecure } = UseAxiosSecure();
  const [role, setRole] = useState("");
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  const { user, setLoading } = useContext(AuthContext);
  useEffect(() => {
    console.log(user);
    if (user) {
      axiosSecure
        .get(`/admin/${user?.email}`)
        .then((res) => {
          console.log(res.data.role);
          setRole(res.data.role);
          setIsAdminLoading(false);
        })
        .catch((e) => {
          console.log(e.message);
          setIsAdminLoading(false);
        });
    }
  }, [user]);
  return { role, isAdminLoading };
};

export default useUserRole;
