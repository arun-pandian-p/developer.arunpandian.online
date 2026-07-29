import React from 'react';

interface BrandIconProps {
  className?: string;
  size?: number;
  color?: string;
}

// 1. React (Official Brand Cyan: #61DAFB / #00D8FF)
export const ReactLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#00D8FF" strokeWidth="2">
    <ellipse cx="12" cy="12" rx="10" ry="4.5" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.5" fill="#00D8FF" />
  </svg>
);

// 2. Next.js (Official Brand Black/White)
export const NextjsLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 180 180" fill="currentColor">
    <path d="M140 160L60 40H40v100h20V75l65 85h15z" />
    <path d="M120 40h20v60h-20z" />
  </svg>
);

// 3. TypeScript (Official Brand Blue: #3178C6)
export const TypescriptLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#3178C6">
    <path d="M1.5 0h21A1.5 1.5 0 0124 1.5v21a1.5 1.5 0 01-1.5 1.5h-21A1.5 1.5 0 010 22.5v-21A1.5 1.5 0 011.5 0zM12 11.375h-2.25v1.875H12v2.25H9.75v1.875H12a2.25 2.25 0 002.25-2.25v-1.5A2.25 2.25 0 0012 11.375zm5.25.75c0-.414-.336-.75-.75-.75h-3.75v1.5h3.75v1.5h-2.25v1.5h2.25a2.25 2.25 0 002.25-2.25v-1.5z" />
  </svg>
);

// 4. JavaScript (Official Brand Yellow: #F7DF1E)
export const JavascriptLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#F7DF1E">
    <path d="M0 0h24v24H0z" />
    <path fill="#000000" d="M12 11.375h-2.25v1.875H12v2.25H9.75v1.875H12a2.25 2.25 0 002.25-2.25v-1.5A2.25 2.25 0 0012 11.375zm5.25.75c0-.414-.336-.75-.75-.75h-3.75v1.5h3.75v1.5h-2.25v1.5h2.25a2.25 2.25 0 002.25-2.25v-1.5z" />
  </svg>
);

// 5. Node.js (Official Brand Green: #5FA04E)
export const NodejsLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#5FA04E">
    <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm-1 14.5l-5-2.8v-5.6l5 2.8v5.6zm2 0v-5.6l5-2.8v5.6l-5 2.8z" />
  </svg>
);

// 6. Express (Official Brand Dark: #000000)
export const ExpressLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-2 14.5H8v-9h2v9zm6 0h-2v-5.5h-2v5.5h-2v-9h2v1.8c.6-.9 1.6-1.8 3-1.8 2 0 3 1.2 3 3.5v6z" />
  </svg>
);

// 7. MongoDB (Official Brand Green: #47A248)
export const MongodbLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#47A248">
    <path d="M12 1.5C11.5 3 10.5 5 9.5 7.5C8 11.5 6.5 14 6.5 16.5C6.5 19.5 8.9 22.5 12 22.5C15.1 22.5 17.5 19.5 17.5 16.5C17.5 14 16 11.5 14.5 7.5C13.5 5 12.5 3 12 1.5ZM12 21C9.8 21 8 19.2 8 17C8 15.2 9.2 13 10.8 9.5C11.3 8.3 11.7 7.3 12 6.5C12.3 7.3 12.7 8.3 13.2 9.5C14.8 13 16 15.2 16 17C16 19.2 14.2 21 12 21Z" />
  </svg>
);

// 8. PostgreSQL (Official Brand Blue: #4169E1)
export const PostgresqlLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#4169E1">
    <path d="M12 2a10 10 0 00-10 10c0 5.52 4.48 10 10 10s10-4.48 10-10A10 10 0 0012 2zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-13h2v4h-2zm0 6h2v2h-2z" />
  </svg>
);

// 9. Tailwind CSS (Official Brand Cyan: #06B6D4)
export const TailwindLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#06B6D4">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
  </svg>
);

