"use client";

import { useActionState } from "react";



import { contactAction } from "./contact.action";
import { useFormStatus } from "react-dom";

// export const metadata = {
//   title: "Contact Page",
//   description: "this is my Contact page",
//   authors: [
//     { name: "vinod thapa" },
//     { name: "thapa technical", url: "thapatechical.com" },
//   ],
//   keywords: ["nextjs", "react_js", "fullstack"],
// };

{/*const contactAction = (previousState, formData) => {
  const { name, email, message } = Object.fromEntries(formData.entries());
  console.log(name, email, message);
};*/}

const Contact = () => {
  const [state,formAction,isPending] = useActionState(contactAction,null);
  return (
    <>
      <div className="min-h-screen bg-[rgb(14,14,14)] text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            <h1 className="common_heading text-4xl font-bold mb-8 text-center">
              Get In Touch
            </h1>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-800">
              <form className="space-y-6" action={formAction}>
                {/* Full Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-gray-300"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200 text-white placeholder-gray-400"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-gray-300"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200 text-white placeholder-gray-400"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200 text-white placeholder-gray-400 resize-y"
                    placeholder="Enter your message..."
                  />
                </div>

                {/* Submit Button */}
                <Submit/>

              </form>
            </div>
            <section>
              {state&&(
                <p className={`flex mt-5 justify-center align-middle p-4 rounded-2xl ${state.success?"bg-green-500":"bg-red-500"}`}>{state.message}</p>
              )}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;




const Submit = ()=>{
  const {pending,data,method, action } = useFormStatus();
  return(
    <>
    <button
      disabled={pending}
      type="submit"
      className="w-full bg-pink-600 hover:bg-pink-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
    >
      {
        pending?(<span>loading...</span>):(<span> Send Message</span>)
      }
    </button>
    </>
  )
}