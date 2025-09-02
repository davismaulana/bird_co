
import React from 'react';

export const BrandLogo: React.FC<{ className?: string }> = ({ className }) => (
    <div className={`flex items-center ${className}`}>
        <span className="text-3xl font-bold tracking-tighter">BIRD&</span>
    </div>
);

export const PaperPlaneIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M58.6667 5.33331L32 32M58.6667 5.33331L42.6667 58.6666L32 32M58.6667 5.33331L5.33334 21.3333L32 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const CfoIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M53.3333 26.6667V16H42.6667" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.6667 37.3333V48H21.3333" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 26.96C17.76 18.9067 24.1867 13.3333 32.2933 13.3333C42.2667 13.3333 50.32 20.1333 52.48 29.3333" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M48 37.04C46.24 45.0933 39.8133 50.6667 31.7067 50.6667C21.7333 50.6667 13.68 43.8667 11.52 34.6667" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const DiagnosticIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M45.1667 27.5C45.1667 36.9371 37.5256 44.5833 28.0833 44.5833C18.6411 44.5833 11 36.9371 11 27.5C11 18.0629 18.6411 10.4167 28.0833 10.4167C37.5256 10.4167 45.1667 18.0629 45.1667 27.5Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M40.1625 40.1542L53 53" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const HandshakeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M53.3333 34.6667L45.3333 26.6667L26.6667 45.3333L32 50.6667C34.4267 53.0933 38.08 53.0933 40.5067 50.6667L53.3333 37.84C54.52 36.6533 54.52 34.72 53.3333 33.5333" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26.6667 45.3333L10.6667 29.3333" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.6667 18.6666L5.33334 32.0000" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M45.3333 26.6667L37.3333 18.6667C34.9067 16.24 31.2533 16.24 28.8267 18.6667L16 31.4933C14.8133 32.68 14.8133 34.6133 16 35.8L21.3333 41.1333" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.6667 16L13.3333 13.3333" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M48 50.6667L50.6667 53.3333" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const GearIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M54.4 34.6667C54.5333 33.8667 54.6667 32.9333 54.6667 32C54.6667 31.0667 54.5333 30.1333 54.4 29.3333L59.7333 25.0667C60 24.8 60.1333 24.4 59.8667 24.1333L53.8667 14.1333C53.6 13.8667 53.2 13.7333 52.8 14L47.0667 16.5333C45.6 15.4667 43.8667 14.6667 42.1333 14.1333L41.0667 8C41.0667 7.53333 40.6667 7.2 40.2667 7.2H23.7333C23.3333 7.2 22.9333 7.53333 22.9333 8L21.8667 14.1333C20.1333 14.6667 18.4 15.4667 16.9333 16.5333L11.2 14C10.8 13.7333 10.4 13.8667 10.1333 14.1333L4.13333 24.1333C3.86667 24.4 4 24.8 4.26667 25.0667L9.6 29.3333C9.46667 30.1333 9.33333 31.0667 9.33333 32C9.33333 32.9333 9.46667 33.8667 9.6 34.6667L4.26667 38.9333C4 39.2 3.86667 39.6 4.13333 39.8667L10.1333 49.8667C10.4 50.1333 10.8 50.2667 11.2 50L16.9333 47.4667C18.4 48.5333 20.1333 49.3333 21.8667 49.8667L22.9333 56C22.9333 56.4667 23.3333 56.8 23.7333 56.8H40.2667C40.6667 56.8 41.0667 56.4667 41.0667 56L42.1333 49.8667C43.8667 49.3333 45.6 48.5333 47.0667 47.4667L52.8 50C53.2 50.2667 53.6 50.1333 53.8667 49.8667L59.8667 39.8667C60.1333 39.6 60 39.2 59.7333 38.9333L54.4 34.6667ZM32 42.6667C26.1333 42.6667 21.3333 37.8667 21.3333 32C21.3333 26.1333 26.1333 21.3333 32 21.3333C37.8667 21.3333 42.6667 26.1333 42.6667 32C42.6667 37.8667 37.8667 42.6667 32 42.6667Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MissionsCompletedIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="10.6667" y="16" width="42.6667" height="32" rx="5.33333" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26.6667 16V10.6667C26.6667 7.99998 28.8933 5.33331 32 5.33331C35.1067 5.33331 37.3333 7.99998 37.3333 10.6667V16" stroke="#6D0037" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.6667 26.6667H53.3333" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const TrendingUpIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M58.6667 16L37.3333 37.3333L26.6667 26.6667L5.33334 48" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M45.3333 16H58.6667V29.3333" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const WrenchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M42.6667 13.3333C51.2 13.3333 56.5333 22.1333 52.8 29.3333L29.3333 52.8C22.1333 56.5333 13.3333 51.2 13.3333 42.6667C13.3333 35.2 16.5333 28.2667 21.3333 24L16 18.6667L24 10.6667L29.3333 16C33.6 14.4 38.1333 13.3333 42.6667 13.3333Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.6667 40L24 53.3333" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Fix: Moved CalculatorIcon component before its usage.
export const CalculatorIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="13.3333" y="8" width="37.3333" height="48" rx="5.33333" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21.3333 42.6667H42.6667" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21.3333 21.3333H24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 21.3333H34.6667" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M40 21.3333H42.6667" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21.3333 32H24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 32H34.6667" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M40 32H42.6667" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const StrategiePerfIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg preserveAspectRatio="xMidYMid meet" viewBox="20.051 39 160.061 122.147" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g>
            <path d="M178.6 39.4c-.7-.4-1.4-.5-2.2-.3-.5-.1-1.1-.1-1.6 0L22 89.4c-1.5.5-2.3 2.1-1.8 3.6.3.8.9 1.5 1.7 1.8l42.9 16.8 13.4 45.3c.4 1.3 1.6 2.2 3 2.1.8-.1 1.5-.4 2-1l19.9-23.6 42.9 26.3c.8.5 1.7.6 2.6.2.9-.3 1.5-1.1 1.7-2l29.8-116.2c.1-1.3-.4-2.6-1.5-3.3zM70.5 110.7l79.2-49.3L83.5 118c-.2.2-.4.5-.6.7-.2.3-.3.7-.4 1.1L79.7 142l-9-30.4-.2-.9zm83.3-58.6l-87 54.1-35.4-13.9 122.4-40.2zM87.7 125l10.2 6.3-13 15.4c.1 0 2.8-21.7 2.8-21.7zm2.6-5.2L172 50l-26.5 103.6-55.2-33.8z" fill="#6D0037"></path>
        </g>
    </svg>
);

