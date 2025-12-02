import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    region: '',
    skills: '',
    experience: ''
  });

  const handleChange = e => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // send POST request to backend API
    const res = await fetch('/api/workers', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ ...form, skills: form.skills.split(',')})
    });
    if (res.ok) alert('Registration Successful!');
    else alert('Failed to register.');
  };

  return (
    <main className="max-w-xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Worker Registration</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Full Name" required className="w-full p-3 border rounded" />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" required className="w-full p-3 border rounded" />
        <input name="region" value={form.region} onChange={handleChange} placeholder="Region" className="w-full p-3 border rounded" />
        <input name="skills" value={form.skills} onChange={handleChange} placeholder="Skills (comma separated)" className="w-full p-3 border rounded" />
        <input name="experience" value={form.experience} onChange={handleChange} placeholder="Years Experience" type="number" className="w-full p-3 border rounded" />
        <button type="submit" className="w-full py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition">Register</button>
      </form>
    </main>
  )
}

