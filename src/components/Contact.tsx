import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react';
const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const {
      name,
      value
    } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return <section id="contact" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out and I'll get back to you as soon as possible.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-10">
          <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="md:col-span-1">
            <motion.div variants={itemVariants} className="bg-slate-800 p-6 rounded-xl shadow-lg mb-6 hover:shadow-purple-500/10 hover:transform hover:translate-y-[-5px] transition-all duration-300">
              <div className="flex items-start">
                <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                  <MailIcon className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Email</h3>
                  <p className="text-gray-300">eng.nazrizan@gmail.com</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-slate-800 p-6 rounded-xl shadow-lg mb-6 hover:shadow-blue-500/10 hover:transform hover:translate-y-[-5px] transition-all duration-300">
              <div className="flex items-start">
                <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                  <PhoneIcon className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Phone</h3>
                  <p className="text-gray-300">+91 9539665011</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-purple-500/10 hover:transform hover:translate-y-[-5px] transition-all duration-300">
              <div className="flex items-start">
                <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                  <MapPinIcon className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Location</h3>
                  <p className="text-gray-300">Kozhikode, Kerala, India</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={inView ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 30
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="md:col-span-2">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-xl shadow-lg">
              {isSubmitted ? <motion.div initial={{
              opacity: 0,
              scale: 0.8
            }} animate={{
              opacity: 1,
              scale: 1
            }} className="text-center py-10">
                  <div className="bg-green-500/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-300">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </motion.div> : <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group md:col-span-1">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <input type="text" id="name" name="name" value={formState.name} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white" placeholder="Your Name" />
                  </div>
                  <div className="form-group md:col-span-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white" placeholder="Your Email" />
                  </div>
                  <div className="form-group md:col-span-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                      Subject
                    </label>
                    <input type="text" id="subject" name="subject" value={formState.subject} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white" placeholder="Subject" />
                  </div>
                  <div className="form-group md:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea id="message" name="message" value={formState.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white resize-none" placeholder="Your Message"></textarea>
                  </div>
                  <div className="form-group md:col-span-2">
                    <button type="submit" disabled={isSubmitting} className={`w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-purple-500/20'}`}>
                      {isSubmitting ? <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </> : <>
                          <SendIcon size={20} />
                          Send Message
                        </>}
                    </button>
                  </div>
                </div>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Contact;