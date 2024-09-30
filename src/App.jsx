import { useState } from "react";

function App() {
  const [form, setForm] = useState({ email: "", phone: "" , password:""});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log({ ...form, [e.target.name]: e.target.value }); // Log the updated form state
  };

  const handleClick = () => {
    alert("Hey, I am clicked");
  };

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Submit Form</button>
      </div>
      <input type="text" name="email" value={form.email} onChange={handleChange}/>
      <input type="text" name="phone" value={form.phone} onChange={handleChange}/>

      <input type="text" name="password" value={form.password? form.password :""} onChange={handleChange} />
    </>
  );
}

export default App;
