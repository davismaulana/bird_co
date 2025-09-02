

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
        <path d="M18.6667 21.3333L16 13.3333L8 16L10.6667 24L18.6667 21.3333Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M45.3333 42.6667L53.3333 45.3333L50.6667 53.3333L42.6667 50.6667L45.3333 42.6667Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const HamburgerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

export const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
    </svg>
);

export const CheckmarkCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const FundsRaisedIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 64 64" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M29.333 58.667h-16A5.333 5.333 0 018 53.333V10.667A5.333 5.333 0 0113.333 5.333H40l10.667 10.667v13.333M40 5.333v10.667h10.667M21.333 29.333h13.334M21.333 42.667h8m21.334-5.334a8 8 0 11-16 0 8 8 0 0116 0zm-8-5.333v10.667m-5.333-5.334h10.666" />
    </svg>
);

const PlaceholderComponent: React.FC<{ name: string, className?: string }> = ({ name, className }) => <div className={`text-xs text-gray-500 ${className}`}>[{name}]</div>;

export const WellowLogo = () => <img src="https://static.wixstatic.com/media/7bfd2f_41cbb9b9d5e340d9a25af26860d861b1~mv2.png" alt="Wellow Logo" />;
export const RegenSchoolLogo = () => <img src="https://static.wixstatic.com/media/7bfd2f_01fba9e6ecbb414c90a29c40b793f8cb~mv2.png" alt="Regen School Logo" />;
export const PomadLogo = () => <img src="https://static.wixstatic.com/media/7bfd2f_8f755945e31d45fba32951129b040994~mv2.png" alt="Pomad Logo" />;
export const OctoLogo = () => <img src="https://static.wixstatic.com/media/7bfd2f_eff6d7f274f3477393d513ca25459148~mv2.png" alt="Octo Logo" />;
export const CameroneCapitalLogo = () => <img src="https://static.wixstatic.com/media/7bfd2f_1b1546b30c1a40158136d72a41b42857~mv2.png" alt="Camerone Capital Logo" />;

