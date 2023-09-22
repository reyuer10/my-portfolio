import systematic from "../../public/images/Systematic.avif";

import React from "react";

export default function Contact() {
  return (
    <div className="contact-container min-h-screen flex items-center justify-center space-x-28 font-Lato">
      <div>
        <form className="flex flex-col">
          <label className="text-slate-500">Name</label>
          <input
            placeholder="Enter your name..."
            className="border border-slate-900 rounded p-1"
            type="text"
          />
          <label className="text-slate-500">Email</label>
          <input
            placeholder="Enter your email..."
            className="border border-slate-900 rounded p-1"
            type="text"
          />
          <label className="text-slate-500">Message</label>
          <textarea
            className="border border-slate-900 rounded p-1"
            name="message"
            id="message"
            cols="50"
            rows="5"
            placeholder="Please enter your message..."
          ></textarea>
          <button className="px-4 py-2 bg-black text-white my-3 rounded hover:bg-slate-700 transition-all">Submit</button>
        </form>
      </div>
      <div>
        <img 
        className="h-[370px]"
        src={systematic}
         alt="atWork" />
      </div>
    </div>
  );
}
