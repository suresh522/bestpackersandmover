import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {

  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);

  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { toast } = useToast();


  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);

    try {

      await emailjs.sendForm(
        "service_amf0cno",      // your service ID
        "template_xkf1omg",     // your template ID
        formRef.current,
        "bVUNR2EVKs9OJduAi"           // your public key
      );

      setIsSubmitted(true);

      toast({
        title: "Message Sent! ✅",
        description: "We'll get back to you within 30 minutes.",
      });

      formRef.current.reset();

      setTimeout(() => setIsSubmitted(false), 5000);

    } catch (error) {

      toast({
        title: "Failed to send",
        description: "Please call us at 9700067784.",
        variant: "destructive",
      });

    } finally {

      setIsSubmitting(false);

    }
  };


  return (

    <section className="section-padding bg-background">

      <div className="container mx-auto">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >

          <span className="mb-3 inline-block font-display text-sm font-bold tracking-widest text-secondary uppercase">
            Send a Message
          </span>

          <h2 className="font-display text-3xl font-black text-foreground sm:text-4xl lg:text-5xl">
            Get a Free <span className="text-gradient">Quote</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Fill in the form below and we'll get back to you with the best pricing.
          </p>

        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-2xl"
        >

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="rounded-2xl bg-card p-6 sm:p-10 shadow-premium border border-border space-y-6"
          >


            <div className="grid gap-6 sm:grid-cols-2">

              <div>

                <label className="mb-2 block text-sm font-bold">
                  Your Name *
                </label>

                <input
                  name="user_name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full border px-4 py-3 rounded-xl"
                />

              </div>


              <div>

                <label className="mb-2 block text-sm font-bold">
                  Phone Number *
                </label>

                <input
                  name="user_phone"
                  type="tel"
                  required
                  placeholder="Enter your phone number"
                  className="w-full border px-4 py-3 rounded-xl"
                />

              </div>

            </div>



            <div className="grid gap-6 sm:grid-cols-2">

              <input
                name="user_email"
                type="email"
                placeholder="Email"
                className="w-full border px-4 py-3 rounded-xl"
              />

              <input
                name="moving_from"
                type="text"
                placeholder="Moving From"
                className="w-full border px-4 py-3 rounded-xl"
              />

            </div>



            <div className="grid gap-6 sm:grid-cols-2">

              <input
                name="moving_to"
                type="text"
                placeholder="Moving To"
                className="w-full border px-4 py-3 rounded-xl"
              />

              <select
                name="service_type"
                className="w-full border px-4 py-3 rounded-xl"
                required
              >

                <option value="">Select service</option>
                <option value="household">Household Shifting</option>
                <option value="office">Office Relocation</option>
                <option value="vehicle">Vehicle Transport</option>
                <option value="packing">Packing & Unpacking</option>
                <option value="storage">Storage</option>
                <option value="other">Other</option>

              </select>

            </div>



            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your moving requirements..."
              className="w-full border px-4 py-3 rounded-xl"
            />



            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-full gradient-orange px-8 py-4 font-bold text-white"
            >

              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : isSubmitted ? (
                <>
                  <CheckCircle className="h-5 w-5" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Send Message
                </>
              )}

            </button>


          </form>

        </motion.div>

      </div>

    </section>

  );
};

export default ContactForm;