export const FinancialReportMockup: React.FC<{ theme?: string }> = () => (
    <div className="w-full h-full bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 flex flex-col transform hover:scale-105 transition-transform duration-300 aspect-[4/3]">
        <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-700 text-base">Modèle Financier</h3>
            <div className="px-3 py-1 text-xs font-semibold bg-[#27013D] text-white rounded-full">Prévisions 5 ans</div>
        </div>
        <div className="flex-grow bg-gray-50 rounded-lg p-4 space-y-3 border border-gray-100 text-sm font-mono">
            <div className="grid grid-cols-4 gap-2 text-xs text-gray-500">
                <span>Metric</span>
                <span className="text-right">Y1</span>
                <span className="text-right">Y2</span>
                <span className="text-right">Y3</span>
            </div>
            <div className="grid grid-cols-4 gap-2 text-gray-800">
                <span className="font-medium">Chiffre d'affaires</span>
                <span className="text-right">€5.2M</span>
                <span className="text-right text-green-600 font-semibold">€7.8M</span>
                <span className="text-right text-green-600 font-semibold">€11.5M</span>
            </div>
            <div className="grid grid-cols-4 gap-2 text-gray-600">
                <span className="pl-4">Marge Brute</span>
                <span className="text-right">60%</span>
                <span className="text-right">62%</span>
                <span className="text-right">65%</span>
            </div>
            <div className="grid grid-cols-4 gap-2 text-gray-800 font-medium border-t border-gray-200 pt-2 mt-2">
                <span>EBITDA</span>
                <span className="text-right">€1.6M</span>
                <span className="text-right text-green-600 font-semibold">€2.7M</span>
                <span className="text-right text-green-600 font-semibold">€4.2M</span>
            </div>
        </div>
    </div>
);
export const KpiDashboardMockup: React.FC<{ theme?: string }> = () => (
  <div className="w-full h-full bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 flex flex-col transform hover:scale-105 transition-transform duration-300 aspect-[4/3]">
    <div className="w-full text-left mb-4">
      <h3 className="font-bold text-gray-700 text-base">Tableau de Bord - T4 2024</h3>
      <p className="text-sm text-gray-500">Suivi des KPIs clés</p>
    </div>
    <div className="flex-grow grid grid-cols-2 grid-rows-2 gap-4">
      <div className="bg-gray-50 rounded-lg p-3 border border-gray-100 col-span-1 row-span-2 flex flex-col">
        <p className="text-sm font-semibold text-gray-500 mb-2">Croissance MRR</p>
        <div className="flex-grow flex items-end space-x-2">
            <div className="w-full h-1/3 bg-[#6D0037]/20 rounded-t-sm"></div>
            <div className="w-full h-2/3 bg-[#6D0037]/20 rounded-t-sm"></div>
            <div className="w-full h-1/2 bg-[#6D0037]/20 rounded-t-sm"></div>
            <div className="w-full h-3/4 bg-[#6D0037] rounded-t-sm"></div>
        </div>
      </div>
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 col-span-1 row-span-1">
        <p className="text-sm text-gray-500">Taux de Churn</p>
        <p className="font-bold text-gray-800 text-2xl">2.1% <span className="text-green-500 text-base">↓</span></p>
      </div>
       <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 col-span-1 row-span-1">
        <p className="text-sm text-gray-500">CAC</p>
        <p className="font-bold text-[#27013D] text-2xl">1.2k€ <span className="text-red-500 text-base">↑</span></p>
      </div>
    </div>
  </div>
);
export const FieldWorkMockup: React.FC<{ theme?: string }> = () => (
    <div className="w-full h-full bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 flex flex-col transform hover:scale-105 transition-transform duration-300 aspect-[4/3] justify-center items-center text-center">
        <h3 className="font-bold text-gray-700 text-base mb-4">Intervention sur site</h3>
        <div className="relative w-48 h-32">
            {/* Avatars */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-12 h-12 bg-violet-100 rounded-full border-2 border-white flex items-center justify-center text-sm font-semibold text-[#27013D]">C1</div>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-12 h-12 bg-violet-100 rounded-full border-2 border-white flex items-center justify-center text-sm font-semibold text-[#27013D]">C2</div>
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-12 h-12 bg-[#27013D] text-white flex items-center justify-center rounded-full border-2 border-white text-xs font-bold">B&</div>

            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 70">
                <line x1="28" y1="35" x2="50" y2="13" stroke="#27013D" strokeWidth="1.5" />
                <line x1="72" y1="35" x2="50" y2="13" stroke="#27013D" strokeWidth="1.5" />
                <line x1="25" y1="35" x2="75" y2="35" stroke="#27013D" strokeWidth="1.5" />
            </svg>
        </div>
        <p className="text-sm text-gray-600 mt-4 max-w-xs">
            Collaboration directe avec vos équipes pour un support et une intégration sur-mesure.
        </p>
    </div>
);
export const DiagnosticScanMockup: React.FC<{ theme?: string }> = () => (
    <div className="w-full h-full bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 flex flex-col transform hover:scale-105 transition-transform duration-300 aspect-[4/3]">
      <h3 className="font-bold text-gray-700 text-base mb-4">Diagnostic 360° - Rapport d'Audit</h3>
      <div className="flex-grow grid grid-cols-2 gap-4">
        <div className="bg-violet-50/50 rounded-lg p-4 border border-violet-100 flex flex-col justify-center items-center">
            <div className="w-24 h-24 rounded-full border-8 border-white flex items-center justify-center shadow-inner bg-violet-100">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#27013D] to-[#6D0037] flex items-center justify-center text-white font-bold text-2xl">
                    86%
                </div>
            </div>
            <p className="text-sm font-semibold text-[#27013D] mt-3">Score de Performance</p>
        </div>
        <div className="space-y-3">
             <div className="flex items-center gap-3 bg-violet-50/50 p-3 rounded-lg border border-violet-100">
                <CheckmarkCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                <p className="text-gray-800 text-sm">Santé Financière</p>
            </div>
             <div className="flex items-center gap-3 bg-violet-50/50 p-3 rounded-lg border border-violet-100">
                <CheckmarkCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                <p className="text-gray-800 text-sm">Efficacité Opérationnelle</p>
            </div>
             <div className="flex items-center gap-3 bg-violet-50/50 p-3 rounded-lg border border-violet-100">
                <TrendingUpIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <p className="text-gray-800 text-sm">Stratégie de Croissance</p>
            </div>
        </div>
      </div>
    </div>
);

export const ExpertiseCodingIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
        <g opacity="0.2"><path d="M240,128l-72,64H88L16,128,88,64h80Z"></path></g>
        <g><path d="M93.31,70,28,128l65.27,58a8,8,0,1,1-10.62,12l-72-64a8,8,0,0,1,0-12l72-64A8,8,0,1,1,93.31,70Zm152,52-72-64a8,8,0,0,0-10.62,12L228,128l-65.27,58a8,8,0,1,0,10.62,12l72-64a8,8,0,0,0,0-12Z"></path></g>
    </svg>
);
export const ExpertiseMathIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
        <g opacity="0.2"><path d="M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z"></path></g>
        <g><path d="M112,72a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16h64A8,8,0,0,1,112,72Zm-8,104H80V152a8,8,0,0,0-16,0v24H40a8,8,0,0,0,0,16H64v24a8,8,0,0,0,16,0V192h24a8,8,0,0,0,0-16Zm48,0h64a8,8,0,0,0,0-16H152a8,8,0,0,0,0,16Zm64,16H152a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm-61.66-90.34a8,8,0,0,0,11.32,0L184,83.31l18.34,18.35a8,8,0,0,0,11.32-11.32L195.31,72l18.35-18.34a8,8,0,0,0-11.32-11.32L184,60.69,165.66,42.34a8,8,0,0,0-11.32,11.32L172.69,72,154.34,90.34A8,8,0,0,0,154.34,101.66Z"></path></g>
    </svg>
);
export const ExpertiseChemistryIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
        <g opacity="0.2"><path d="M208,216H48a8,8,0,0,1-6.86-12.12l30.48-50.8h0c13.23-2.48,32-1.41,56.37,10.92,32.25,16.33,54.75,12.91,67.5,7.65h0l19.34,32.23A8,8,0,0,1,208,216Z"></path></g>
        <g><path d="M221.69,199.77,160,96.92V40h8a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16h8V96.92L34.31,199.77A16,16,0,0,0,48,224H208a16,16,0,0,0,13.72-24.23ZM110.86,103.25A7.93,7.93,0,0,0,112,99.14V40h32V99.14a7.93,7.93,0,0,0,1.14,4.11L183.36,167c-12,2.37-29.07,1.37-51.75-10.11-15.91-8.05-31.05-12.32-45.22-12.81ZM48,208l28.54-47.58c14.25-1.73,30.31,1.85,47.82,10.72,19,9.61,35,12.88,48,12.88a69.89,69.89,0,0,0,19.55-2.7L208,208Z"></path></g>
    </svg>
);
export const ExpertiseHistoryIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
        <g opacity="0.2"><path d="M232,56V200H160a32,32,0,0,0-32,32,32,32,0,0,0-32-32H24V56H96a32,32,0,0,1,32,32,32,32,0,0,1,32-32Z"></path></g>
        <g><path d="M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z"></path></g>
    </svg>
);
export const ExpertiseLanguagesIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
        <g opacity="0.2"><path d="M224,184H144l40-80ZM96,127.56h0A95.78,95.78,0,0,0,128,56H64A95.78,95.78,0,0,0,96,127.56Z"></path></g>
        <g><path d="M247.15,212.42l-56-112a8,8,0,0,0-14.31,0l-21.71,43.43A88,88,0,0,1,108,126.93,103.65,103.65,0,0,0,135.69,64H160a8,8,0,0,0,0-16H104V32a8,8,0,0,0-16,0V48H32a8,8,0,0,0,0,16h87.63A87.7,87.7,0,0,1,96,116.35a87.74,87.74,0,0,1-19-31,8,8,0,1,0-15.08,5.34A103.63,103.63,0,0,0,84,127a87.55,87.55,0,0,1-52,17,8,8,0,0,0,0,16,103.46,103.46,0,0,0,64-22.08,104.18,104.18,0,0,0,51.44,21.31l-26.6,53.19a8,8,0,0,0,14.31,7.16L148.94,192h70.11l13.79,27.58A8,8,0,0,0,240,224a8,8,0,0,0,7.15-11.58ZM156.94,176,184,121.89,211.05,176Z"></path></g>
    </svg>
);
export const ExpertiseLawIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
        <g opacity="0.2"><path d="M149.66,45.66l-64,64a8,8,0,0,1-11.32,0l-16-16a8,8,0,0,1,0-11.32l64-64a8,8,0,0,1,11.32,0l16,16A8,8,0,0,1,149.66,45.66Zm88,76.68-16-16a8,8,0,0,0-11.32,0l-64,64a8,8,0,0,0,0,11.32l16,16a8,8,0,0,0,11.32,0l64-64A8,8,0,0,0,237.66,122.34Z"></path></g>
        <g><path d="M243.32,116.69l-16-16a16,16,0,0,0-20.84-1.53L156.84,49.52a16,16,0,0,0-1.52-20.84l-16-16a16,16,0,0,0-22.63,0l-64,64a16,16,0,0,0,0,22.63l16,16a16,16,0,0,0,20.83,1.52L96.69,124,31.31,189.38A25,25,0,0,0,66.63,224.7L132,159.32l7.17,7.16a16,16,0,0,0,1.52,20.84l16,16a16,16,0,0,0,22.63,0l64-64A16,16,0,0,0,243.32,116.69ZM80,104,64,88l64-64,16,16ZM55.32,213.38a9,9,0,0,1-12.69,0,9,9,0,0,1,0-12.68L108,135.32,120.69,148ZM101,105.66,145.66,61,195,110.34,150.35,155ZM168,192l-16-16,4-4h0l56-56h0l4-4,16,16Z"></path></g>
    </svg>
);
export const ExpertiseDataScienceIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
        <g opacity="0.2"><path d="M216,80c0,26.51-39.4,48-88,48S40,106.51,40,80s39.4-48,88-48S216,53.49,216,80Z"></path></g>
        <g><path d="M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"></path></g>
    </svg>
);
export const ExpertiseSpeechIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
        <g opacity="0.2"><path d="M80,144v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V128H64A16,16,0,0,1,80,144Zm112-16a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h32V128Z"></path></g>
        <g><path d="M201.89,54.66A104.08,104.08,0,0,0,24,128v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V144a24,24,0,0,0-24-24H40.36A88.12,88.12,0,0,1,190.54,65.93,87.39,87.39,0,0,1,215.65,120H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h24a24,24,0,0,1-24,24H136a8,8,0,0,0,0,16h56a40,40,0,0,0,40-40V128A103.41,103.41,0,0,0,201.89,54.66ZM64,136a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V136Zm128,56a8,8,0,0,1-8-8V144a8,8,0,0,1,8-8h24v56Z"></path></g>
    </svg>
);

