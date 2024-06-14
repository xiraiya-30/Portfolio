import React, { useRef, useState, useEffect } from 'react';
import { BiSend } from 'react-icons/bi';
import { Tooltip, Spinner } from '@material-tailwind/react';
import emailjs from 'emailjs-com';
import { CgClose } from 'react-icons/cg';
import { TbMessageHeart } from 'react-icons/tb';

const service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const public_id = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [details, setDetails] = useState({
    user_name: '',
    user_email: '',
    user_mobile: '',
    message: '',
  });

  const form = useRef();

  useEffect(() => {
    emailjs.init(public_id);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoad(true);
    emailjs.send(service_id, template_id, details).then(
      (response) => {
        console.log('MESSAGE SENT SUCCESSFULLY!');
        setMsgsent(!msgsent);
        setLoad(false);
      },
      (error) => {
        console.log('FAILED...');
        
      },
    );

    form.current.reset();
    setDetails({
      user_name: '',
      user_email: '',
      user_mobile: '',
      message: '',
    });
  };

  const [msgsent,setMsgsent]=useState(false);
  const [load,setLoad] = useState(false);
  
  const handleClose = () => {
    setMsgsent(false);
    setLoad(false);
  }

  return (
    <div className="flex flex-col w-full justify-center align-middle items-center min-h-screen px-4">
  
    <div className="flex flex-col text-center fixed top-16">
      <h2 className="lg:text-4xl text-2xl font-black p-3">CONTACT</h2>
      <p className="font-gray-800 mb-4 text-lg">Message me!</p>
    </div>
    <div className=' w-4/5 flex justify-center mt-4'>
    
    <div className={`bg-white bg-opacity-15  backdrop-blur-md  w-full max-w-md shadow-xl shadow-black p-5 pt-2 rounded-2xl border-2 border-black ${!msgsent ? "visible animate-flip-show " : "animate-flip-hide" }`} >
      
      <form ref={form} onSubmit={sendEmail} className={`w-full h-fit `}>
        <div className="mb-1 flex flex-col h-fit">
          <div>
            <h4 className="text-black my-3 font-semibold p-2">Name :</h4>
            <input
              name="user_name"
              value={details.user_name}
              onChange={handleChange}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900 text-black w-full h-12 p-3 rounded-xl bg-gray-200 bg-opacity-50"
            />
          </div>
          <div>
            <h4 className="text-black my-3 p-2 font-semibold">Email :</h4>
            <input
              name="user_email"
              value={details.user_email}
              onChange={handleChange}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900 text-black w-full h-12 p-3 rounded-xl bg-gray-200 bg-opacity-50"
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
              className="!border-t-blue-gray-200 focus:!border-t-gray-900 placeholder-gray-800 text-black w-full h-12 p-3 rounded-xl bg-gray-200 bg-opacity-50"
            />
          </div>
          <div>
            <h4 className="text-black my-3 p-2 font-semibold">Enter your message here.</h4>
            <textarea
              name="message"
              value={details.message}
              onChange={handleChange}
              className="h-24 !border-t-blue-gray-200 focus:!border-t-gray-900 text-wrap rounded-xl w-full p-3 bg-gray-200 bg-opacity-50 text-black"
            />
          </div>
        </div>
        <br />
        <div>
        <Tooltip content="Send message" placement="top" className="invisible lg:visible">
          <button type="submit" className="w-full bg-black rounded-lg hover:scale-105 p-1 py-2">
            <div className="flex justify-center items-center">
              {!load ? <BiSend size={38} color="dddddd" /> :  <Spinner className='w-6 h-6 m-1' color="white" />} 
            </div>
          </button>
        </Tooltip>

        </div>
      </form>
    </div>
    <div className={`bg-white bg-opacity-15 backdrop-blur-md text-center min-h-32 flex-col justify-center align-middle items-center shadow-xl shadow-black animate-flip  p-1 px-1.5 rounded-2xl border-2 border-black ${msgsent ? "visible animate-flip-show" : " animate-flip-hide" } `}>
        
        
        <div className='flex w-full justify-end'>
          <CgClose size={30} color='000000'  onClickCapture={handleClose} />
        </div>


        <div className='flex flex-col p-14 pt-5 items-center'>
          <TbMessageHeart size={50} color='000000'  />
          <h2 className="text-2xl font-bold text-black">MESSAGE SENT SUCCESSFULLY</h2>

        </div>
      

    </div>

    </div>
</div>

  );
};

export default Contact;
