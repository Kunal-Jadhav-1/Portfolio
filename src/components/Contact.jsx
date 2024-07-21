import React from "react";
import { CONTACT } from "../constants";
import {motion} from "framer-motion"

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.10 }}
      id="contact"
      className="border-b border-neurtal-900 pb-20"
    >
      <h2 className="my-10 text-center text-3xl">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4"> {CONTACT.address}</p>
        <p className="my-4"> {CONTACT.phoneNo}</p>
        <a href="#" className="my-4">
          {" "}
          {CONTACT.email}
        </a>
      </div>
    </motion.div>
  );
};

export default Contact;
