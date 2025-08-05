import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    emailjs
      .sendForm(
        "service_ffbjhzu", // from EmailJS
        "template_5k5bi5i", // from EmailJS
        formRef.current,
        "dU9iO2glZbG92aohu" // from EmailJS
      )
      .then(
        () => {
          setLoading(false);
          setMessage("✅ Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          setLoading(false);
          setMessage("❌ Failed to send. Please try again.");
        }
      );
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-sm text-white">Connect With Me</p>
        <h2 className="text-4xl font-bold mb-2 text-white">Get In Touch</h2>
        <p className="text-white max-w-lg mx-auto">
          I'd love to hear from you! If you have any questions, comments, or
          feedback, please fill the form below
        </p>
      </div>

      {/* Form */}
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="w-full max-w-2xl space-y-6"
      >
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            required
            className="w-full text-white border border-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            required
            className="w-full text-white border border-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Enter your message"
          rows="5"
          required
          className="w-full text-white border border-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400"
        ></textarea>

        {/* Button */}
        <div className="text-center">
          <motion.button
            type="submit"
            disabled={loading}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            whileHover={{
              scale: 0.95,
              boxShadow: "0 0 10px #ff00ff, 0 0 15px #ff00ff",
              borderColor: "#ff00ff",
              color: "#ff00ff",
            }}
            className="w-max flex items-center justify-center gap-2 text-white border border-white rounded-full py-3 px-10 mx-auto dark:text-white dark:border-white duration-300"
          >
            {loading ? "Sending..." : "Submit Now →"}
          </motion.button>
        </div>

        {/* Status Message */}
        {message && (
          <p className="text-center text-white mt-4">{message}</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
