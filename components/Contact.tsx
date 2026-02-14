import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Animate from './Animate';
import Notification, { NotificationType } from './Notification';

interface ContactProps {
    heading?: string;
    address?: string;
    email?: string;
    calendlyLink?: string;
    formHeading?: string;
}

const Contact: React.FC<ContactProps> = ({
    heading,
    address = "33 Rue La Fayette, 75009 Paris, France",
    email = "contact@birdandco.fr",
    calendlyLink = "https://calendly.com/contact-birdandco/30min",
    formHeading
}) => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        organization: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    // Notification State
    const [notification, setNotification] = useState<{
        isVisible: boolean;
        message: string;
        type: NotificationType;
    }>({
        isVisible: false,
        message: '',
        type: 'success'
    });

    const showNotification = (message: string, type: NotificationType) => {
        setNotification({
            isVisible: true,
            message,
            type
        });
    };

    const closeNotification = () => {
        setNotification(prev => ({ ...prev, isVisible: false }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: t('contact:emailSubject', { name: formData.name }),
                    _template: "table"
                })
            });

            const result = await response.json();

            if (result.success === "true" || response.ok) {
                showNotification(t('contact:notifications.success'), 'success');
                setFormData({
                    name: '',
                    organization: '',
                    email: '',
                    message: ''
                });
            } else {
                console.error("Form submission failed", result);
                showNotification(t('contact:notifications.error'), 'error');
            }
        } catch (error) {
            console.error("Form submission error", error);
            showNotification(t('contact:notifications.error'), 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="bg-white grid min-h-screen relative">
            <Notification 
                message={notification.message}
                type={notification.type}
                isVisible={notification.isVisible}
                onClose={closeNotification}
            />
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left Column */}
                <div className="relative bg-cover bg-center text-gray-900 p-8 md:p-12 lg:p-16 flex flex-col justify-center min-h-[400px] md:min-h-[500px]">
                    <div className="absolute inset-0 bg-[#EBE5F0]"></div>
                    <div className="relative z-10">
                        <Animate variant="pop" delay={200}>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#27013D]">{heading || t('contact:heading')}</h2>
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
                                {t('common:cta.discussProjects')}
                            </a>
                        </Animate>
                    </div>
                </div>

                {/* Right Column (Form) */}
                <div className="bg-gray-100 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <Animate variant="pop">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#27013D] mb-10">{formHeading || t('contact:formHeading')}</h2>
                    </Animate>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mb-10">
                            <Animate variant="pop" delay={100}>
                                <div>
                                    <label htmlFor="name" className="text-base text-gray-500 block mb-1">{t('contact:labels.name')}</label>
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
                                    <label htmlFor="organization" className="text-base text-gray-500 block mb-1">{t('contact:labels.organization')}</label>
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
                                <label htmlFor="email" className="text-base text-gray-500 block mb-1">{t('contact:labels.email')}</label>
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
                                <label htmlFor="message" className="text-base text-gray-500 block mb-1">{t('contact:labels.message')}</label>
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
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className={`bg-[#27013D] text-white px-8 py-3 rounded-full font-semibold transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#1c0e2a]'}`}
                                >
                                    {isSubmitting ? t('common:cta.sending') : t('common:cta.send')}
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
