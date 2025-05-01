import { useEffect, useState } from "react";
import MyContext from "./myContext";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";
import toast from "react-hot-toast";

function MyState({ children }) {
  const [loading, setLoading] = useState(false);
  const [getAllProduct, setGetAllProduct] = useState([]);
  const [getAllOrder, setGetAllOrder] = useState([]);
  const [getAllUser, setGetAllUser] = useState([]);

  // fetch products
  const getAllProductFunction = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let productArray = [];
        querySnapshot.forEach((doc) => {
          const docData = doc.data();
          productArray.push({
            ...docData,
            id: doc.id,
            // ✅ convert time to timestamp number (serializable)
            time: docData.time?.toDate().getTime(),
          });
        });
        setGetAllProduct(productArray);
        setLoading(false);
      });
      return () => unsubscribe();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // fetch orders
  const getAllOrderFunction = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "order"), orderBy("time"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let orderArray = [];
        querySnapshot.forEach((doc) => {
          const docData = doc.data();
          orderArray.push({
            ...docData,
            id: doc.id,
            // ✅ convert time to timestamp number (serializable)
            time: docData.time?.toDate().getTime(),
          });
        });
        setGetAllOrder(orderArray);
        setLoading(false);
      });
      return () => unsubscribe();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Delete order function
  const deleteProduct = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, "order", id));
      toast.success("Order Deleted successfully");
      getAllOrderFunction();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // fetch users
  const getAllUserFunction = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "user"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let userArray = [];
        QuerySnapshot.forEach((doc) => {
          userArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllUser(userArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProductFunction();
    getAllOrderFunction();
    getAllUserFunction();
  }, []);

  return (
    <MyContext.Provider
      value={{
        loading,
        setLoading,
        getAllProduct,
        getAllProductFunction,
        getAllOrder,
        deleteProduct,
        getAllUser
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyState;