export const CfoPartTimeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg preserveAspectRatio="xMidYMid meet" viewBox="33 33 133.333 133.333" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g>
            <path d="M47.167 74.667h19.166V83H33V49.667h8.333v17.5C53 46.333 75.5 33 99.667 33c36.666 0 66.666 30 66.666 66.667H158c0-32.5-25.833-58.334-58.333-58.334-22.5 0-43.334 13.334-52.5 33.334Zm105 50H133v-8.334h33.333v33.334H158v-17.5c-11.667 20.833-34.167 34.166-58.333 34.166C63 166.333 33 136.333 33 99.667h8.333c0 32.5 25.834 58.333 58.334 58.333 22.5 0 42.5-13.333 52.5-33.333Z" fillRule="evenodd" fill="currentColor"></path>
        </g>
    </svg>
);

export const DiagnosticRestructurationIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg preserveAspectRatio="xMidYMid meet" viewBox="19.899 19.999 160.201 160.001" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g>
            <path d="M107 105.7c-.9 1.9-5.7 5.7-10.7 5.7-13.9 0-14.1 17.5-14.1 18.4l-.2 26.7c.1 9.9 8.2 17.9 18.1 17.8 9.8-.1 17.7-8 17.8-17.8l.1-38.2h5.7l-.1 38.2c-.1 13.1-10.8 23.6-23.8 23.5-12.9-.1-23.4-10.6-23.5-23.5l.2-26.8c0-9.3 4-24.3 19.6-24.1 3.4 0 8.2-3.7 8.6-5.2l2.3 5.3z" fill="#6D0037"></path>
            <path d="M105.7 93c1.9.9 5.7 6.6 5.7 11.7 0 13.9 17.5 14.1 18.4 14.1l26.8.2c9.9-.1 17.9-8.2 17.8-18.1-.1-9.8-8-17.7-17.8-17.8l-38.2-.1v-5.7l38.2.1c13.1.1 23.6 10.8 23.5 23.8-.1 12.9-10.6 23.4-23.5 23.5l-26.8-.2c-9.3 0-24.3-4-24.1-19.6 0-3.4-3.7-9.1-5.2-9.6l-2.7-1 7.9-1.3z" fill="#27013D"></path>
            <path d="M92.1 94.3c.9-1.9 6.6-5.7 11.7-5.7 13.9 0 14.1-17.5 14.1-18.4l.2-26.8c-.1-9.9-8.2-17.9-18.1-17.8-9.8.1-17.7 8-17.8 17.8L82 81.7h-5.7l.1-38.2c.1-13.1 10.8-23.6 23.8-23.5 12.9.1 23.4 10.6 23.5 23.5l-.2 26.8c0 9.3-4 24.3-19.6 24.1-3.4 0-9.1 3.7-9.6 5.2l-2.2-5.3z" fill="#6D0037"></path>
            <path d="M92.1 105.9c-2.1-2.4-3.3-5.5-3.4-8.7 0-13.9-17.5-14.1-18.4-14.1l-26.8-.2c-9.9.1-17.9 8.2-17.8 18.1.1 9.8 8 17.7 17.8 17.8l34.6.1-1.4 5.7-33.3-.1c-13.1-.1-23.6-10.8-23.5-23.8.1-12.9 10.6-23.4 23.5-23.5l26.8.2c9.3 0 24.3 4 24.1 19.6 0 2.9 2.6 6.7 4.3 8.1.4.2-5.7 1.8-6.5.8z" fill="#27013D"></path>
        </g>
    </svg>
);

export const ServicesMAIcon: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://images2.imgbox.com/34/e7/fCSoNoGd_o.png" alt="Services M&A Icon" className={className} />
);

export const services = [
  {
    slug: 'pilotage-planification',
    icon: <StrategiePerfIcon />,
    title: "Pilotage & Planification",
    subTitle: "Construire",
    description: "Nous construisons les outils indispensables à une gestion financière et opérationnelle optimale.",
    iconClassName: "w-28 h-28",
  },
  {
    slug: 'cfo-part-time',
    icon: <CfoPartTimeIcon />,
    title: "CFO Part-time",
    subTitle: "Structurer",
    description: "Nous vous aidons à structurer votre croissance et à exécuter votre stratégie financière avec un bras-droit dédié à temps partiel.",
    iconClassName: "w-28 h-28",
  },
  {
    slug: 'diagnostic-restructuration',
    icon: <DiagnosticRestructurationIcon />,
    title: "Diagnostic & Restructuration",
    subTitle: "Rassurer",
    description: "Rassurez vos actionnaires et créanciers sur la santé financière de votre activité et votre capacité à la relancer.",
    iconClassName: "w-28 h-28",
  },
  {
    slug: 'services-ma',
    icon: <ServicesMAIcon />,
    title: "Services M&A",
    subTitle: "Faciliter",
    description: "Nous facilitons vos opérations de levées de fonds et de cessions en produisant les documents et analyses indispensables.",
    iconClassName: "w-28 h-28",
  },
];

