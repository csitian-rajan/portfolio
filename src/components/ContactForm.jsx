import { useState } from "react";
import { IoIosSend } from "react-icons/io";

export const ContactForm = () => {
    const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const onSubmit = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData(event.target);
    formDataToSend.append("access_key", "44f4da74-e345-4cd3-97d7-60dfe466dfdd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend
    });
    setFormData({
      name: "",
      email: "",
      message: ""
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  
 
  return (
    <>
      <section>
        <div>
          <form  onSubmit={onSubmit}>
            <div className=" grid grid-cols-2 gap-10 !mt-10">
              <div className="flex flex-col ">
                <label htmlFor="">Name</label>
                <input
                  type="text" name="name" value={formData.name}
                  className="h-10 !px-2 rounded bg-white/10 text-white placeholder-gray-400
                         outline-none border border-gray-600
                         focus:border-sky-500 focus:ring-2 focus:ring-sky-500 "
                  placeholder="Enter Your Name"
                  required   onChange={handleChange}
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
              <button type="submit" className="text-1xl font-bold  text-black bg-sky-400 hover:scale-110  shadow-[0_0_20px_2px_rgba(56,189,248,0.75)] !p-2 rounded-xl  !mt-6 flex items-center justify-center    transition ease-in-out duration-300"
              > <IoIosSend className="text-black text-xl" />
                Send Message
               
              </button>
                <p>{result}</p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
