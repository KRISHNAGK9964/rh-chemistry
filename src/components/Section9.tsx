import React, { useState, ChangeEvent } from "react";

type Props = {
}
const Section9 = React.forwardRef<HTMLDivElement>(({}:Props,ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    email: "",
    phone: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ""
    }));
  };

  const handleSubmit = () => {
    const { name, email, phone, age, message } = formData;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: "Please enter a valid email address"
      }));
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        phone: "Please enter a 10-digit phone number"
      }));
      return;
    }

    const mailtoLink = `mailto:rlhkchem6@gmail.com.com?subject=Contact Us Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AAge: ${age}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div ref={ref}  className="relative max-w-screen-xl mx-auto">
      <div className=" text-[#911C82] rounded-md pr-4 py-4">
        <h2 className="text-3xl font-bold mb-5 ml-5">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="ml-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Student Name"
              className="p-2 rounded-md bg-white text-[#911C82] placeholder-[#911C82]::placeholder w-full"
            />
          </div>
          <div className="ml-5">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className={`p-2 rounded-md bg-white text-[#911C82] placeholder-[#911C82]::placeholder w-full ${
                errors.email && "border-red-500"
              }`}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="ml-5">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone no"
              className={`p-2 rounded-md bg-white text-[#911C82] placeholder-[#911C82]::placeholder w-full ${
                errors.phone && "border-red-500"
              }`}
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </div>
          <div className="ml-5">
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Age"
              className="p-2 rounded-md bg-white text-[#911C82] placeholder-[#911C82]::placeholder w-full"
            />
          </div>
          <div className="ml-5">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="p-2 rounded-md bg-white text-[#911C82] placeholder-[#911C82]::placeholder w-full"
              rows={4}
            ></textarea>
          </div>
        </div>
        <button
          className="bg-[#911C82] hover:bg-purple-800 text-white py-2 px-4 mt-5 rounded-md ml-5 transition-colors duration-300"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
});

export default Section9;
