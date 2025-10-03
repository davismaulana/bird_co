
import React from 'react';
import Animate from './Animate';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="bg-white py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <Animate variant="pop">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-1 bg-gradient-to-r from-[#27013D] to-[#6D0037] rounded-full"></div>
                  </div>
                </Animate>
                <Animate variant="pop" delay={100}>
                    <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-900">
                        Vous avez d'autres&nbsp;<span className="gradient-text">questions&nbsp;?</span>
                    </h2>
                </Animate>
                <Animate variant="pop" delay={200}>
                    <p className="mt-4 text-sm text-gray-800 max-w-2xl mx-auto">
                        Notre équipe est à votre disposition pour discuter de vos projets et répondre à toutes vos interrogations.
                    </p>
                </Animate>
                <Animate variant="pop" delay={300}>
                    <div className="mt-8">
                        <a
                          href="https://calendly.com/contact-birdandco/30min"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-[#27013D] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#1c0e2a] transition-transform hover:scale-105 text-sm"
                        >
                          Échanger avec un bras droit
                        </a>
                    </div>
                </Animate>
            </div>
        </section>
    );
};

export default Contact;
