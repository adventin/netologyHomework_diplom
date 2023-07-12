import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditPost({ post }) {
  const [postForm, setPostForm] = useState({...post});
  const navigate = useNavigate();
  const savePost = (postId) => {
    fetch(`${import.meta.env.VITE_API_URL_POSTS}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(postForm)
    })
      .then(() => navToPost(postId))
  };
  
  const onChange = ({ target: { name, value } }) => setPostForm((postForm) => ({ ...postForm, [name]: value }));

  const navToPost = (postId) => navigate(`/posts/${postId}`);

  return (
    <>
      <div className="page-post-header">
        <i className="icon-close" onClick={() => navToPost(postForm.id)}>✘</i>
      </div>
      <div className="post-edit">
        <textarea className="post-edit-area" name="content" value={postForm.content} onChange={onChange} rows="5" />
      </div>
      <div className="page-post-footer">
        <button className="button-base button-blue" onClick={() => savePost(postForm.id)}>Сохранить</button>
      </div>
    </>
  );
}