import React, { useState, useEffect } from "react";
import EmptyList from "../../components/Common/EmptyList/Empty";
import BlogList from "../../components/Home/BlogList/Blogs";
import Header from "../../components/Home/Header/Header";
import SearchBar from "../../components/Home/SearchBar/Search";
import { blogList } from "../../config/data";
import { collection, onSnapshot } from "firebase/firestore";
// import { FaRegGem } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";
import { db } from "../../fireBase";
import "./style.css";
import Spinner from "../../components/spinner/Spinner";

const Home = ({ user, handleLogout }) => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  // The onSnapshot function is a Firebase Firestore method that sets up a real-time listener for changes to a collection in the database. It takes three arguments:

  // The first argument is a reference to the Firestore collection you want to listen to. In this case, it listens to the "blogs" collection using collection(db, "blogs"), where db is a reference to the Firestore instance.

  // The second argument is a callback function that will be called whenever there are changes to the collection. The snapshot parameter inside the callback contains the updated data.

  // The third argument is an optional error callback function that will be called if there's an error with the real-time listener.
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "blogs"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          //snapshot.docs contain an array of document
          list.push({ id: doc.id, ...doc.data() });
          //list.push({ id: doc.id, ...doc.data() }):For each document, we create an object with the properties of the document's data (...doc.data()) and add an additional property called "id" with the value of the document ID (doc.id). This way, we construct an array of blog objects with their respective IDs.
        });
        setBlogs(list);
        setLoading(false);
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
    event.preventDefault(); //avoid page reload
    handleSearchResults();
  };

  //search for blogs by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      //trims any leading or trailing whitespace using trim().
      //JavaScript String method used to check if one string contains another string.
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
      {loading ? (
        <Spinner />
      ) : !blogs.length ? (
        <EmptyList />
      ) : (
        <BlogList blogs={blogs} />
      )}

      {/* <div
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
    </div> */}

      <Footer />
    </div>
  );
};

export default Home;