export const FundsRaisedIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M10.6667 53.3333H53.3333" stroke="#27013D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 42.6667L26.6667 26.6667L40 37.3333L53.3333 16" stroke="#27013D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M53.3333 16V26.6667" stroke="#6D0037" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M53.3333 16H42.6667" stroke="#6D0037" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const ExperienceIcon: React.FC = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 53.3333C43.7733 53.3333 53.3333 43.7733 53.3333 32C53.3333 20.2267 43.7733 10.6666 32 10.6666C20.2267 10.6666 10.6667 20.2267 10.6667 32C10.6667 43.7733 20.2267 53.3333 32 53.3333Z" stroke="#27013D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 21.3333V32L37.3333 37.3333" stroke="#6D0037" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const FoundersIcon: React.FC = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 30C26 27.7909 27.7909 26 30 26H34C36.2091 26 38 27.7909 38 30V34C38 36.2091 36.2091 38 34 38H30C27.7909 38 26 36.2091 26 34V30Z" stroke="#27013D" strokeWidth="3"/>
        <path d="M32 26V22" stroke="#27013D" strokeWidth="3" strokeLinecap="round"/>
        <path d="M32 42V38" stroke="#27013D" strokeWidth="3" strokeLinecap="round"/>
        <path d="M42 52.833C42 48.0445 38.6322 44.204 34.2533 43.468C33.1539 43.2796 31.9567 43.2796 30.8573 43.468C26.4784 44.204 23.1106 48.0445 23.1106 52.833" stroke="#6D0037" strokeWidth="3" strokeLinecap="round"/>
        <path d="M16 23C16 17.4772 20.4772 13 26 13H38C43.5228 13 48 17.4772 48 23" stroke="#6D0037" strokeWidth="3" strokeLinecap="round"/>
    </svg>
);

export const PartnershipIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Background Person */}
        <circle cx="26" cy="29" r="7" stroke="#6D0037" strokeWidth="3" strokeLinecap="round"/>
        <path d="M14 54C14 45.1634 21.1634 38 30 38C32.3071 38 34.4608 38.6483 36.2811 39.7895" stroke="#6D0037" strokeWidth="3" strokeLinecap="round"/>
        {/* Foreground Person */}
        <circle cx="40" cy="24" r="8" stroke="#27013D" strokeWidth="3" strokeLinecap="round"/>
        <path d="M26 54C26 44.0589 33.0589 36 42 36C50.9411 36 58 44.0589 58 54" stroke="#27013D" strokeWidth="3" strokeLinecap="round"/>
    </svg>
);

export const FinancialLeadersIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M32 42C38.6274 42 44 36.6274 44 30C44 23.3726 38.6274 18 32 18C25.3726 18 20 23.3726 20 30C20 36.6274 25.3726 42 32 42Z" stroke="#27013D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 18V10" stroke="#27013D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26 16L32 10L38 16" stroke="#27013D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 52C21 46.4772 25.9249 42 31.5 42H32.5C38.0751 42 43 46.4772 43 52V54H21V52Z" stroke="#6D0037" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26 42L22 46" stroke="#6D0037" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M38 42L42 46" stroke="#6D0037" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const LawyersIcon: React.FC = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 28H52" stroke="#27013D" strokeWidth="3" strokeLinecap="round"/>
        <path d="M32 14V50" stroke="#27013D" strokeWidth="3" strokeLinecap="round"/>
        <path d="M18 28C18 31.3137 15.3137 34 12 34C8.68629 34 6 31.3137 6 28" stroke="#6D0037" strokeWidth="3" strokeLinecap="round"/>
        <path d="M58 28C58 31.3137 55.3137 34 52 34C48.6863 34 46 31.3137 46 28" stroke="#6D0037" strokeWidth="3" strokeLinecap="round"/>
        <path d="M26 50H38" stroke="#27013D" strokeWidth="3" strokeLinecap="round"/>
    </svg>
);

export const AccountantsIcon: React.FC = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M48 54H16C13.7909 54 12 52.2091 12 50V14C12 11.7909 13.7909 10 16 10H48C50.2091 10 52 11.7909 52 14V50C52 52.2091 50.2091 54 48 54Z" stroke="#27013D" strokeWidth="3"/>
        <path d="M22 22H32" stroke="#6D0037" strokeWidth="3" strokeLinecap="round"/>
        <path d="M22 32H42" stroke="#27013D" strokeWidth="3" strokeLinecap="round"/>
        <path d="M22 42H42" stroke="#27013D" strokeWidth="3" strokeLinecap="round"/>
        <path d="M37 22H42" stroke="#6D0037" strokeWidth="3" strokeLinecap="round"/>
        <path d="M39.5 19.5V24.5" stroke="#6D0037" strokeWidth="3" strokeLinecap="round"/>
    </svg>
);

interface MockupProps {
    theme?: 'light' | 'dark';
}

