import { useState } from "react";
import { IoIosSend } from "react-icons/io";

export const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("formData", formData);
    setFormData({
      name: "",
      email: "",
      message: ""
    });

  }
  return (
    <>
      <section>
        <div>
          <form onSubmit={handleSubmit}>
            <div className=" grid grid-cols-2 gap-10 !mt-10">
              <div className="flex flex-col ">
                <label htmlFor="">Name</label>
                <input
                  type="text" name="name" value={formData.name}
                  className="h-10 !px-2 rounded bg-white/10 text-white placeholder-gray-400
                         outline-none border border-gray-600
                         focus:border-sky-500 focus:ring-2 focus:ring-sky-500 "
                  placeholder="Enter Your Name"
                  required      onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Email</label>
                <input
                  type="email" name="email"
                  className="h-10 !px-2 rounded bg-white/10 text-white placeholder-gray-400
                         outline-none border border-gray-600
                         focus:border-sky-500 focus:ring-2 focus:ring-sky-500 "
                  placeholder="Enter Your Email"
                  required  value={formData.email}    onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col !mt-4 ">
              <label htmlFor="">Message</label>
              <textarea name="message"
                className="h-30 !px-2 rounded bg-white/10 text-white placeholder-gray-400
                         outline-none border border-gray-600
                         focus:border-sky-500 focus:ring-2 focus:ring-sky-500 "
                placeholder="Enter Your Message"
                required      onChange={handleChange} value={formData.message}
              />
            </div>
            <div>
              <button className="text-1xl font-bold  text-black bg-sky-400 hover:scale-110  shadow-[0_0_20px_2px_rgba(56,189,248,0.75)] !p-2 rounded-xl  !mt-6 flex items-center justify-center    transition ease-in-out duration-300"
              > <IoIosSend className="text-black text-xl" />
                Send Message
               
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