// 10. HTML5 (Official Brand Orange: #E34F26)
export const Html5Logo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#E34F26">
    <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.05h9.124l-.326 3.426-2.91.78-2.898-.78-.186-2.126H6.286l.367 4.544 5.319 1.474 5.327-1.474.743-8.354H8.531z" />
  </svg>
);

// 11. CSS3 (Official Brand Blue: #1572B6)
export const Css3Logo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#1572B6">
    <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.05h9.124l-.326 3.426-2.91.78-2.898-.78-.186-2.126H6.286l.367 4.544 5.319 1.474 5.327-1.474.743-8.354H8.531z" />
  </svg>
);

// 12. Git (Official Brand Orange-Red: #F05032)
export const GitLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#F05032">
    <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.301-.401-1.968l-2.48-2.48v6.57c.214.112.4.269.542.476.505.748.33 1.767-.393 2.302-.72.536-1.724.364-2.228-.383-.412-.613-.375-1.427.086-1.996V9.45c-.215-.113-.4-.27-.543-.477-.492-.728-.344-1.727.35-2.287.35-.282.775-.41 1.196-.395L7.754 3.58 1.455 9.88c-.604.604-.604 1.581 0 2.185l10.48 10.478c.604.604 1.582.604 2.186 0l9.425-9.426c.604-.603.604-1.58 0-2.187z" />
  </svg>
);

// 13. GitHub (Official Brand Dark: #181717 / White)
export const GithubLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

// 14. Docker (Official Brand Blue: #2496ED)
export const DockerLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#2496ED">
    <path d="M13 8.5h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm6-3h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm9 3h2v2h-2zm-6-3h2v2h-2zm12 7.5c-.5 0-.9.2-1.3.4-.6-.4-1.5-.7-2.6-.7-2.7 0-4.8 1.6-5.5 3.8-.4-.1-.8-.1-1.2-.1-3.6 0-6.5 2.5-6.5 5.5 0 .4.1.8.2 1.2C1.6 20.3 0 18.3 0 16c0-4.4 4.5-8 10-8 1.1 0 2.2.1 3.2.4C14.1 6.8 15.9 6 18 6c.7 0 1.4.1 2 .3v.2c-.6.6-1 1.4-1 2.3 0 1.2.7 2.2 1.7 2.7-.2.5-.4 1-.7 1.5z" />
  </svg>
);

// 15. AWS (Official Brand Orange: #FF9900)
export const AwsLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#FF9900">
    <path d="M6.7 11.4c0 .4.1.7.3.9.2.2.5.3.9.3.4 0 .7-.1.9-.3.2-.2.3-.5.3-.9v-3h2.3v3.3c0 .9-.3 1.7-.8 2.2-.5.5-1.3.8-2.4.8-1 0-1.8-.3-2.3-.8-.5-.5-.8-1.3-.8-2.2v-3.3h2.3v3zm6.5 3.3l-2.4-7.6h2.5l1.4 5.3 1.5-5.3h2.5l-2.4 7.6h-3.1zm9.6-3c0-.9-.3-1.6-.9-2.1-.6-.5-1.4-.8-2.5-.8-1 0-1.8.3-2.4.8-.6.5-.9 1.2-.9 2.1h2.2c0-.3.1-.6.3-.7.2-.1.5-.2.8-.2.4 0 .7.1.9.2.2.1.3.3.3.6 0 .2-.1.4-.3.5-.2.1-.6.3-1.2.4-1 .3-1.7.6-2.1 1-.4.4-.6.9-.6 1.5 0 .8.3 1.4.8 1.8.5.4 1.2.6 2.1.6 1 0 1.7-.3 2.2-.8.5-.5.8-1.2.8-2.1v-1.8zm-2.2 1.6c0 .4-.1.7-.3.9-.2.2-.5.3-.9.3-.4 0-.7-.1-.9-.3-.2-.2-.3-.5-.3-.9 0-.4.1-.7.3-.9.2-.2.6-.4 1.2-.5.5-.1.8-.2.9-.3v1.6z" />
  </svg>
);

// 16. Vercel (Official Brand Black/White)
export const VercelLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1L24 22H0L12 1Z" />
  </svg>
);

