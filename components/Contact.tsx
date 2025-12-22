import React, { useState } from 'react';
import Animate from './Animate';

interface ContactProps {
    heading?: string;
    address?: string;
    email?: string;
    calendlyLink?: string;
    formHeading?: string;
}

const Contact: React.FC<ContactProps> = ({
    heading = "Vous avez des questions",
    address = "33 Rue La Fayette, 75009 Paris, France",
    email = "contact@birdandco.fr",
    calendlyLink = "https://calendly.com/contact-birdandco/30min",
    formHeading = "Laissez-nous un message"
}) => {
    const [formData, setFormData] = useState({
        name: '',
        organization: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // In a real application, you would handle form submission here,
        // e.g., send the data to a server or an email service.
        console.log('Form submitted:', formData);
        alert('Merci pour votre message ! Nous vous recontacterons bientôt.');
        setFormData({
            name: '',
            organization: '',
            email: '',
            message: ''
        });
    };

    return (
        <section id="contact" className="bg-white grid min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left Column */}
                <div className="relative bg-cover bg-center text-gray-900 p-8 md:p-12 lg:p-16 flex flex-col justify-center min-h-[400px] md:min-h-[500px]">
                    <div className="absolute inset-0 bg-[#EBE5F0]"></div>
                    <div className="relative z-10">
                        <Animate variant="pop" delay={200}>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#27013D]">{heading}</h2>
                        </Animate>
                        <Animate variant="pop" delay={300}>
                            <p className="text-base text-gray-700 mb-4">{address}</p>
                        </Animate>
                        <Animate variant="pop" delay={400}>
                            <p className="text-base text-gray-700 mb-8">
                                <a href={`mailto:${email}`} className="hover:text-black underline">
                                    {email}
                                </a>
                            </p>
                        </Animate>
                        <Animate variant="pop" delay={500}>
                            <a
                                href={calendlyLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-[#27013D] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1c0e2a] transition-all hover:scale-105"
                            >
                                Réserver une consultation
                            </a>
                        </Animate>
                    </div>
                </div>

                {/* Right Column (Form) */}
                <div className="bg-gray-100 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <Animate variant="pop">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#27013D] mb-10">{formHeading}</h2>
                    </Animate>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mb-10">
                            <Animate variant="pop" delay={100}>
                                <div>
                                    <label htmlFor="name" className="text-base text-gray-500 block mb-1">Prénom Nom</label>
                                    <input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#27013D] transition-colors text-gray-900"
                                        type="text"
                                        autoComplete="name"
                                    />
                                </div>
                            </Animate>
                            <Animate variant="pop" delay={200}>
                                <div>
                                    <label htmlFor="organization" className="text-base text-gray-500 block mb-1">Votre entreprise</label>
                                    <input
                                        id="organization"
                                        name="organization"
                                        value={formData.organization}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#27013D] transition-colors text-gray-900"
                                        type="text"
                                        autoComplete="organization"
                                    />
                                </div>
                            </Animate>
                        </div>
                        <Animate variant="pop" delay={300}>
                            <div className="mb-10">
                                <label htmlFor="email" className="text-base text-gray-500 block mb-1">E-mail *</label>
                                <input
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#27013D] transition-colors text-gray-900"
                                    type="email"
                                    autoComplete="email"
                                />
                            </div>
                        </Animate>
                        <Animate variant="pop" delay={400}>
                            <div className="mb-12">
                                <label htmlFor="message" className="text-base text-gray-500 block mb-1">On vous écoute *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={2}
                                    required
                                    className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#27013D] transition-colors resize-none text-gray-900"
                                ></textarea>
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
    );
};

export default Contact;