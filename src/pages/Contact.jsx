import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_q2vbhkc", 
        "template_c3r3tq4", 
        form.current,
        "4He2ZFuBS-u_Gw7W0"   
      )
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("Failed to send message ❌ Try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-black text-white px-6 md:px-20 py-24"
    >
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left: Contact Form */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Get in <span className="text-indigo-400">Touch</span>
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block mb-2 text-sm">Name</label>
              <input
                type="text"
                name="from_name"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-indigo-400 outline-none"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Email</label>
              <input
                type="email"
                name="from_email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-indigo-400 outline-none"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Message</label>
              <textarea
                rows="5"
                name="message"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-indigo-400 outline-none"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-medium transition"
            >
              Send Message
            </button>
          </form>

          {/* Status message */}
          {status && (
            <p className="mt-4 text-sm text-gray-400">{status}</p>
          )}
        </div>

        {/* Right: Contact Info */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold">Contact Information</h3>
          <p className="text-gray-400">
            Feel free to reach out via the form or directly through the details below.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="text-indigo-400" />
              <span>zaighamnasir.mail@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-indigo-400" />
              <span>+92 337 4935946</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-indigo-400" />
              <span>Lahore, Pakistan</span>
            </div>
          </div>

          <div className="flex gap-6 mt-6">
            <a href="https://github.com/ZaighamNasir" target="_blank" rel="noreferrer">
              <Github className="w-6 h-6 hover:text-indigo-400 transition" />
            </a>
            <a href="https://www.linkedin.com/in/zaigham-nasir-6a7462279/" target="_blank" rel="noreferrer">
              <Linkedin className="w-6 h-6 hover:text-indigo-400 transition" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
