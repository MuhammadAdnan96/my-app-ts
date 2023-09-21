import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";
import { logout } from "../../redux-toolkit/features/tokenSlice";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import styles from "../styles/header.module.css";
import styles from "./styles.module.css";

const Header = () => {
  // const dispatch = useDispatch();
  // let token = useSelector((state: any) => state.userToken);
  const [showBar, setShowBar] = useState(false);
  const cookies = new Cookies();
  const router = useRouter();

  function logoutHandler() {
    // token = null;
    // dispatch(logout(token)), localStorage.clear();
    cookies.remove("userToken");
    router.push("/");
  }
  function handleSearch() {
    setShowBar(!showBar);
  }
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.containerFluid}>
          <h2 className={styles.shopping}>Shopping App</h2>

          {showBar && (
            <input
              className={styles.searchBar}
              type="text"
              placeholder="Search Products"
            />
          )}

          <div className={styles.iconSearch}>
            <BsSearch
              onClick={handleSearch}
              style={{ width: "30px", height: "30px" }}
            />
          </div>
          <div className={styles.iconCart}>
            <AiOutlineShoppingCart style={{ width: "40px", height: "40px" }} />
          </div>
          <button className={styles.logoutBtn} onClick={logoutHandler}>
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};
export default Header;
