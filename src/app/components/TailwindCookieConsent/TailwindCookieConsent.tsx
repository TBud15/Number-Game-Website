"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TailwindCookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent !== "true") {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  // Animation variants
  const variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          className="flex justify-between items-center gap-2 bg-gray-100 px-4 py-2 fixed bottom-0 left-0 w-full"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <p className="text-sm text-gray-700">
            We use{" "}
            <a
              href="https://en.wikipedia.org/wiki/HTTP_cookie"
              className="underline"
            >
              cookies
            </a>{" "}
            to ensure you get the best experience on our website.
          </p>
          <button
            onClick={handleAccept}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Hide
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TailwindCookieConsent;
