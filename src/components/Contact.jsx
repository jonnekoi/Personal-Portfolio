import {useState} from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jonnekoivisto00@gmail.com');
    setCopied(true);
  };


  return (
      <section className="text-center m-14 flex-col flex">
        <h3 className="text-white font-bold text-2xl font-myFont m-7">Contact
          me</h3>
        <p className="max-w-110 text-white code-text m-12">You can contact me
          either on LinkedIn or email!</p>
        <a href="https://www.linkedin.com/in/jonnekoivisto" target="_blank"
           rel="noopener noreferrer">
          <i className="devicon-linkedin-plain colored colored icon-large"></i>
        </a>
        <button
            className="border rounded-full p-3 w-1/6 m-auto mt-10 mb-10 text-white font-myFont button"
            onClick={handleCopyEmail}>
          Email
        </button>
        {copied && <p className="text-white code-text m-7">Email copied to
          clipboard!</p>}
      </section>
  )
}
export default Contact;
