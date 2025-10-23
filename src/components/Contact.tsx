// ...existing code...
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as
  | string
  | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as
  | string
  | undefined;
const AUTOREPLY_TEMPLATE_ID = import.meta.env
  .VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID as string | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as
  | string
  | undefined;

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (PUBLIC_KEY) {
      // initialize EmailJS once with your public key
      try {
        emailjs.init(PUBLIC_KEY);
      } catch (e) {
        console.warn("EmailJS init failed", e);
      }
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Validate env variables
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error(
        "Email service not configured. Sending via mail client instead."
      );
      // fallback mailto
      const mailto = `mailto:subhashyadav98146@gmail.com?subject=${encodeURIComponent(
        formData.subject || "Contact from portfolio"
      )}&body=${encodeURIComponent(
        `${formData.name}\n\n${formData.message}\n\n(${formData.email})`
      )}`;
      window.open(mailto, "_blank");
      return;
    }

    setIsSubmitting(true);
    setIsSuccess(false);

    // match the template variables you defined in EmailJS dashboard
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: "Subhash Yadav",
      reply_to: formData.email,
    };

    try {
      // use emailjs.send (we initialized with PUBLIC_KEY above)
      const resp = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
      // emailjs returns { status: 200, text: 'OK' } on success
      console.debug("EmailJS success:", resp);
      setIsSuccess(true);
      toast.success("Message sent successfully! Auto-reply has been sent.");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // optional: send auto-reply if you have a separate template
      if (AUTOREPLY_TEMPLATE_ID) {
        try {
          await emailjs.send(SERVICE_ID, AUTOREPLY_TEMPLATE_ID, {
            to_name: formData.name,
            to_email: formData.email,
            from_name: "Subhash Yadav",
          });
        } catch (arErr) {
          console.warn("Auto-reply failed", arErr);
        }
      }

      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error: any) {
      // EmailJS returns HTTP 422 for unprocessable entity (usually invalid template or missing template variables)
      console.error("EmailJS Error:", error);

      // Attempt to surface HTTP status if available
      const status =
        error?.status ||
        error?.statusCode ||
        (error && error.text && /422/.test(error.text) ? 422 : null);

      if (status === 422) {
        toast.error(
          "Failed to send (EmailJS 422). Check your service/template IDs and that your EmailJS template uses the exact variable names: from_name, from_email, subject, message."
        );
      } else {
        toast.error(
          "Failed to send message. Please try again later or email directly."
        );
      }

      // Helpful console info for debugging
      try {
        // if error has text/body, print it
        if (error && error.text) {
          console.debug("EmailJS response body:", error.text);
        }
      } catch (e) {
        // ignore
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "subhashyadav98146@gmail.com",
      href: "mailto:subhashyadav98146@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6283844258",
      href: "tel:+916283844258",
    },
    { icon: MapPin, label: "Location", value: "India", href: null },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Acrto3Hil3",
      label: "GitHub",
      bgColor: "bg-slate-700",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/subhash-yadav-7536651b7",
      label: "LinkedIn",
      bgColor: "bg-blue-600",
    },
    {
      icon: Mail,
      href: "mailto:subhashyadav98146@gmail.com",
      label: "Email",
      bgColor: "bg-red-600",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 min-h-screen"
    >
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something
            amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <Card className="p-8 border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Contact Information
              </h3>
              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-700`}
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-medium text-white hover:text-cyan-400 transition-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium text-white">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-5 text-white">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 rounded-xl ${social.bgColor} flex items-center justify-center shadow-lg hover:scale-110 hover:-translate-y-1 transition-all duration-300`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-white" />
                  </a>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <Card className="p-8 border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-white"
                    >
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-white"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-white"
                  >
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-white"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full py-4 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      Sending...
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle2 className="w-6 h-6" />
                      Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
// ...existing code...
