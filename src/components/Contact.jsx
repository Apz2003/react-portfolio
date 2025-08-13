
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_0hh36yn', // Service ID
        'template_wy6yp49', // Template ID
        formRef.current,
        'FSBTT3C9ucoLJ6fU2' // Public Key
      )
      .then(
        () => {
          setLoading(false);
          setMessage('✅ Message sent successfully!');
          formRef.current.reset();
          setTimeout(() => setMessage(''), 4000);
        },
        (error) => {
          setLoading(false);
          setMessage('❌ Failed to send message. Try again later.');
          console.error(error);
          setTimeout(() => setMessage(''), 4000);
        }
      );
  };

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
        <motion.h2
          className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-gray-600 dark:text-gray-400 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's work together
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 space-y-6"
          >
            {/* Added Image */}
            <img
              src="/contact .png" // change to your actual image path
              alt="Contact"
              className="w-48 h-48 object-contain rounded-full mx-auto mb-4"
            />

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
                  <a
                    href="mailto:buddiniapsara2003@gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:underline"
                  >
                    buddiniapsara2003@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FiPhone className="text-blue-500 text-xl mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Phone</h4>
                  <a
                    href="tel:+94718519298"
                    className="text-gray-600 dark:text-gray-300 hover:underline"
                  >
                    +94 71 851 9298
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
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-3 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Your Email
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="john@example.com"
                className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-3 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Project Inquiry"
                className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-3 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                rows="5"
                name="message"
                placeholder="Hello..."
                className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-3 rounded-lg"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-medium transition"
            >
              {loading ? 'Sending...' : <><FiSend /> Send Message</>}
            </button>

            {message && <p className="mt-3 text-sm">{message}</p>}
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