export const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => <svg className={className} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>;
export const TargetIcon: React.FC<{ className?: string }> = ({ className }) => <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9 9 0 100-18 9 9 0 000 18z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15a3 3 0 100-6 3 3 0 000 6z" /></svg>;
export const BarChartIcon: React.FC<{ className?: string }> = ({ className }) => <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
export const TrendingUpIcon: React.FC<{ className?: string }> = ({ className }) => <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
export const BriefcaseIcon: React.FC<{ className?: string }> = ({ className }) => <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;

export const services = [
    { slug: 'cfo-part-time', title: 'CFO à temps partagé', subTitle: 'PILOTAGE FINANCIER', description: 'Un expert financier à vos côtés pour structurer votre croissance.', icon: <CfoIcon />, iconClassName: 'w-16 h-16' },
    { slug: 'diagnostic-360', title: 'Diagnostic 360°', subTitle: 'STRATÉGIE & OPÉRATIONS', description: 'Une analyse complète pour identifier vos leviers de performance.', icon: <DiagnosticIcon />, iconClassName: 'w-16 h-16' },
    { slug: 'ma-support', title: 'Accompagnement M&A', subTitle: 'TRANSACTIONS', description: 'Un soutien stratégique et opérationnel pour sécuriser vos opérations.', icon: <HandshakeIcon />, iconClassName: 'w-16 h-16' },
    { slug: 'project-structuring', title: 'Structuration & Lancement', subTitle: 'PROJETS SPÉCIFIQUES', description: 'Donnez vie à vos projets avec une base financière et stratégique solide.', icon: <PaperPlaneIcon />, iconClassName: 'w-16 h-16' }
];

