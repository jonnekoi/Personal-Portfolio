import {useState} from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jonnekoivisto00@gmail.com');
    setCopied(true);
  };


  return (
      <section className="text-center m-14 flex-col flex">
        <h3 className="text-white font-bold text-3xl code-text m-7">Contact
          me</h3>
        <p className="max-w-110 text-white code-text m-12">You can contact me
          either on LinkedIn or email!</p>
        <div className="flex w-1/4 m-auto align-middle contact-icons">
          <a className="w-fit m-auto contact-item"
             href="https://www.linkedin.com/in/jonnekoivisto" target="_blank"
             rel="noopener noreferrer">
            <i className="devicon-linkedin-plain colored colored icon-large"></i>
          </a>
          <svg onClick={handleCopyEmail} xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24" strokeWidth={1.5} stroke="white"
               className="size-16 cursor-pointer contact-item">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
          </svg>
          <a className="w-fit m-auto contact-item" href="https://www.github.com/jonnekoi"
             target="_blank"
             rel="noopener noreferrer">
            <i className="devicon-github-original-wordmark icon-large"></i>
          </a>
        </div>
        {copied && <p className="text-orange-400 code-text m-7">Email copied to
          clipboard!</p>}
      </section>
  )
}
export default Contact;
