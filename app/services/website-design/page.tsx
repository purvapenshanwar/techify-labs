'use client';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Layers, Layout, ShoppingBag } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 lg:pt-32 lg:pb-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn}>
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
              Professional Solutions
            </span>
            <h1 className="mt-4 text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Website Design <br />
              <span className="text-blue-600">That Converts.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              We build websites that work like a business tool, not just an online brochure. 
              Focused on speed, SEO-ready foundation, and mobile-first design.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                Get a Free Audit <ArrowRight size={18} />
              </button>
              <button className="px-8 py-4 border border-slate-200 text-slate-900 rounded-full font-bold hover:bg-slate-50 transition-all">
                View Our Work
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[400px] bg-slate-100 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Replace with your service-specific image/mockup */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
               <Layout size={120} className="text-blue-600/20" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid (The Techeasify Style) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Why Choose Our Service?</h2>
          <p className="text-slate-600 mt-4">Everything you need to grow your digital presence.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Mobile First', desc: 'Optimized for every device from day one.', icon: <Layers /> },
            { title: 'SEO Ready', desc: 'Clean code that search engines love to rank.', icon: <CheckCircle /> },
            { title: 'Fast Loading', desc: 'Built with Next.js for lightning-fast speeds.', icon: <ArrowRight /> },
          ].map((feature, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-900 py-24 px-6 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our 4-Step Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {['Discovery', 'Design', 'Development', 'Launch'].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-black text-white/10 absolute -top-8 -left-4">0{i+1}</div>
                <h4 className="text-xl font-bold mb-2 relative z-10">{step}</h4>
                <p className="text-slate-400 text-sm">We map key pages and user flow to ensure perfect results.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}