export const teamMembers = [
  {
    name: 'Seydina Samb - Associé',
    description: [
      'Spécialiste des situations complexes et entreprises nécessitant structuration voire restructuration financière, stratégique et opérationnelle.',
      'Tout au long de son parcours, il s’est montré résilient, agile et créatif notamment dans des processus transactionnels lourds.',
      'Sa passion pour la musique et le cinéma, deux univers exigeants, témoigne d’un esprit curieux, structuré et d’un sens du détail prononcé.',
    ],
    alumni: 'Alumni EY, Eight Advisory & PwC',
    diploma: 'Master Spécialisé – ESCP Europe',
    imageUrl: 'https://images2.imgbox.com/f7/7a/f1AuycIm_o.png',
    linkedinUrl: 'https://www.linkedin.com/in/seydinasamb/',
  },
  {
    name: 'Benjamin Le Gal - Associé',
    description: [
      'Expert dans l’assistance des entreprises et fonds dans leur processus de cessions-acquisitions notamment due diligence et recherche de repreneurs.',
      'Il bénéfice également d’une expérience solide en Direction financière de start-ups et ETI dont il a accompagné les levées de fonds.',
      'Ancien footballeur semi-professionnel, il est toujours guidé par la discipline, la stratégie et l’engagement.',
    ],
    alumni: 'Alumni EY, E-WingeIs & Payfit',
    diploma: 'Master 2 CCA – IGR-IAE Rennes',
    imageUrl: 'https://images2.imgbox.com/9c/29/9WlaeoKB_o.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/benjamin-le-gal-04a64353/',
  },
];

