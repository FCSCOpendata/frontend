import Head from 'next/head';
import { useState, useRef } from 'react';
import OpenData101 from '../components/home/main/OpenData101';

const Contact: React.FC<{ variables: any }> = ({ variables }) => {
  const [count, setCount] = useState(0);
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="bg-contact">
        <div className="mx-auto py-20 px-20 w-1/2">
          <div className="w-4/5">
            <div className="text-center font-avenir text-[36px] font-extrabold  text-[#4D4D4D]">
              <h1>Contact Us</h1>
            </div>
            <p className="pl-2 text-center font-avenir font-normal text-[18px] text-[#7C7C7C] leading-[1.375rem] mb-8">
              Please fill out the below form or email us directly at{' '}
              <a href="/">contact@fcsc.com</a> We&apos;ll get back to you as
              soon as we can and definitely within 48 hours.
            </p>
            <form>
              <div className="flex pl-2 py-2 rounded-lg bg-white font-avenir text-[18px] font-normal text-[#858585] mb-4 hover:border-b-4 hover:rounded-b-xl hover:border-b-[#22B373]">
                <img
                  src="/images/profile.svg"
                  alt="profile"
                  className="mr-2"
                />
                <input
                  type="text"
                  placeholder="Name"
                  className="w-3/4 border-none focus:ring-0  focus:border-white"
                  required
                  ref={nameRef}
                />
              </div>
              <div className="flex pl-2 py-2 rounded-lg bg-white font-avenir text-[18px] font-normal text-[#858585] mb-4 hover:border-b-4 hover:rounded-b-xl hover:border-b-[#22B373]">
                <img src="/images/email.svg" alt="email" className="mr-2" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-3/4 border-none focus:ring-0  focus:border-white"
                  required
                  ref={emailRef}
                />
              </div>
              <div className="px-2 h-60 rounded-lg bg-white font-avenir font-normal text-[18px] text-[#858585] mb-8 hover:border-b-4 hover:rounded-b-xl hover:border-b-[#22B373]">
                <textarea
                  placeholder="Type Your Inquiry here"
                  className="w-full h-48 border-none focus:ring-0 focus:border-white"
                  onChange={(e) => {
                    setCount(e.target.value.length);
                  }}
                  required
                  ref={textRef}
                />
                <div className="float-right text-[15px] text-[#808080]">
                  {count}/1000
                </div>
              </div>
              <div className="flex flex-col items-center font-avenir">
                <button
                  className="bg-button-gradient w-1/5 rounded-xl py-2 px-4"
                  onClick={handleSubmit}
                >
                  <img
                    src="/images/btn-arrow.svg"
                    alt="submit-icon"
                    className=" mr-2 inline relative -top-1"
                  />
                  <span className=" text-white font-extrabold text-[20px]">
                    Submit
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="open-data-101">
        <OpenData101 heading="Case Studies" />
      </div>
    </>
  );
};

export default Contact;
