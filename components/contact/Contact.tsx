import { useState, useRef } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { AR } from '../../hooks/locale';

const Contacts: React.FC = () => {
  const { t } = useTranslation('common');
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState({
    enabled: false,
    message: '',
    code: false,
  });

  const [errorMessage, setErrorMessage] = useState({
    name: '',
    email: '',
    text: '',
  });

  const [submiting, setSubmitting] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage({ name: '', email: '', text: '' });
    setStatus({ enabled: false, message: '', code: false });

    //validate
    if (nameRef.current.value.length == 0) {
      setErrorMessage((prev) => {
        const newdata = { ...prev };
        newdata.name = t('name-err');
        return newdata;
      });
      setSubmitting(false);
      return;
    }

    if (
      emailRef.current.value.length == 0 ||
      !emailRef.current.value.includes('@')
    ) {
      setErrorMessage((prev) => {
        const newdata = { ...prev };
        newdata.email = t('email-err');
        return newdata;
      });
      setSubmitting(false);
      return;
    }

    if (
      textRef.current.value.length == 0 ||
      textRef.current.value.length > 1000
    ) {
      setErrorMessage((prev) => {
        const newdata = { ...prev };
        newdata.text = t('message-err');
        return newdata;
      });
      setSubmitting(false);
      return;
    }

    const data = {
      email: emailRef.current.value,
      name: nameRef.current.value,
      message: textRef.current.value,
    };
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          emailRef.current.value = '';
          nameRef.current.value = '';
          textRef.current.value = '';
          setCount(0);
          setSubmitting(false);
          setStatus({
            enabled: true,
            message: t('success'),
            code: true,
          });
          setErrorMessage({
            name: '',
            email: '',
            text: '',
          });
        } else {
          setSubmitting(false);
          setStatus({
            enabled: true,
            message: t('failed'),
            code: false,
          });
        }
      })
      .catch((e) => {
        setSubmitting(false);
        setStatus({
          enabled: true,
          message: t('failed'),
          code: false,
        });
      });
  };

  return (
    <div className="bg-contact">
      <div className="relative mx-auto pt-20 xl:px-20 w-1/2">
        {status.enabled && (
          <div
            className={`-mt-20 absolute mx-auto text-center ${AR(
              'sm:right-40  md:right-48 lg:right-60  xl:right-72',
              'sm:left-40  md:left-48 lg:left-60  xl:left-72'
            )}  w-1/4 p-2 rounded-lg font-avenir border text-white ${
              status.code ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {status.message}
          </div>
        )}
        <div className="xl:w-4/5">
          <div className="text-center font-avenir text-[36px] font-extrabold  text-[#4D4D4D]">
            <h1>{t('contact-us')}</h1>
          </div>
          <p className="pl-2 text-center font-avenir font-normal text-[18px] text-[#7C7C7C] leading-[1.375rem] mb-8">
            {t('contact-descp')}
          </p>
          <div className="flex pl-2 py-2 rounded-lg bg-white font-avenir text-[18px] font-normal text-[#858585] mb-4 hover:border-b-4 hover:rounded-b-xl hover:border-b-[#22B373]">
            <img src="/images/profile.svg" alt="profile" className="mr-2" />
            <input
              type="text"
              placeholder={t('name')}
              className="w-3/4 border-none focus:ring-0  focus:border-white"
              required
              ref={nameRef}
            />
          </div>
          {errorMessage.name && (
            <div className="text-red-500 -mt-4 text-[10px] font-avenir">
              {errorMessage.name}
            </div>
          )}
          <div className="flex pl-2 py-2 rounded-lg mt-4 bg-white font-avenir text-[18px] font-normal text-[#858585] mb-4 hover:border-b-4 hover:rounded-b-xl hover:border-b-[#22B373]">
            <img src="/images/email.svg" alt="email" className="mr-2" />
            <input
              type="email"
              placeholder={t('email')}
              className="w-3/4 border-none focus:ring-0  focus:border-white"
              required
              ref={emailRef}
            />
          </div>
          {errorMessage.email && (
            <div className="text-red-500 -mt-4 text-[10px] font-avenir">
              {errorMessage.email}
            </div>
          )}
          <div className="px-2 h-60 mt-4 rounded-lg bg-white font-avenir font-normal text-[18px] text-[#858585] mb-8 hover:border-b-4 hover:rounded-b-xl hover:border-b-[#22B373]">
            <textarea
              placeholder={t('message')}
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
          {errorMessage.text && (
            <div className="text-red-500 -mt-8 text-[10px] font-avenir">
              {errorMessage.text}
            </div>
          )}
          <div className="flex flex-col items-center font-avenir mt-8">
            <button
              className="bg-button-gradient w-1/4 rounded-xl py-2"
              onClick={handleSubmit}
            >
              <img
                src="/images/btn-arrow.svg"
                alt="submit-icon"
                className=" mr-2 inline relative -top-1"
              />
              <span className=" text-white font-extrabold text-[20px]">
                {t('submit')}
              </span>
            </button>
            {submiting && (
              <svg
                className="animate-spin h-4 w-4 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none" />
                <path d="M232,128A104,104,0,1,1,84.7,33.4a8.1,8.1,0,0,1,10.6,4,8,8,0,0,1-4,10.6,88,88,0,1,0,73.4,0,8,8,0,0,1-4-10.6,8.1,8.1,0,0,1,10.6-4A104.4,104.4,0,0,1,232,128Z" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