export const FinancialReportMockup: React.FC<MockupProps> = ({ theme = 'light' }) => {
    if (theme === 'dark') {
        return (
            <div className="bg-[#312041] rounded-2xl p-1.5 shadow-2xl w-full max-w-lg mx-auto">
                <div className="bg-[#251834] rounded-xl p-4">
                    <div className="flex space-x-1.5 mb-4">
                        <div className="w-3 h-3 rounded-full bg-[#3F325E]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#3F325E]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#3F325E]"></div>
                    </div>
                    <div className="flex space-x-4">
                        {/* Sidebar */}
                        <div className="w-1/4">
                            <div className="space-y-2">
                                <div className="bg-[#3F325E] rounded h-8 w-full"></div>
                                <div className="bg-[#ED3882] text-white rounded h-8 w-full text-xs font-bold flex items-center justify-center">
                                    Summary
                                </div>
                                <div className="bg-[#3F325E] rounded h-8 w-full"></div>
                                <div className="bg-[#3F325E] rounded h-8 w-full"></div>
                            </div>
                        </div>
                        {/* Main Content */}
                        <div className="w-3/4">
                            <div className="space-y-3 mb-6">
                                <div className="bg-[#3F325E] h-4 w-full rounded"></div>
                                <div className="bg-[#3F325E] h-4 w-full rounded"></div>
                                <div className="bg-[#3F325E] h-4 w-5/6 rounded"></div>
                            </div>
                            <div className="flex items-end space-x-2 h-32 rounded-md p-2 border border-[#3F325E]/50">
                                <div className="bg-[#ED3882] rounded-sm w-1/4 h-[25%]"></div>
                                <div className="bg-[#ED3882] rounded-sm w-1/4 h-[45%]"></div>
                                <div className="bg-[#ED3882] rounded-sm w-1/4 h-[70%]"></div>
                                <div className="bg-[#ED3882] rounded-sm w-1/4 h-[35%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    const baseBg = 'bg-violet-50';
    const border = 'border-violet-200';
    const mutedBg = 'bg-violet-200';
    const highlightBg = 'bg-white';
    const highlightText = 'text-violet-700';
    const barBg = 'bg-violet-400';

    return (
        <div className={`${baseBg} ${border} rounded-2xl shadow-xl p-4 border w-full max-w-lg mx-auto`}>
            <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-violet-200"></div>
                <div className="w-3 h-3 rounded-full bg-violet-200"></div>
                <div className="w-3 h-3 rounded-full bg-violet-200"></div>
            </div>
            <div className="flex space-x-4">
                <div className="w-1/4">
                    <div className="space-y-2">
                        <div className={`${mutedBg} rounded h-6 w-full`}></div>
                        <div className={`${highlightBg} ${highlightText} rounded h-6 w-full text-xs font-bold flex items-center justify-center`}>Summary</div>
                        <div className={`${mutedBg} rounded h-6 w-full`}></div>
                        <div className={`${mutedBg} rounded h-6 w-full`}></div>
                    </div>
                </div>
                <div className="w-3/4">
                    <div className={`${mutedBg} h-8 w-3/4 rounded mb-4`}></div>
                    <div className="space-y-2">
                        <div className={`${mutedBg} h-4 w-full rounded`}></div>
                        <div className={`${mutedBg} h-4 w-5/6 rounded`}></div>
                    </div>
                    <div className={`mt-4 flex items-end space-x-2 h-24 border-violet-200 border rounded-md p-2`}>
                        <div className={`${barBg} rounded-t-sm w-1/4 h-1/3`}></div>
                        <div className={`${barBg} rounded-t-sm w-1/4 h-1/2`}></div>
                        <div className={`${barBg} rounded-t-sm w-1/4 h-3/4`}></div>
                        <div className={`${barBg} rounded-t-sm w-1/4 h-1/2`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const KpiDashboardMockup: React.FC<MockupProps> = ({ theme = 'light' }) => {
    if (theme === 'dark') {
        return (
            <div role="img" aria-label="Exemple de tableau de bord KPI" className="bg-[#312041] rounded-2xl p-1.5 shadow-2xl w-full max-w-lg mx-auto">
                <div className="bg-[#251834] rounded-xl p-4">
                    <div className="flex items-center justify-between mb-4 px-2">
                        <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 rounded-full bg-[#ED3882]"></div>
                            <div className="h-2.5 w-16 bg-[#3F325E] rounded-full"></div>
                        </div>
                        <div className="h-4 w-20 bg-[#3F325E] rounded-md"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-[#3F325E] rounded-lg p-3 space-y-3">
                            <div className="h-3 w-10 bg-[#4D3A63] rounded-full"></div>
                            <div className="h-4 w-16 bg-[#4D3A63] rounded-full"></div>
                        </div>
                        <div className="bg-[#3F325E] rounded-lg p-3 space-y-3">
                            <div className="h-3 w-10 bg-[#4D3A63] rounded-full"></div>
                            <div className="h-4 w-16 bg-[#4D3A63] rounded-full"></div>
                        </div>
                    </div>
                    <div className="rounded-lg p-2">
                        <div className="h-3 w-24 bg-[#3F325E] rounded-full mb-4 ml-1"></div>
                        <div className="h-28 flex items-end justify-between space-x-2" aria-hidden="true">
                            <div className="w-full bg-[#ED3882] rounded-sm h-[40%]"></div>
                            <div className="w-full bg-[#ED3882] rounded-sm h-[75%]"></div>
                            <div className="w-full bg-[#ED3882] rounded-sm h-[30%]"></div>
                            <div className="w-full bg-[#ED3882] rounded-sm h-[60%]"></div>
                            <div className="w-full bg-[#ED3882] rounded-sm h-[70%]"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const baseBg = 'bg-violet-50';
    const border = 'border-violet-200';
    const mutedBg = 'bg-violet-200';
    const cardBg = 'bg-white';
    const strongMutedBg = 'bg-violet-300';
    const barBg = 'bg-pink-400';

    return (
        <div className={`${baseBg} ${border} rounded-2xl shadow-xl p-4 border w-full max-w-lg mx-auto`}>
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                     <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#27013D] to-[#6D0037]"></div>
                     <div className={`${mutedBg} h-4 w-16 rounded`}></div>
                </div>
                <div className={`${mutedBg} h-6 w-24 rounded-full`}></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className={`${cardBg} ${'border-violet-200'} rounded-lg p-3 border`}>
                    <div className={`${mutedBg} h-4 w-12 rounded mb-2`}></div>
                    <div className={`${strongMutedBg} h-8 w-20 rounded`}></div>
                </div>
                <div className={`${cardBg} ${'border-violet-200'} rounded-lg p-3 border`}>
                    <div className={`${mutedBg} h-4 w-16 rounded mb-2`}></div>
                    <div className={`${strongMutedBg} h-8 w-16 rounded`}></div>
                </div>
                <div className={`col-span-2 ${cardBg} ${'border-violet-200'} rounded-lg p-3 border`}>
                    <div className={`${mutedBg} h-4 w-24 rounded mb-3`}></div>
                    <div className="h-24 w-full bg-transparent rounded flex items-end p-2 space-x-2">
                       <div className={`${barBg} flex-1 h-1/2 rounded-t-sm`}></div>
                       <div className={`${barBg} flex-1 h-3/4 rounded-t-sm`}></div>
                       <div className={`${barBg} flex-1 h-1/3 rounded-t-sm`}></div>
                       <div className={`${barBg} flex-1 h-2/3 rounded-t-sm`}></div>
                       <div className={`${barBg} flex-1 h-1/2 rounded-t-sm`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const FieldWorkMockup: React.FC<MockupProps> = ({ theme = 'light' }) => {
    if (theme === 'dark') {
        return (
            <div className="bg-[#312041] rounded-2xl p-1.5 shadow-2xl w-full max-w-lg mx-auto overflow-hidden">
                <div className="bg-[#251834] rounded-xl p-4">
                    <div className="flex space-x-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-[#3F325E]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#3F325E]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#3F325E]"></div>
                    </div>
                    <div className="bg-[#3F325E] w-full h-48 rounded-lg relative flex items-center justify-center">
                        {/* Roads */}
                        <div className="absolute w-full h-1 border-t-2 border-b-2 border-[#4D3A63] top-1/3"></div>
                        <div className="absolute h-full w-1 border-l-2 border-r-2 border-[#4D3A63] left-1/4"></div>
                        <div className="absolute h-full w-1 border-l-2 border-r-2 border-[#4D3A63] left-2/3"></div>

                        {/* Pin */}
                        <div className="relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#ED3882] opacity-20 animate-ping"></div>
                            <div className="w-4 h-4 rounded-full bg-[#ED3882] ring-4 ring-[#ED3882]/50 ring-offset-4 ring-offset-[#3F325E]"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const baseBg = 'bg-violet-50';
    const border = 'border-violet-200';
    const mapBg = 'bg-violet-100';
    const roadColor = 'border-violet-300';
    const pinColor = 'bg-[#6D0037]';
    const pulseColor = 'ring-[#6D0037]';

    return (
        <div className={`${baseBg} ${border} rounded-2xl shadow-xl p-4 border w-full max-w-lg mx-auto overflow-hidden`}>
            <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-violet-200"></div>
                <div className="w-3 h-3 rounded-full bg-violet-200"></div>
                <div className="w-3 h-3 rounded-full bg-violet-200"></div>
            </div>
            <div className={`${mapBg} w-full h-48 rounded-lg relative flex items-center justify-center`}>
                {/* Roads */}
                <div className={`absolute w-full h-1 border-t-2 border-b-2 ${roadColor} top-1/3`}></div>
                <div className={`absolute h-full w-1 border-l-2 border-r-2 ${roadColor} left-1/4`}></div>
                <div className={`absolute h-full w-1 border-l-2 border-r-2 ${roadColor} left-2/3`}></div>

                {/* Pin */}
                <div className="relative">
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full ${pinColor} opacity-20 animate-ping`}></div>
                    <div className={`w-4 h-4 rounded-full ${pinColor} ring-4 ${pulseColor} ring-offset-4 ring-offset-violet-100`}></div>
                </div>
            </div>
        </div>
    );
};

export const WellowLogo: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://static.wixstatic.com/media/7bfd2f_41cbb9b9d5e340d9a25af26860d861b1~mv2.png/v1/fill/w_160,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/wellow_edited.png" alt="Wellow Logo" className={className} />
);

export const RegenSchoolLogo: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://static.wixstatic.com/media/7bfd2f_01fba9e6ecbb414c90a29c40b793f8cb~mv2.png/v1/crop/x_52,y_0,w_1396,h_772/fill/w_179,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/regen%20school_edited_edited.png" alt="Regen School Logo" className={className} />
);

export const PomadLogo: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://static.wixstatic.com/media/7bfd2f_8f755945e31d45fba32951129b040994~mv2.png/v1/fill/w_179,h_107,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/pomad_edited.png" alt="Pomad Logo" className={className} />
);

export const OctoLogo: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://static.wixstatic.com/media/7bfd2f_eff6d7f274f3477393d513ca25459148~mv2.png/v1/fill/w_154,h_154,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7bfd2f_eff6d7f274f3477393d513ca25459148~mv2.png" alt="Octo Logo" className={className} />
);

export const CameroneCapitalLogo: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://static.wixstatic.com/media/7bfd2f_1b1546b30c1a40158136d72a41b42857~mv2.png/v1/crop/x_44,y_0,w_1347,h_368/fill/w_247,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/camerone%20capital_edited.png" alt="Camerone Capital Logo" className={className} />
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

export const HamburgerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const CodeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

export const BeakerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 3h15M6 3v14a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V3M6 9h12"></path>
  </svg>
);

export const BookOpenIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

export const GlobeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

export const GavelIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.23 19.34l-6.1-6.1a2 2 0 0 1 0-2.83l6.1-6.1a2 2 0 0 1 2.83 0l5.54 5.54a2 2 0 0 1 0 2.83l-5.54 5.54a2 2 0 0 1-2.83 0z"></path>
    <path d="M22 22l-5-5"></path>
    <path d="M2 2l6 6"></path>
  </svg>
);

export const DatabaseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

export const MegaphoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 11h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H3zM8 12h13l-4-4 4-4H8V2L4 6l4 4z"></path>
  </svg>
);

export const PlusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

export const TargetIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
    </svg>
);

export const BarChartIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" x2="12" y1="20" y2="10"></line>
        <line x1="18" x2="18" y1="20" y2="4"></line>
        <line x1="6" x2="6" y1="20" y2="16"></line>
    </svg>
);

export const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

export const CheckmarkCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#E9E4F0"/>
        <path d="M8.5 12.5L11 15L15.5 10" stroke="#27013D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const ServiceHeroVisual: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="service-hero-gradient" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                <stop stopColor="#27013D"/>
                <stop offset="1" stopColor="#6D0037"/>
            </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="180" stroke="url(#service-hero-gradient)" strokeWidth="4" strokeOpacity="0.2"/>
        <path d="M100 300C150 200, 250 200, 300 300" stroke="url(#service-hero-gradient)" strokeWidth="2" strokeOpacity="0.5" />
        <path d="M150 100L250 300" stroke="url(#service-hero-gradient)" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.5" />
        <path d="M120 150L280 250" stroke="url(#service-hero-gradient)" strokeWidth="1" strokeOpacity="0.4" />
        <circle cx="120" cy="150" r="4" fill="url(#service-hero-gradient)" fillOpacity="0.6"/>
        <circle cx="280" cy="250" r="4" fill="url(#service-hero-gradient)" fillOpacity="0.6"/>
        <circle cx="200" cy="200" r="20" fill="url(#service-hero-gradient)" fillOpacity="0.1"/>
    </svg>
);

export const FileTextIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
);

export const BriefcaseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
);

export const teamMembers = [
  {
    name: 'Seydina Samb - Associé',
    imageUrl: 'https://images2.imgbox.com/9c/93/phlhJhmT_o.jpg',
    description: [
      'Spécialiste des situations complexes et entreprises nécessitant structuration voire restructuration financière, stratégique et opérationnelle.',
      'Tout au long de son parcours, il s’est montré résilient, agile et créatif notamment dans des processus transactionnels lourds.',
      'Sa passion pour la musique et le cinéma, deux univers exigeants, témoigne d’un esprit curieux, structuré et d’un sens du détail prononcé.',
    ],
    alumni: 'Alumni Eight Advisory & KPMG',
    diploma: 'Diplômé de l’IESEG School Of Management',
    linkedinUrl: 'https://www.linkedin.com/in/seydina-samb-6638ba56/'
  },
  {
    name: 'Benjamin Le Gal - Associé',
    imageUrl: 'https://images2.imgbox.com/c8/cf/0Mcqh5DP_o.jpg',
    description: [
      'Expert dans l’assistance des entreprises et fonds dans leur processus de cessions-acquisitions notamment due diligence et recherche de repreneurs.',
      'Il bénéfice également d’une expérience solide en Direction financière de start-ups et ETI dont il a accompagné les levées de fonds.',
      'Ancien footballeur semi-professionnel, il est toujours guidé par la discipline, la stratégie et l’engagement.'
    ],
    alumni: 'Alumni EY, E-Wingels & Payfit',
    diploma: 'Diplômé de l’IESEG School Of Management',
    linkedinUrl: 'https://www.linkedin.com/in/benjaminlegal/'
  }
];

export const serviceDetails: { [key: string]: any } = {
  'pilotage-planification': {
    title: 'Pilotage & Planification',
    subtitle: 'Nous accompagnons les grandes groupes et ETI dans la conception d’une vision stratégique et intégrée du changement, que nous mettons en oeuvre à leurs côtés.',
    heroItems: [
      'Corporate & Business Strategy',
      'Governance & Organization',
      'Topline Performance',
      'Operations Excellence',
    ],
    mainContent: {
      title: 'Stratégie Corporate & Business',
      description: 'Développer des stratégies globales alignées sur les objectifs de l’entreprise et piloter leur déploiement pour assurer un impact durable.',
      categories: [
        {
          title: 'Stratégie d’entreprise',
          list: ['Plans stratégiques', 'Stratégie de retournement', 'Stratégie de portefeuille et M&A'],
        },
        {
          title: 'Stratégie Business',
          list: ['Plans de croissance', 'Diversification, internationalisation & go-to-market', 'Optimisation de l’offre et des business models'],
        },
        {
          title: 'Stratégie financière',
          list: ['Transformation financière et juridique', 'Planification & business planning', 'Services de transaction & d’évaluation'],
        },
      ],
    },
  },
  'cfo-part-time': {
    title: 'CFO Part-time & Management de transition',
    subtitle: 'Nous vous fournissons une expertise financière de haut niveau à temps partagé ou pour des missions de transition, pour sécuriser vos opérations et structurer votre croissance.',
    heroItems: [
      'Pilotage financier',
      'Relations investisseurs',
      'Management de transition',
      'Structuration de la fonction finance',
    ],
    mainContent: {
      title: 'Votre Direction Financière externalisée',
      description: 'Bénéficiez d’un DAF expérimenté pour piloter votre performance, préparer vos reportings, gérer votre trésorerie et structurer vos processus financiers.',
      categories: [
        {
          title: 'Pilotage & Reporting',
          list: ['Mise en place de KPIs', 'Reporting mensuel & board packs', 'Budget & prévisionnels'],
        },
        {
          title: 'Trésorerie & Financement',
          list: ['Prévisionnel de trésorerie', 'Optimisation du BFR', 'Recherche de financements'],
        },
        {
          title: 'Management & Structuration',
          list: ['Management de transition', 'Structuration d\'équipes financières', 'Mise en place d\'outils et processus'],
        },
      ],
    },
  },
  'diagnostic-restructuration': {
    title: 'Diagnostic & Restructuration',
    subtitle: 'Nous intervenons dans les situations complexes pour analyser votre situation, identifier les leviers de redressement et restaurer la confiance de vos partenaires.',
    heroItems: [
      'Diagnostic flash',
      'Prévisionnels de crise',
      'Plan de retournement',
      'Négociation avec les tiers',
    ],
    mainContent: {
      title: 'Redressement & Retournement d\'entreprise',
      description: 'Dans les moments critiques, nous vous apportons un regard objectif et des solutions pragmatiques pour stabiliser la situation et construire un plan de sortie de crise.',
      categories: [
        {
          title: 'Analyse & Diagnostic',
          list: ['Diagnostic stratégique et financier', 'Analyse des causes de sous-performance', 'Modélisation de scénarios de crise'],
        },
        {
          title: 'Plan de restructuration',
          list: ['Plan de réduction des coûts', 'Optimisation des opérations', 'Cession d\'actifs non-stratégiques'],
        },
        {
          title: 'Négociation et Communication',
          list: ['Négociation avec les créanciers', 'Communication avec les actionnaires et salariés', 'Recherche de solutions de financement'],
        },
      ],
    },
  },
  'services-ma': {
    title: 'Services M&A & Transaction',
    subtitle: 'Nous vous assistons de bout en bout dans vos opérations de haut de bilan pour maximiser la valeur et sécuriser le processus de transaction.',
    heroItems: [
      'Due Diligence (VDD / Buy-side)',
      'Évaluation d\'entreprise',
      'Modélisation de transaction',
      'Intégration post-acquisition',
    ],
    mainContent: {
      title: 'Accompagnement de vos transactions',
      description: 'Que vous soyez vendeur ou acquéreur, nous vous guidons à chaque étape du processus pour défendre vos intérêts et assurer le succès de l\'opération.',
      categories: [
        {
          title: 'Due Diligence',
          list: ['Due Diligence financière (VDD, buy-side)', 'Analyse de la qualité des résultats et du BFR', 'Data room management'],
        },
        {
          title: 'Valorisation & Modélisation',
          list: ['Évaluation multicritères', 'Modélisation (LBO, fusion, etc.)', 'Analyse de la création de valeur'],
        },
        {
          title: 'Support à la Négociation',
          list: ['Assistance à la rédaction de la documentation', 'Analyse des offres', 'Négociation des clauses financières'],
        },
      ],
    },
  },
};

export const LineGraphIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 28L12 18L22 22L32 10L48 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const FourPointStarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
    </svg>
);

// --- New Expertise Icons ---
export const ExpertiseCodingIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 256 256" className={className} fill="currentColor">
        <g>
            <path d="M240,128l-72,64H88L16,128,88,64h80Z" opacity="0.2"></path>
            <path d="M93.31,70,28,128l65.27,58a8,8,0,1,1-10.62,12l-72-64a8,8,0,0,1,0-12l72-64A8,8,0,1,1,93.31,70Zm152,52-72-64a8,8,0,0,0-10.62,12L228,128l-65.27,58a8,8,0,1,0,10.62,12l72-64a8,8,0,0,0,0-12Z"></path>
        </g>
    </svg>
);

export const ExpertiseMathIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 256 256" className={className} fill="currentColor">
        <g>
            <path d="M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z" opacity="0.2"></path>
            <path d="M112,72a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16h64A8,8,0,0,1,112,72Zm-8,104H80V152a8,8,0,0,0-16,0v24H40a8,8,0,0,0,0,16H64v24a8,8,0,0,0,16,0V192h24a8,8,0,0,0,0-16Zm48,0h64a8,8,0,0,0,0-16H152a8,8,0,0,0,0,16Zm64,16H152a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm-61.66-90.34a8,8,0,0,0,11.32,0L184,83.31l18.34,18.35a8,8,0,0,0,11.32-11.32L195.31,72l18.35-18.34a8,8,0,0,0-11.32-11.32L184,60.69,165.66,42.34a8,8,0,0,0-11.32,11.32L172.69,72,154.34,90.34A8,8,0,0,0,154.34,101.66Z"></path>
        </g>
    </svg>
);

export const ExpertiseChemistryIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 256 256" className={className} fill="currentColor">
        <g>
            <path d="M208,216H48a8,8,0,0,1-6.86-12.12l30.48-50.8h0c13.23-2.48,32-1.41,56.37,10.92,32.25,16.33,54.75,12.91,67.5,7.65h0l19.34,32.23A8,8,0,0,1,208,216Z" opacity="0.2"></path>
            <path d="M221.69,199.77,160,96.92V40h8a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16h8V96.92L34.31,199.77A16,16,0,0,0,48,224H208a16,16,0,0,0,13.72-24.23ZM110.86,103.25A7.93,7.93,0,0,0,112,99.14V40h32V99.14a7.93,7.93,0,0,0,1.14,4.11L183.36,167c-12,2.37-29.07,1.37-51.75-10.11-15.91-8.05-31.05-12.32-45.22-12.81ZM48,208l28.54-47.58c14.25-1.73,30.31,1.85,47.82,10.72,19,9.61,35,12.88,48,12.88a69.89,69.89,0,0,0,19.55-2.7L208,208Z"></path>
        </g>
    </svg>
);

export const ExpertiseHistoryIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 256 256" className={className} fill="currentColor">
        <g>
            <path d="M232,56V200H160a32,32,0,0,0-32,32,32,32,0,0,0-32-32H24V56H96a32,32,0,0,1,32,32,32,32,0,0,1,32-32Z" opacity="0.2"></path>
            <path d="M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z"></path>
        </g>
    </svg>
);

export const ExpertiseLanguagesIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 256 256" className={className} fill="currentColor">
        <g>
            <path d="M224,184H144l40-80ZM96,127.56h0A95.78,95.78,0,0,0,128,56H64A95.78,95.78,0,0,0,96,127.56Z" opacity="0.2"></path>
            <path d="M247.15,212.42l-56-112a8,8,0,0,0-14.31,0l-21.71,43.43A88,88,0,0,1,108,126.93,103.65,103.65,0,0,0,135.69,64H160a8,8,0,0,0,0-16H104V32a8,8,0,0,0-16,0V48H32a8,8,0,0,0,0,16h87.63A87.7,87.7,0,0,1,96,116.35a87.74,87.74,0,0,1-19-31,8,8,0,1,0-15.08,5.34A103.63,103.63,0,0,0,84,127a87.55,87.55,0,0,1-52,17,8,8,0,0,0,0,16,103.46,103.46,0,0,0,64-22.08,104.18,104.18,0,0,0,51.44,21.31l-26.6,53.19a8,8,0,0,0,14.31,7.16L148.94,192h70.11l13.79,27.58A8,8,0,0,0,240,224a8,8,0,0,0,7.15-11.58ZM156.94,176,184,121.89,211.05,176Z"></path>
        </g>
    </svg>
);

export const ExpertiseLawIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 256 256" className={className} fill="currentColor">
        <g>
            <path d="M149.66,45.66l-64,64a8,8,0,0,1-11.32,0l-16-16a8,8,0,0,1,0-11.32l64-64a8,8,0,0,1,11.32,0l16,16A8,8,0,0,1,149.66,45.66Zm88,76.68-16-16a8,8,0,0,0-11.32,0l-64,64a8,8,0,0,0,0,11.32l16,16a8,8,0,0,0,11.32,0l64-64A8,8,0,0,0,237.66,122.34Z" opacity="0.2"></path>
            <path d="M243.32,116.69l-16-16a16,16,0,0,0-20.84-1.53L156.84,49.52a16,16,0,0,0-1.52-20.84l-16-16a16,16,0,0,0-22.63,0l-64,64a16,16,0,0,0,0,22.63l16,16a16,16,0,0,0,20.83,1.52L96.69,124,31.31,189.38A25,25,0,0,0,66.63,224.7L132,159.32l7.17,7.16a16,16,0,0,0,1.52,20.84l16,16a16,16,0,0,0,22.63,0l64-64A16,16,0,0,0,243.32,116.69ZM80,104,64,88l64-64,16,16ZM55.32,213.38a9,9,0,0,1-12.69,0,9,9,0,0,1,0-12.68L108,135.32,120.69,148ZM101,105.66,145.66,61,195,110.34,150.35,155ZM168,192l-16-16,4-4h0l56-56h0l4-4,16,16Z"></path>
        </g>
    </svg>
);

export const ExpertiseDataScienceIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 256 256" className={className} fill="currentColor">
        <g>
            <path d="M216,80c0,26.51-39.4,48-88,48S40,106.51,40,80s39.4-48,88-48S216,53.49,216,80Z" opacity="0.2"></path>
            <path d="M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"></path>
        </g>
    </svg>
);

export const ExpertiseSpeechIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 256 256" className={className} fill="currentColor">
        <g>
            <path d="M80,144v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V128H64A16,16,0,0,1,80,144Zm112-16a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h32V128Z" opacity="0.2"></path>
            <path d="M201.89,54.66A104.08,104.08,0,0,0,24,128v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V144a24,24,0,0,0-24-24H40.36A88.12,88.12,0,0,1,190.54,65.93,87.39,87.39,0,0,1,215.65,120H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h24a24,24,0,0,1-24,24H136a8,8,0,0,0,0,16h56a40,40,0,0,0,40-40V128A103.41,103.41,0,0,0,201.89,54.66ZM64,136a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V136Zm128,56a8,8,0,0,1-8-8V144a8,8,0,0,1,8-8h24v56Z"></path>
        </g>
    </svg>
);

export const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);