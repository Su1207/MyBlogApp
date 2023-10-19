import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Chip from "../../components/Common/Chip/Chip";
import EmptyList from "../../components/Common/EmptyList/Empty";
import { blogList } from "../../config/data";
import "./styles.css";
import { Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../fireBase";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    id && getBlogDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const getBlogDetail = async () => {
    const docRef = doc(db, "blogs", id);
    const blogDetail = await getDoc(docRef);
    setBlog(blogDetail.data());
  };

  return (
    <div className="Single">
      {/* <Link className="blog-goBack" to="/home">
        <span>&#8592;</span> Go Back
      </Link> */}
      <div
        className="blog-title-box"
        style={{ backgroundImage: `url('${blog?.imgUrl}')` }}
      >
        <div className="blog-title">
          <span>{blog?.timestamp.toDate().toDateString()}</span>
          <h2>{blog?.title}</h2>
        </div>
      </div>
      <div className="data">
        <p className="meta-info">
          By <span className="author">{blog?.author}</span> -&nbsp;
          <span>{blog?.timestamp.toDate().toDateString()}</span>
        </p>

        <hr />

        <p className="text-start">{blog?.description}</p>
      </div>
    </div>
  );
};

export default Blog;
