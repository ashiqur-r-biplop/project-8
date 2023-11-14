import axios from "axios";
import { useState,useEffect, useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SubscriberCount =()=>{
    // const { subscribeControl } = useContext(AuthContext);
 const [subscriberCount, setSubcriberCount] = useState(null);

  useEffect(() => {
    // console.log("hello count");
    axios
      .get("http://localhost:5000/subscriberCount")
      .then((res) => {
        // console.log(res.data.count);
        setSubcriberCount(res.data.count);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [subscriberCount]);

  return {subscriberCount,setSubcriberCount};
}
export default SubscriberCount;