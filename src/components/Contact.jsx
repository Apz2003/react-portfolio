import { motion } from 'framer-motion';
import { FiSend, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-20 px-6 bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Get In Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Let's work together
        </p>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Contact Information
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Feel free to reach out for collaborations or just a friendly hello.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <FiMail className="text-blue-500 text-xl mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Email</h4>
                  <a href="buddiniapsara2003@gmail.com" className="text-gray-600 dark:text-gray-300 hover:underline">
                    buddiniapsara2003@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FiPhone className="text-blue-500 text-xl mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Phone</h4>
                  <a href="tel:+94718519298" className="text-gray-600 dark:text-gray-300 hover:underline">
                    +94718519298
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FiMapPin className="text-blue-500 text-xl mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
              <input
                type="text"
                placeholder="Project Inquiry"
                className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Hello Apsara..."
                className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-medium transition"
            >
              <FiSend /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
