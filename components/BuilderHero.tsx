import React from 'react';

interface BuilderHeroProps {
    title?: string;
    description?: string;
    image?: string;
}

export const BuilderHero: React.FC<BuilderHeroProps> = ({ title, description, image }) => {
    return (
        <div className="relative bg-gray-900 text-white overflow-hidden">
            {image && (
                <div className="absolute inset-0">
                    <img
                        src={image}
                        alt={title || 'Hero background'}
                        className="w-full h-full object-cover opacity-50"
                    />
                </div>
            )}
            <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    {title || 'Default Title'}
                </h1>
                <p className="mt-6 text-xl text-gray-300 max-w-3xl">
                    {description || 'Default description text goes here. This is a placeholder.'}
                </p>
            </div>
        </div>
    );
};
