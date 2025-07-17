import React, { useState } from "react";
import useApi from "./useApi";
const initialData = {
  title: "",
  body: "",
  userId: 101,
};
const CrudDEMO = () => {
  const [formData, setFormData] = useState(initialData);
  const [updateFormData, setUpdateFormData] = useState(initialData);

  //read
  const {
    data: read_posts,
    loading: load_posts,
    error: error_posts,
    refetch: fetch_posts,
  } = useApi("https://jsonplaceholder.typicode.com/posts?_limit=4");

  //create
  const {
    data: create_posts_data,
    loading: load_create_posts,
    error: error_create_posts,
    refetch: fetch_create_posts,
  } = useApi("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    manual: true,
    body: formData,
  });
  const onCreatePost = async (e) => {
    e.preventDefault();
    await fetch_create_posts();
    setFormData(initialData);
  };

  //update
  const {
    data: update_posts_data,
    loading: update_posts,
    error: error_update_posts,
    refetch: fetch_update_posts,
  } = useApi("https://jsonplaceholder.typicode.com/posts/3", {
    method: "PUT",
    manual: true,
    body: updateFormData,
  });
  const onUpdatePost = async (e) => {
    e.preventDefault();
    await fetch_update_posts();
    setUpdateFormData(initialData);
  };

  //delete
  const {
    data: delete_posts_data,
    loading: delete_posts,
    error: error_delete_posts,
    refetch: fetch_delete_posts,
  } = useApi("https://jsonplaceholder.typicode.com/posts/3", {
    method: "DELETE",
    manual: true,
  });
  const onDeletePost = async (e) => {
    e.preventDefault();
    await fetch_delete_posts();
  };

  return (
    <>
      <h1>CRUD DEMO</h1>
      <section>
        <h1>Read</h1>
        {load_posts ? (
          <p>Loading Post!!!!!!!!!!</p>
        ) : error_posts ? (
          <p>Error Loading = {error_posts}</p>
        ) : (
          read_posts &&
          read_posts.map((post) => (
            <div
              key={post.id}
              style={{
                marginBottom: "1rem",
                backgroundColor: "black",
                textAlign: "justify",
                padding: "1rem",
              }}
            >
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          ))
        )}
        <br />
        <button onClick={fetch_posts}>REFETCH</button>
      </section>

      <section>
        <h1>Create</h1>
        <form>
          <input
            type="text"
            value={formData.title}
            placeholder="Enter Title"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <input
            type="text"
            value={formData.body}
            placeholder="Enter body"
            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
          />
          <br />
          <button onClick={onCreatePost} disabled={load_create_posts}>
            {load_create_posts
              ? "Creating Posts"
              : error_create_posts
              ? `Error in creating post= ${error_create_posts}`
              : "Create Post"}
          </button>
        </form>
        <div>
          {create_posts_data && (
            <>
              <span>{create_posts_data.title}</span> <br />
              <span>{create_posts_data.body}</span> <br />
              <span>{create_posts_data.id}</span> <br />
            </>
          )}
        </div>
      </section>

      <section>
        <h1>Update</h1>
        <form>
          <input
            type="text"
            value={updateFormData.title}
            placeholder="Enter Title"
            onChange={(e) =>
              setUpdateFormData({ ...updateFormData, title: e.target.value })
            }
          />
          <input
            type="text"
            value={updateFormData.body}
            placeholder="Enter body"
            onChange={(e) =>
              setUpdateFormData({
                ...updateFormData,
                body: e.target.value,
              })
            }
          />
          <br />
          <button onClick={onUpdatePost} disabled={update_posts}>
            {update_posts
              ? "Updating Posts"
              : error_update_posts
              ? `Error in creating post= ${error_update_posts}`
              : "Update Post"}
          </button>
        </form>
        <div>
          {update_posts_data && (
            <>
              <span>{update_posts_data.title}</span> <br />
              <span>{update_posts_data.body}</span> <br />
              <span>{update_posts_data.id}</span> <br />
            </>
          )}
        </div>
      </section>

      <section>
        <h1>Delete</h1>
        <br />
        <button onClick={onDeletePost} disabled={delete_posts}>
          {delete_posts
            ? "Deleting"
            : error_delete_posts
            ? `Error in Deleting Post = ${error_delete_posts}`
            : "Delete Post"}
        </button>
        <br />
        {delete_posts_data && <span>Deleted Successfully!!!!!!</span>}
      </section>
    </>
  );
};

export default CrudDEMO;
