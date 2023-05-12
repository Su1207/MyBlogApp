import React, { useState, useEffect } from "react";
import EmptyList from "../../components/Common/EmptyList/Empty";
import BlogList from "../../components/Home/BlogList/Blogs";
import Header from "../../components/Home/Header/Header";
import SearchBar from "../../components/Home/SearchBar/Search";
import { blogList } from "../../config/data";
import { collection, onSnapshot } from "firebase/firestore";
import { FaRegGem } from "react-icons/fa";
import { db } from "../../fireBase";
import "./style.css";

const Home = ({ user, handleLogout }) => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "blogs"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setBlogs(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  console.log("blogs", blogs);

  // const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

  //search Submit
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearchResults();
  };

  //search for blogs by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );

    setBlogs(filteredBlogs);
  };

  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };

  return (
    <div>
      {/*Page Header*/}
      <Header user={user} handleLogout={handleLogout} />

      {/*Search Bar*/}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/*Blog list/ Empty list*/}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}

      <div
        className="footer"
        style={{ backgroundColor: "black", marginTop: "64px" }}
      >
        <FaRegGem
          style={{
            color: "white",
            fontSize: "5vmax",
            marginBottom: "15px",
            marginTop: "55px",
            textAlign: "center",
            width: "100%",
          }}
        />
        <p className="footer-p">2023 © Talkaboutit all rights reserved</p>
        <p className="footer-p">Made by Suraj Maheshwari</p>
        <h3 className="footer-h3">Privacy policy &nbsp;&nbsp;&nbsp;Guide</h3>
      </div>
    </div>
  );
};

export default Home;
