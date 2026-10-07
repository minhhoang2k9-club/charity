import { useState } from 'react';
import './feedback.css'
import { Link } from 'react-router-dom';
function Feedback({logined}) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
   setInput(e.target.value)
  }
  async function handleSubmit(e){
  e.preventDefault();
  try {
  const token = localStorage.getItem('token');
  const response = await fetch('http://localhost:3000/api/auth/comment',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
    content: input
  })
  }); alert('gửi comment thành công')
   if (!response.ok) {
      console.log(await response.json());
    }
  } catch (error) {
    console.error(error);
  }
  }

  return (
    <>
    <h1>FEEDBACK FORM</h1>
    {logined === true ? <></> : <p className='account-check'>Sign in to send feedback</p> }
    <form onSubmit={handleSubmit}>
      <label>
        <textarea
          value={input}
          onChange={handleChange}
          placeholder='Nêu cảm nhận'
        />
      </label>
      <button type='submit' className='submit-feedback' disabled={!logined} >submit</button>
      
    </form>
    <Link to="/viewcomments" className='link' >Đọc cảm nhận sinh viên</Link>
    
    </>
  )
}
export default Feedback;