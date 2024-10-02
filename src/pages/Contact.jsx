import React, { useRef, useState } from 'react';
import { BiSend } from 'react-icons/bi';
import emailjs from 'emailjs-com';
import { TbMessageHeart } from 'react-icons/tb';
import { CgClose } from 'react-icons/cg';

const service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const public_id = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


console.log('Service ID:', service_id);
console.log('Template ID:', template_id);
console.log('Public Key:', public_id);

const Contact = () => {
  const [details, setDetails] = useState({
    user_name: '',
    user_email: '',
    user_mobile: '',
    message: '',
  });
  const [msgSent, setMsgSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(service_id, template_id, details, userID=public_id)
      .then(() => {
        setMsgSent(true);
        setLoading(false);
        formRef.current.reset();
        setDetails({ user_name: '', user_email: '', user_mobile: '', message: '' });
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col w-full pt-12 items-center min-h-screen px-4 mb-16">
      
      <div className="text-center top-8">
        <h2 className="lg:text-4xl text-2xl font-black p-3 text-black">CONTACT</h2>
        <p className="font-gray-800 mb-4 text-lg text-black">Message me!</p>
      </div>
      <div className="w-4/5 flex justify-center mt-4">
        <div className="bg-white bg-opacity-15 backdrop-blur-md w-full max-w-md shadow-xl shadow-black p-5 pt-2 rounded-2xl border-2 border-black">
          <form ref={formRef} onSubmit={sendEmail} className="w-full h-fit">
            <div className="mb-1 flex flex-col">
              <div>
                <h4 className="text-black my-3 font-semibold p-2">Name :</h4>
                <input
                  name="user_name"
                  value={details.user_name}
                  onChange={handleChange}
                  className="text-black w-full h-12 p-3 rounded-xl bg-gray-200 bg-opacity-50"
                />
              </div>
              <div>
                <h4 className="text-black my-3 p-2 font-semibold">Email :</h4>
                <input
                  name="user_email"
                  value={details.user_email}
                  onChange={handleChange}
                  className="text-black w-full h-12 p-3 rounded-xl bg-gray-200 bg-opacity-50"
                />
              </div>
              <div>
                <h4 className="text-black my-3 p-2 font-semibold">Mobile No :</h4>
                <input
                  type="tel"
                  name="user_mobile"
                  value={details.user_mobile}
                  onChange={handleChange}
                  maxLength={10}
                  className="text-black w-full h-12 p-3 rounded-xl bg-gray-200 bg-opacity-50"
                />
              </div>
              <div>
                <h4 className="text-black my-3 p-2 font-semibold">Enter your message here.</h4>
                <textarea
                  name="message"
                  value={details.message}
                  onChange={handleChange}
                  className="h-24 rounded-xl w-full p-3 bg-gray-200 bg-opacity-50 text-black"
                />
              </div>
            </div>
            <br />
            <div>
              <button type="submit" className="w-full bg-black rounded-lg p-1 py-2">
                <div className="flex justify-center items-center">
                  {!loading ? <BiSend size={38} color="dddddd" /> : 'Loading...'}
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
      {msgSent && (
        <div className="fixed top-4 right-4 bg-white text-black rounded-lg px-4 py-2 flex items-center space-x-2 shadow-lg">
          <TbMessageHeart size={24} />
          <span>Message sent successfully!</span>
          <button onClick={() => setMsgSent(false)} className="text-black">
            <CgClose size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

// sample test

export default Contact;
