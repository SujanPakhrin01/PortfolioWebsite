import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  User,
  ArrowRight,
  Heart,
  Instagram,
} from "lucide-react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");

    const formPayload = new FormData(e.target);
    formPayload.append("access_key", "ab04f197-2a8c-40db-8a6b-3e88f7e55bc3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formPayload,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setIsSubmitted(true);
      e.target.reset();
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => {
        setIsSubmitted(false);
        setResult("");
      }, 3000);
    } else {
      setResult("Error. Please try again.");
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Floating animation
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div id="contact" className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white py-20 px-4 relative overflow-hidden">
      {/* background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle floating shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-blue-500/3 rounded-full blur-3xl"></div>

        {/* moving particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/30 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-purple-400/40 rounded-full"
            style={{
              right: `${5 + i * 15}%`,
              top: `${30 + (i % 4) * 18}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 2.5 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.6,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's collaborate on your next project. I'm always open to
            discussing new opportunities.
          </p>

          {/* Animated decorative element */}
          <motion.div animate={floatingAnimation} className="flex justify-center mt-6">
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4 text-white">
                Let's Connect
              </h2>
              <p className="text-gray-400 leading-relaxed">
                I'm currently available for freelance work and open to full-time
                opportunities. If you have a project that you want to get
                started or think you need my help with something, then get in
                touch.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              {[
                {
                  icon: <Mail className="w-5 h-5" />,
                  label: "Email",
                  value: "sujanprogrammer@gmail.com",
                  color: "text-indigo-400",
                  bg: "bg-indigo-500/10",
                },
                {
                  icon: <Phone className="w-5 h-5" />,
                  label: "Phone",
                  value: "+977 9762980864",
                  color: "text-purple-400",
                  bg: "bg-purple-500/10",
                },
                {
                  icon: <MapPin className="w-5 h-5" />,
                  label: "Location",
                  value: "Kathmandu, Nepal",
                  color: "text-blue-400",
                  bg: "bg-blue-500/10",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 group"
                >
                  <div
                    className={`${item.bg} ${item.color} p-3 rounded-xl transition-all duration-300 group-hover:scale-110`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <p className="text-gray-400 mb-4 text-sm uppercase tracking-wider">
                Follow me on
              </p>
              <div className="flex gap-4">
                {[
                  {
                    icon: <Linkedin className="w-5 h-5" />,
                    color: "hover:text-purple-400",
                    label: "Linkedin",
                    url: "https://www.linkedin.com/in/sujanmakalu/",
                  },
                  {
                    icon: <Instagram className="w-5 h-5" />,
                    color: "hover:text-blue-400",
                    label: "Instagram",
                    url: "https://www.instagram.com/sujanpakhrin01/",
                  },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`bg-white/5 border border-white/10 p-3 rounded-xl text-gray-400 ${item.color} transition-all duration-300 hover:border-white/20 hover:bg-white/10`}
                    aria-label={item.label}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="text-6xl mb-4"
                >
                  🎉
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-400">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
                {result && (
                  <p className="mt-3 text-green-400 text-sm font-medium">
                    {result}
                  </p>
                )}
              </motion.div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-white mb-6">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all duration-300 resize-none"
                    />
                  </div>

                  <motion.button
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                    <motion.div
                      animate={{ x: isHovered ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.button>

                  {/* API result status */}
                  {result && (
                    <p
                      className={`text-center text-sm font-medium mt-2 ${
                        result.includes("Error")
                          ? "text-red-400"
                          : "text-indigo-300"
                      }`}
                    >
                      {result}
                    </p>
                  )}
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;