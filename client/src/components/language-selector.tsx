import { useLanguage } from '@/contexts/LanguageContext';
import georgiaFlag from '@/assets/georgia-flag.png';
import ukFlag from '@/assets/uk-flag.png';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1">
      <button
        onClick={() => setLanguage('ka')}
        className={`relative overflow-hidden rounded-full transition-all duration-300 hover:scale-110 ${
          language === 'ka'
            ? 'ring-2 ring-blue-400 shadow-lg'
            : 'opacity-70 hover:opacity-100'
        }`}
        title="ქართული"
      >
        <img 
          src={georgiaFlag} 
          alt="Georgian Flag" 
          className="w-8 h-8 object-cover rounded-full"
        />
      </button>
      
      <button
        onClick={() => setLanguage('en')}
        className={`relative overflow-hidden rounded-full transition-all duration-300 hover:scale-110 ${
          language === 'en'
            ? 'ring-2 ring-blue-400 shadow-lg'
            : 'opacity-70 hover:opacity-100'
        }`}
        title="English"
      >
        <img 
          src={ukFlag} 
          alt="UK Flag" 
          className="w-8 h-8 object-cover rounded-full"
        />
      </button>
    </div>
  );
}