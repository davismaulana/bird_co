
import React from 'react';
import Animate from './Animate';

const Contact: React.FC = () => {
    return (
        <section id="contact">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div 
                    className="bg-[#E9E4F0] p-8 sm:p-12 md:p-16 flex flex-col justify-center min-h-[500px] lg:min-h-0"
                >
                    <div>
                        <Animate variant="pop" delay={200}>
                            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-8 text-[#27013D]">Contact</h2>
                        </Animate>
                        <Animate variant="pop" delay={300}>
                            <p className="text-lg text-gray-900 mb-4">33 Rue La Fayette, 75009 Paris, France</p>
                        </Animate>
                        <Animate variant="pop" delay={400}>
                            <p className="text-lg text-gray-900 mb-8"><a href="mailto:contact@birdandco.fr" className="hover:text-[#27013D] underline">contact@birdandco.fr</a></p>
                        </Animate>
                        <Animate variant="pop" delay={500}>
                            <a 
                                href="https://calendly.com/contact-birdandco/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-[#27013D] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1c0e2a] transition-transform hover:scale-105"
                            >
                                Réserver une consultation
                            </a>
                        </Animate>
                    </div>
                </div>
                <div className="bg-[#F4F2F8] p-8 sm:p-12 md:p-16 flex flex-col justify-center">
                    <Animate variant="pop">
                        <h2 className="text-2xl lg:text-3xl font-bold text-[#27013D] mb-4">Laissez-nous un message</h2>
                    </Animate>
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mb-10">
                            <Animate variant="pop" delay={100}>
                                <div>
                                    <label htmlFor="name" className="text-sm text-gray-800 block mb-1">Prénom Nom</label>
                                    <input type="text" id="name" className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none focus:border-[#27013D] transition-colors text-gray-900"/>
                                </div>
                            </Animate>
                             <Animate variant="pop" delay={200}>
                                <div>
                                    <label htmlFor="company" className="text-sm text-gray-800 block mb-1">Votre entreprise</label>
                                    <input type="text" id="company" className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none focus:border-[#27013D] transition-colors text-gray-900"/>
                                </div>
                            </Animate>
                        </div>
                        <Animate variant="pop" delay={300}>
                            <div className="mb-10">
                                <label htmlFor="email" className="text-sm text-gray-800 block mb-1">E-mail *</label>
                                <input type="email" id="email" required className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none focus:border-[#27013D] transition-colors text-gray-900"/>
                            </div>
                        </Animate>
                        <Animate variant="pop" delay={400}>
                            <div className="mb-12">
                                <label htmlFor="question" className="text-sm text-gray-800 block mb-1">Posez vos questions *</label>
                                <textarea id="question" rows={2} required className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none focus:border-[#27013D] transition-colors resize-none text-gray-900"></textarea>
                            </div>
                        </Animate>
                        <Animate variant="pop" delay={500}>
                            <div>
                                <button type="submit" className="bg-[#27013D] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1c0e2a] transition-colors">
                                    Envoyer
                                </button>
                            </div>
                        </Animate>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact;