import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MailIcon, MapPinIcon, SendIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      subject: formState.subject,
      message: formState.message,
      time: new Date().toLocaleString()
    };

    try {
      await emailjs.send(
        'service_d3sfjbk', 
        'template_nlmku1l', 
        templateParams,
        'CPHO9ZN9gKtGPH9ml'   
      );

      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch {
      alert('Failed to send email. Try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 24px rgba(169,23,10,0.3)",
      color: "#a9170a",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="contact" className="py-20 px-4 relative bg-[#a9170a]/70">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#fffde8]">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#fffde8] to-[#B8B1A8] mx-auto mb-6"></div>
          <p className="mb-4 text-[#fffde8]">
            I build cool stuff — from DeFi dapps and meme projects to whatever's fun and fresh.
          </p>
          <p className="text-[#fffde8]">
            Got a project in mind or wanna collab? Hit me up and I'll get back to you ASAP.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="md:col-span-1"
          >
            {[{
              Icon: MailIcon,
              label: "Email",
              value: "eng.nazrizan@gmail.com",
              isEmail: true
            }, {
              Icon: MapPinIcon,
              label: "Location",
              value: "Kozhikode, Kerala, India"
            }].map(({ Icon, label, value, isEmail }) => (
              <motion.div
                key={label}
                variants={itemVariants}
                whileHover="hover"
                className="bg-[#fffde8] p-6 rounded-xl shadow-lg mb-6"
              >
                <div className="flex text-[#a9170a] items-start">
                  <div className="bg-[#a9170a]/20 p-3 rounded-lg mr-4">
                    <Icon className="text-[#a9170a]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">{label}</h3>
                    {isEmail ? (
                      <a 
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(value)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#a9170a] underline"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-[#a9170a]">{value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-[#fffde8] p-8 rounded-xl shadow-lg">
              {isSubmitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                  <div className="bg-green-500/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <svg className="h-10 w-10 text-[#B8B1A8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['name', 'email', 'subject'].map((field) => (
                    <div key={field} className={`form-group ${field === 'subject' ? 'md:col-span-2' : ''}`}>
                      <label htmlFor={field} className="block text-sm font-medium text-[#a9170a] mb-1 capitalize">
                        {field}
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        id={field}
                        name={field}
                        value={(formState as any)[field]}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#dbd5ce] border border-[#a9170a] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#a9170a] text-black"
                        placeholder={`Your ${field}`}
                      />
                    </div>
                  ))}
                  <div className="form-group md:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-[#a9170a] mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-[#dbd5ce] border border-[#a9170a] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#a9170a] text-black resize-none"
                      placeholder="Your Message"
                    />
                  </div>
                  <div className="form-group md:col-span-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full px-6 py-3 bg-gradient-to-r from-[#a9170a] to-[#831010] text-[#fffde8] font-medium rounded-lg flex items-center justify-center gap-2 transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#a9170a]/90'}`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-[#a9170a]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <SendIcon size={20} />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
