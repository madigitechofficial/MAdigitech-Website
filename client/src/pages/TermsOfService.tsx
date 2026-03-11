import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background pt-40 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-8xl font-display font-black text-white mb-12 uppercase tracking-tighter">
            Terms of <span className="text-accent italic">Service</span>
          </h1>

          <div className="space-y-8 text-muted-foreground leading-relaxed font-light text-lg">
            <section>
              <h2 className="text-2xl font-black text-white mb-4 tracking-widest">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using MAdigitech’s website and services, you
                agree to comply with these Terms of Service, all applicable
                laws, and regulations. You also confirm that you are responsible
                for following any local laws relevant to your use of our
                website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white mb-4 tracking-widest">
                2. Use of Website
              </h2>
              <p>
                You are granted permission to view and use the content on
                MAdigitech’s website for personal, non-commercial purposes only.
                Any other use, including reproduction, modification,
                distribution, or commercial use, is strictly prohibited unless
                authorized in writing by MAdigitech.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white mb-4 tracking-widest">
                3. Intellectual Property
              </h2>
              <p>
                All materials, designs, code, and content on this website are
                the property of MAdigitech. Unauthorized use may violate
                copyright, trademark, and other laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white mb-4 tracking-widest">
                4. Disclaimer
              </h2>
              <p>
                The content and materials on this website are provided “as is.”
                MAdigitech makes no warranties, expressed or implied, regarding
                the accuracy, reliability, or suitability of the information or
                services provided. We disclaim all implied warranties, including
                fitness for a particular purpose, merchantability, and
                non-infringement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white mb-4 tracking-widest">
                5. Limitations of Liability
              </h2>
              <p>
                MAdigitech and its affiliates are not liable for any damages
                arising from the use or inability to use this website, including
                loss of data, profits, or business interruptions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white mb-4 tracking-widest">
                6. Changes to Terms
              </h2>
              <p>
                We may update these Terms from time to time to reflect changes
                in our services, legal requirements, or best practices. The most
                current version will always be available on our website.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
