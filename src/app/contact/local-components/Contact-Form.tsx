"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const ContactForm: React.FC = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
  const templateIDContact = process.env
    .NEXT_PUBLIC_TEMPLATE_ID_CONTACT as string;
  const publicKEY = process.env.NEXT_PUBLIC_KEY_EMAILJS as string;

  const router = useRouter();

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //ensure form.current is not null
    if (form.current !== null) {
      emailjs
        .sendForm(serviceID, templateIDContact, form.current, publicKEY)
        .then(
          (result) => {
            setMessageSent(true);
            setIsDisabled(true);
            console.log(`${result.text}, message sent. Thank you.`);
          },
          (error) => {
            setErrorMessage(true);
            setIsDisabled(true);
            console.log(`${error.text}, error occurred.`);
          }
        );
    } else {
      //Handle the case where form.current is null
      console.log("The form is not available.");
      setErrorMessage(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow bg-white py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
            If you have any questions or have found any errors, please fill out
            the short form below.
          </p>
        </motion.div>
        {/* Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="fname"
              className="shadow-sm border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-50 border-gray-300 placeholder-gray-400 text-gray-900"
              placeholder="Name"
              required
              name="fname"
            />
          </div>
          {/* Email */}
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block p-3 w-full text-sm rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-50 border-gray-300 placeholder-gray-400 text-gray-900"
              placeholder="Enter your email"
              name="email"
            />
          </div>
          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-50 border-gray-300 placeholder-gray-400 text-gray-900"
              placeholder="Subject"
              name="subject"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 bg-gray-50 border-gray-300 placeholder-gray-400 text-gray-900"
              placeholder="Leave your message here..."
              name="additional-comments"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 sm:w-fit focus:ring-4 focus:outline-none hover:bg-blue-700 focus:ring-blue-800"
            disabled={isDisabled}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
          {messageSent && (
            <motion.h2
              className="mb-4 text-xl tracking-tight font-extrabold text-black border border-green-500 p-5 bg-white rounded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Message sent, thank you!
            </motion.h2>
          )}

          {errorMessage && (
            <motion.h2
              className="mb-4 text-xl tracking-tight font-extrabold text-black border border-red-500 p-5 bg-white rounded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Hmm... Some error occured
            </motion.h2>
          )}
        </motion.form>
      </div>
    </div>
  );
};

export default ContactForm;