// 17. Firebase (Official Brand Amber: #FFCA28)
export const FirebaseLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#FFCA28">
    <path d="M3.89 15.672L6.16 2.56a.7.7 0 011.278-.291l2.84 5.344zm14.629 1.979L16.48 4.417a.7.7 0 00-1.272-.191l-2.58 4.887zm-11.457 4.19L3.06 18.253a.7.7 0 01-.19-.948l3.18-5.73zM12 21.841l9.94-5.617a.7.7 0 00.32-.821L18.67 2.646a.7.7 0 00-1.282-.249L12 11.531l-2.46-4.636a.7.7 0 00-1.246.066L3.92 15.672z" />
  </svg>
);

// 18. Figma (Official Brand Orange/Red: #F24E1E)
export const FigmaLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 2h4v4H8V2zm0 6h4v4H8V8zm0 6h4v4a4 4 0 01-4-4zm8-12a4 4 0 01-4 4V2h4zm-4 6a4 4 0 118 0 4 4 0 01-8 0z" />
  </svg>
);

// 19. OpenAI (Official Brand Green/Purple: #10A37F)
export const OpenAILogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#10A37F">
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 19.0193 19.818a6.0462 6.0462 0 0 0-.7379-7.0969zm-9.2133 11.0855a4.4754 4.4754 0 0 1-2.8764-1.0406l.142-.0804 4.7767-2.7582a.784.784 0 0 0 .3935-.6814v-6.737l2.0202 1.1686a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.494 4.4943zM3.6 15.3526a4.4754 4.4754 0 0 1-.5354-3.0034l.142.0852 4.7815 2.7582a.7792.7792 0 0 0 .7822 0l5.836-3.3678v2.3372a.0757.0757 0 0 1-.0284.0568l-4.8336 2.7914A4.5045 4.5045 0 0 1 3.6 15.3526zm-1.0567-9.458a4.4849 4.4849 0 0 1 2.341-1.9616v5.6726a.7745.7745 0 0 0 .3887.6766l5.836 3.3679-2.0202 1.1638a.0757.0757 0 0 1-.0663.0095L4.2389 12.07A4.5045 4.5045 0 0 1 2.5433 5.8946zm16.5866 3.2503l-5.836-3.3678 2.0202-1.1638a.0757.0757 0 0 1 .0663-.0095l4.8336 2.7914a4.5045 4.5045 0 0 1-.687 8.1215v-5.6726a.784.784 0 0 0-.3971-.6992zm2.3458 4.7573l-.142-.0852-4.7815-2.7582a.7792.7792 0 0 0-.7822 0l-5.836 3.3678V12.037a.0757.0757 0 0 1 .0284-.0568l4.8336-2.7914a4.5045 4.5045 0 0 1 6.6797 4.6094zM12 13.6666l-2.7818-1.6062 2.7818-1.6062 2.7818 1.6062z" />
  </svg>
);

// 20. Claude (Official Anthropic Amber: #D97706)
export const ClaudeLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#D97706">
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
  </svg>
);

// 21. Google Gemini (Official Brand Purple/Blue: #8E75FF)
export const GeminiLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#8E75FF">
    <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
  </svg>
);

// 22. n8n (Official Brand Coral: #FF6D5A)
export const N8nLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#FF6D5A" strokeWidth="2.5">
    <circle cx="6" cy="12" r="3" fill="#FF6D5A" />
    <circle cx="18" cy="6" r="3" fill="#FF6D5A" />
    <circle cx="18" cy="18" r="3" fill="#FF6D5A" />
    <path d="M8.7 10.7l6.6-3.4M8.7 13.3l6.6 3.4" />
  </svg>
);

// 23. WhatsApp (100% OFFICIAL SIMPLE ICONS WHATSAPP GREEN: #25D366)
export const WhatsappLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#25D366">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// 24. LinkedIn (Official Brand Blue: #0A66C2)
export const LinkedinLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#0A66C2">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

