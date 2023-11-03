import { useContext, useEffect, useState } from "react";
import UseAxiosSecure from "./UseAxiosSecure";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useUserRole = () => {
  const { axiosSecure } = UseAxiosSecure();
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  useEffect(() => {
    if (user) {
      axiosSecure
        .get(`/admin/${user?.email}`)
        .then((res) => {
          console.log(res);
          setRole(res.data.role);
          setLoading(false);
        })
        .catch((e) => {
          console.log(e.message);
          // setLoading(false)
        });
    }
    // }
  }, [user]);
  return { role, loading };
};

export default useUserRole;
