import { useState } from "react";
import { useNavigate } from 'react-router-dom'


export default function FormAddPost({ }) {
  const [form, setForm] = useState({
    content: ''
  });
  const navigate = useNavigate();
  const isValidForm = () => {

    if (form.content) {
      return true;
    }
    return false;
  };

  const submitForm = (event) => {
    event.preventDefault();

    if (isValidForm()) {
      fetch(import.meta.env.VITE_API_URL_POSTS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({...form, id: 0})
      })
        .then(response => {

          if (response.ok) {
            setForm({ content: '' });
          }
        })
        .finally(() => navigate('/'))
    }
  };
  const onChange = ({ target: { name, value } }) => setForm((prevForm) => ({ ...prevForm, [name]: value }));

  return (
    <form className="form" onSubmit={submitForm}>
      <div className="form-row">
        <div className="form-column">
          <label className="form-label" aria-required htmlFor="content">Новый пост</label>
          <textarea id="content" className="form-field" name="content" type="content" rows="6" value={form.content} onChange={onChange} />
        </div>
      </div>
      <div className="form-row">
        <button className="form-button button-blue button-base">Опубликовать</button>
      </div>
    </form>
  );
}