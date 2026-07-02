import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="lg:px-12 px-4" id="contact">
      <div className="mb-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4">
          Get In Touch
        </p>
        <h2 className="md:text-5xl text-4xl text-headingColor font-bold">
          Contact Me
        </h2>
        <p className="mt-5 text-body max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I&apos;d love to hear from you! 
          Reach out directly through any of the options below.
        </p>
      </div>

      <div className="mx-auto mb-20 max-w-4xl">
        <div className="surface-card space-y-6 p-6 lg:p-8">
          <div>
            <h3 className="text-2xl font-bold text-text-primary">Direct Contact</h3>
            <p className="mt-3 text-text-secondary">
              Prefer direct contact? You can reach me through email, phone, or WhatsApp.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <a
              href="mailto:hasnath.tamim333@gmail.com"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <FaEnvelope />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.28em] text-text-tertiary">Email</span>
                <span className="block text-sm font-medium text-text-primary">hasnath.tamim333@gmail.com</span>
              </span>
            </a>

            <a
              href="tel:+8801756401520"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <FaPhone />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.28em] text-text-tertiary">Phone</span>
                <span className="block text-sm font-medium text-text-primary">+880 1756401520</span>
              </span>
            </a>

            <a
              href="https://wa.me/8801756401520"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <FaWhatsapp />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.28em] text-text-tertiary">WhatsApp</span>
                <span className="block text-sm font-medium text-text-primary">Message me directly</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
