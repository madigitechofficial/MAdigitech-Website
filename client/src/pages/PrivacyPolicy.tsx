import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background pt-40 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-8xl font-display font-black text-white mb-12 uppercase tracking-tighter">
            Privacy <span className="text-accent italic">Policy</span>
          </h1>

          <div className="space-y-8 text-muted-foreground leading-relaxed font-light text-lg">
            <section>
              <h2 className="text-2xl font-black text-white mb-4 tracking-widest">
                1. Introduction
              </h2>
              <p>
                At MAdigitech, your privacy matters. We are committed to
                protecting the personal information you share with us and being
                transparent about how we collect, use, and store it. This policy
                explains your rights and how we handle your data when you use
                our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white mb-4 tracking-widest">
                2. Data We Collect
              </h2>
              <p>
                We may collect personal information you provide directly, as
                well as data automatically collected when you use our website.
                This includes:
                <br />
                • Identity & Contact Data: Name, email address, company, or
                other identifiers.
                <br />
                • Technical Data: IP address, browser type, device information,
                and website usage.
                <br />
                • Usage & Analytics Data: How you interact with our site, pages
                visited, and engagement.
                <br />
                • Marketing Data: Preferences andcommunications you choose to
                receive from us.
                <br />
                We only collect the data necessary to provide our services and
                improve your experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white mb-4 tracking-widest">
                3. How We Use Your Data
              </h2>
              <p>
                We use your data responsibly, only when legally allowed or
                necessary for our legitimate interests. Common purposes include:{" "}
                <br />
                • Delivering the services you request or respond to inquiries.
                <br />
                • Improving our website, offerings, and customer experience.
                <br />
                • Sending communications and updates you have opted into.
                <br />
                • Ensuring security and preventing unauthorized access or
                misuse.
                <br />
                We never sell your personal data to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white mb-4 tracking-widest">
                4. Data Security
              </h2>
              <p>
                Your information is protected with industry-standard security
                measures to prevent unauthorized access, loss, or misuse. We
                regularly review and update our security practices to safeguard
                your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white mb-4 tracking-widest">
                5. Your Legal Rights
              </h2>
              <p>
                You have rights under data protection laws, including the right
                to:
                <br />
                • Access, correct, or delete your personal data.
                <br />
                • Restrict or object to certain processing.
                <br />
                • Request data portability.
                <br />
                • Withdraw consent where processing is based on it.
                <br />
                To exercise your rights, or if you have questions about how we
                handle your data, contact us at hello@madigitech.com .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white mb-4 tracking-widest">
                6. Updates to This Policy
              </h2>
              <p>
                We may update this policy from time to time to reflect changes
                in our practices or legal requirements. The latest version will
                always be available on our website.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