// 25. X / Twitter (Official Brand Dark: #000000 / White)
export const XTwitterLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// 26. Instagram (Official Brand Gradient Pink/Red: #E4405F)
export const InstagramLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#E4405F">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

// 27. Discord (Official Brand Blurple: #5865F2)
export const DiscordLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#5865F2">
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128c.126-.093.252-.19.37-.287a.075.075 0 01.078-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 01.079.009c.12.098.245.195.372.288a.077.077 0 01-.006.128 12.299 12.299 0 01-1.873.891.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

// 28. Telegram (Official Brand Blue: #26A5E4)
export const TelegramLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#26A5E4">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm5.789 8.232c-.147 1.551-.734 5.372-1.04 7.006-.13.69-.387.92-.633.94-.537.049-.947-.354-1.468-.696-.814-.535-1.275-.867-2.063-1.387-.912-.601-.321-.932.198-1.472.136-.141 2.497-2.289 2.543-2.487.006-.025.011-.118-.044-.167s-.136-.032-.195-.019c-.083.018-1.408.895-3.974 2.628-.376.258-.717.386-1.023.379-.338-.008-.988-.191-1.471-.348-.593-.193-1.064-.295-1.023-.623.021-.171.258-.346.711-.525 2.784-1.21 4.643-2.012 5.578-2.4 2.664-1.109 3.218-1.302 3.578-1.308.079 0 .256.019.371.113.097.08.125.188.136.265.01.077.018.257.01.399z" />
  </svg>
);

// 29. Gmail (Official Brand Red: #EA4335)
export const GmailLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#EA4335">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.545l8.073-6.052C21.69 2.28 24 3.434 24 5.457z" />
  </svg>
);

// 30. YouTube (Official Brand Red: #FF0000)
export const YoutubeLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#FF0000">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

// 31. Stripe (Official Brand Violet: #635BFF)
export const StripeLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#635BFF">
    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C17.702.732 15.11 0 12.33 0 6.643 0 2.806 3.013 2.806 7.426c0 5.163 6.942 5.753 6.942 8.665 0 1.014-.863 1.503-2.146 1.503-2.228 0-4.996-1.077-6.992-2.19l-.916 5.617C1.657 22.062 4.606 23 8.01 23c6.046 0 9.99-2.909 9.99-7.534 0-5.46-7.024-5.992-7.024-8.816z" />
  </svg>
);

// 32. Prisma (Official Brand Indigo: #2D3748)
export const PrismaLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#2D3748">
    <path d="M21.5 17.5L13 2.5a1.2 1.2 0 00-2 0L2.5 17.5a1.2 1.2 0 001 1.8h17a1.2 1.2 0 001-1.8zM12 6.5l5.5 9.5H6.5L12 6.5z" />
  </svg>
);

// 33. Supabase (Official Brand Emerald: #3ECF8E)
export const SupabaseLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#3ECF8E">
    <path d="M13.35 21a.75.75 0 0 1-.68-1.07L16.2 13H8a.75.75 0 0 1-.63-1.16l7-10A.75.75 0 0 1 15.65 3L11.8 11H20a.75.75 0 0 1 .63 1.16l-7 10a.75.75 0 0 1-.28.84z" />
  </svg>
);

// 34. FastAPI (Official Brand Teal: #009688)
export const FastapiLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#009688">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8l5-7v4h3l-5 7z" />
  </svg>
);

// 35. Python (Official Brand Blue/Yellow: #3776AB)
export const PythonLogo: React.FC<BrandIconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#3776AB">
    <path d="M12 2c-3.3 0-5 1.5-5 4v2h10V6c0-2.5-1.7-4-5-4zm-2 2a1 1 0 110 2 1 1 0 010-2zm7 5H7c-2.8 0-5 2.2-5 5v3c0 2.8 2.2 5 5 5h2v-2c0-2.2 1.8-4 4-4h4V9zm-5 11c3.3 0 5-1.5 5-4v-2H7v2c0 2.5 1.7 4 5 4zm2-2a1 1 0 110-2 1 1 0 010 2z" />
  </svg>
);