export const serviceDetails: { [key: string]: any } = {
    'cfo-part-time': {
        title: 'CFO à temps partagé',
        subtitle: 'Bénéficiez d’une expertise financière de haut niveau sans internaliser un poste à temps plein. Nous vous aidons à structurer votre fonction finance, à optimiser votre performance et à prendre des décisions éclairées.',
        heroItems: ['Reporting & KPIs', 'Budget & Prévisionnel', 'Gestion de trésorerie', 'Optimisation BFR'],
        mainContent: { title: 'Nos interventions', description: 'Nous intervenons sur l’ensemble du périmètre de la fonction finance.', categories: [
            { title: 'Pilotage de la performance', list: ['Mise en place de reporting mensuel', 'Définition des KPIs pertinents', 'Élaboration de budget et suivi des écarts', 'Analyses de rentabilité'] },
            { title: 'Gestion de trésorerie', list: ['Construction de prévisionnels de trésorerie', 'Optimisation du BFR', 'Mise en place de solutions de financement', 'Relations bancaires'] }
        ] }
    },
     'diagnostic-360': {
        title: 'Diagnostic 360°',
        subtitle: 'Une analyse complète pour identifier vos leviers de performance.',
        heroItems: ['Analyse financière', 'Revue opérationnelle', 'Benchmark sectoriel', 'Plan d\'action'],
        mainContent: { title: 'Notre approche', description: 'Un diagnostic complet pour une vision claire.', categories: [
            { title: 'Analyse financière', list: ['Analyse du compte de résultat', 'Analyse du bilan', 'Analyse des flux de trésorerie'] },
        ] }
    },
    'ma-support': {
        title: 'Accompagnement M&A',
        subtitle: 'Un soutien stratégique et opérationnel pour sécuriser vos opérations.',
        heroItems: ['Cession', 'Acquisition', 'Levée de fonds', 'Due diligence'],
        mainContent: { title: 'Nos services', description: 'Un accompagnement sur mesure.', categories: [
            { title: 'Cession & Acquisition', list: ['Evaluation', 'Recherche de contreparties', 'Négociation', 'Closing'] },
        ] }
    },
    'project-structuring': {
        title: 'Structuration & Lancement',
        subtitle: 'Donnez vie à vos projets avec une base financière et stratégique solide.',
        heroItems: ['Business plan', 'Modélisation financière', 'Recherche de financements', 'Structuration juridique'],
        mainContent: { title: 'Nos livrables', description: 'Des outils pour convaincre.', categories: [
            { title: 'Business Plan & Modélisation', list: ['BP complet et détaillé', 'Modèle financier dynamique', 'Analyse de sensibilité'] },
        ] }
    }
};