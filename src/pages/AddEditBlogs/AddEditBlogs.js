import React, { useEffect, useState } from "react";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import "./style.css";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../../fireBase";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import BackgroundImageChanger from "../../components/BackgroundImageChanger";

const initialState = {
  title: "",
  tags: [],
  category: "",
  trending: "no",
  description: "",
};

const categoryOption = [
  "Fashion",
  "Technology",
  "Food",
  "Politics",
  "Sports",
  "Business",
  "Development",
  "Travel",
  "Adventure",
];

const AddEditBlogs = ({ user }) => {
  const [form, setForm] = useState(initialState);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);

  const { id } = useParams();

  const { title, tags, category, trending, description } = form;

  const navigate = useNavigate();

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            toast.info("Image upload to firebase successfully");
            setForm((prev) => ({ ...prev, imgUrl: downloadUrl }));
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

  useEffect(() => {
    id && getBlogDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const getBlogDetail = async () => {
    const docRef = doc(db, "blogs", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setForm({ ...snapshot.data() });
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTags = (tags) => {
    setForm({ ...form, tags });
  };

  const handleTrending = (e) => {
    setForm({ ...form, trending: e.target.value });
  };

  const onCategoryChange = (e) => {
    setForm({ ...form, category: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (category && tags && title && description && trending) {
      //   if (!id) {
      try {
        await addDoc(collection(db, "blogs"), {
          ...form,
          timestamp: serverTimestamp(),
          author: user.displayName,
          userId: user.uid,
        });
        toast.success("Blog created successfully");
      } catch (err) {
        console.log(err);
      }
      //   } else {
      //     try {
      //       await updateDoc(doc(db, "blogs", id), {
      //         ...form,
      //         timestamp: serverTimestamp(),
      //         author: user.displayName,
      //         userId: user.uid,
      //       });
      //       toast.success("Blog updated successfully");
      //     } catch (err) {
      //       console.log(err);
      //     }
      //   }
    } else {
      return toast.error("All fields are mandatory to fill");
    }

    navigate("/home");
  };

  return (
    <div className="homeBlogs">
      <BackgroundImageChanger />
      <div className="content-container">
        <div className="blogs">
          <div className="createTitle">
            <h1>Publish your passion, your way</h1>
            <p style={{ paddingTop: "10px" }}>
              Create a unique and beautiful blog easily.
            </p>
            <h2 style={{ padding: "20px" }}>Create Blogs</h2>
          </div>
          <div className="createBlog">
            <form className="row blog-form" onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control input-text-box"
                placeholder="Title"
                name="title"
                value={title}
                onChange={handleChange}
              />
              <div className="reactTagInput">
                <ReactTagInput
                  tags={tags}
                  placeholder="Tags"
                  onChange={handleTags}
                />
              </div>
              <>
                <p className="trending">Is It Trending ?</p>
                <div className="radio-wrapper">
                  <label htmlFor="radioOption" className="trending-yes">
                    Yes
                  </label>
                  <input
                    type="radio"
                    className="form-check trending-yes"
                    value="yes"
                    name="radioOption"
                    checked={trending === "yes"}
                    onChange={handleTrending}
                  />
                </div>

                <div className="radio-wrapper">
                  <label htmlFor="radioOption" className="trending-no">
                    No
                  </label>
                  <input
                    type="radio"
                    className="form-check trending-no"
                    value="no"
                    name="radioOption"
                    checked={trending === "no"}
                    onChange={handleTrending}
                  />
                </div>
              </>
              <>
                <select
                  value={category}
                  onChange={onCategoryChange}
                  className="cate-dropdown"
                >
                  <option>Please select category</option>
                  {categoryOption.map((option, index) => (
                    <option value={option || ""} key={index}>
                      {option}
                    </option>
                  ))}
                </select>
              </>
              <>
                <textarea
                  className="description-box"
                  placeholder="Description"
                  value={description}
                  name="description"
                  onChange={handleChange}
                  cols="30"
                  rows="10"
                />
              </>
              <>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </>
              <>
                <button
                  type="submit"
                  className="submit-button"
                  disabled={progress !== null && progress < 100}
                >
                  Submit
                </button>
              </>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEditBlogs;
