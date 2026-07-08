const contactForm = document.getElementById('contactForm');
const contactStatus = document.getElementById('contactStatus');
const yearEl = document.getElementById('year');
const langToggle = document.getElementById('langToggle');

const submitEndpoint = 'https://script.google.com/macros/s/AKfycbyIdECjXWs7RJIqi0i9yTvO1M4kuqHziKyhB6lYQxSFBSg0bbzfVZrcm7Ehpx6Msg6uvw/exec';
let currentLang = 'en';

const translations = {
  en: {
    'nav.services': 'Services',
    'nav.work': 'Work',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Premium digital studio',
    'hero.title': 'Elegant websites, thoughtful automation, and calm conversions.',
    'hero.subtitle': 'We design clear, modern digital experiences for founders and premium brands that want to look polished and convert with ease.',
    'hero.ctaPrimary': 'Start your project',
    'hero.ctaSecondary': 'View services',
    'hero.point1': 'Minimal and fast design',
    'hero.point2': 'Smart AI-assisted conversations',
    'hero.point3': 'Clean lead capture and follow-up',
    'stats.leadLift': 'Average lead lift',
    'stats.support': 'AI support',
    'stats.satisfaction': 'Client satisfaction',
    'stats.speed': 'Faster follow-up',
    'services.eyebrow': 'Services',
    'services.title': 'Crafted for ambitious brands.',
    'services.oneTitle': 'Brand Experience',
    'services.oneText': 'Refined visuals, thoughtful messaging, and a premium web presence that feels effortless.',
    'services.twoTitle': 'Conversion Flow',
    'services.twoText': 'Clean landing pages, simple automation, and lead capture designed to feel calm and clear.',
    'services.threeTitle': 'Conversion Systems',
    'services.threeText': 'Conversion systems that capture leads and guide clients to the next step.',
    'work.eyebrow': 'Featured work',
    'work.title': 'Modern, polished, and built to convert.',
    'work.oneText': 'A confident finance presence with strong trust signals and a calm lead journey.',
    'work.twoText': 'A high-conversion launch site with intelligent support built into the experience.',
    'work.threeText': 'A refined luxury brand experience that balances elegance with clarity.',
    'process.eyebrow': 'Process',
    'process.title': 'A straightforward path from first click to first client.',
    'process.oneTitle': 'Discover',
    'process.oneText': 'We understand your offer, audience, and ideal client journey.',
    'process.twoTitle': 'Build',
    'process.twoText': 'We shape the experience and connect your follow-up systems with care.',
    'process.threeTitle': 'Grow',
    'process.threeText': 'Your site and workflows work together to nurture and convert.',
    'ai.title': 'A calm, polished assistant for your website.',
    'ai.toolbar': 'WhatsApp-ready AI companion',
    'ai.chatIntro': 'Hi! I can help with pricing, timelines, or your next project. Choose OpenAI or Gemini and add your API key to start.',
    'ai.apiKey': 'API key',
    'ai.input': 'Ask about your website, automation, or next steps...',
    'ai.send': 'Send',
    'ai.sideTitle': 'Business-ready automation',
    'ai.sideText': 'Use this AI layer with OpenAI or Gemini and connect your WhatsApp Business workflow when you are ready.',
    'ai.bullet1': 'Instant lead qualification',
    'ai.bullet2': 'Polished conversations',
    'ai.bullet3': 'Clear handoff to your team',
    'contact.eyebrow': 'Contact',
    'contact.title': 'Let’s create something refined.',
    'contact.description': 'Tell us about your brand, goals, and current focus. We will follow up with a thoughtful plan and clear next steps.',
    'form.name': 'Name',
    'form.namePlaceholder': 'Your name',
    'form.email': 'Email',
    'form.emailPlaceholder': 'your@email.com',
    'form.company': 'Company',
    'form.companyPlaceholder': 'Your company',
    'form.brief': 'Project brief',
    'form.briefPlaceholder': 'Tell us about your goals',
    'form.submit': 'Request a proposal',
    'contact.status': 'Your submission will be saved securely.',
    'footer.text': 'Minimal digital experiences for modern brands.',
    'status.sending': 'Sending your details...',
    'status.success': 'Thanks! Your details were received successfully.',
    'status.error': 'Something went wrong. Please try again or email us directly.',
    'ai.error': 'The AI request could not be completed. Check your API key and network connection and try again.',
    'ai.missingKey': 'Please add an API key for OpenAI or Gemini to activate the concierge.'
  },
  hi: {
    'nav.services': 'सेवाएँ',
    'nav.work': 'कार्य',
    'nav.ai': 'एआई सहायक',
    'nav.contact': 'संपर्क',
    'hero.eyebrow': 'प्रिमियम डिजिटल स्टूडियो',
    'hero.title': 'सुंदर वेबसाइटें, विचारशील स्वचालन और शांत रूप से रुझान।',
    'hero.subtitle': 'हम founders और premium ब्रांड्स के लिए स्पष्ट, आधुनिक डिजिटल अनुभव बनाते हैं, जो polished दिखें और आसानी से रूपांतरण दें।',
    'hero.ctaPrimary': 'अपना प्रोजेक्ट शुरू करें',
    'hero.ctaSecondary': 'एआई सहायक देखें',
    'hero.point1': 'सरल और तेज डिज़ाइन',
    'hero.point2': 'स्मार्ट एआई-सहायता वाली बातचीत',
    'hero.point3': 'स्वच्छ lead capture और follow-up',
    'stats.leadLift': 'औसत lead वृद्धि',
    'stats.support': 'एआई समर्थन',
    'stats.satisfaction': 'ग्राहक संतुष्टि',
    'stats.speed': 'तेज़ी से प्रतिक्रिया',
    'services.eyebrow': 'सेवाएँ',
    'services.title': 'उद्देश्यपूर्ण ब्रांड्स के लिए बनाया गया।',
    'services.oneTitle': 'ब्रांड अनुभव',
    'services.oneText': 'सुघड़ दृश्य, विचारशील संदेश, और एक प्रीमियम वेब उपस्थिति जो सहज लगे।',
    'services.twoTitle': 'रूपांतरण प्रवाह',
    'services.twoText': 'स्वच्छ landing pages, सरल ऑटोमेशन, और lead capture जो शांत और स्पष्ट लगे।',
    'services.threeTitle': 'एआई सहायक',
    'services.threeText': 'OpenAI या Gemini-आधारित बातचीत जो सवालों का जवाब देती हैं और leads को वास्तविक समय में qualify करती हैं।',
    'work.eyebrow': 'विशेष कार्य',
    'work.title': 'आधुनिक, Polished, और conversion के लिए तैयार।',
    'work.oneText': 'एक आत्मविश्वासपूर्ण finance उपस्थिति जिसमें मजबूत trust signals और शांत lead journey हो।',
    'work.twoText': 'एक high-conversion launch site जिसमें बुद्धिमान support शामिल हो।',
    'work.threeText': 'एक परिष्कृत luxury brand experience जो elegance और clarity को संतुलित रखती है।',
    'process.eyebrow': 'प्रक्रिया',
    'process.title': 'पहले click से पहले client तक एक सीधा मार्ग।',
    'process.oneTitle': 'खोजें',
    'process.oneText': 'हम आपके offer, audience और ideal client journey को समझते हैं।',
    'process.twoTitle': 'बनाएँ',
    'process.twoText': 'हम अनुभव को आकार देते हैं और आपके follow-up systems को ध्यान से जोड़ते हैं।',
    'process.threeTitle': 'बढ़ाएँ',
    'process.threeText': 'आपकी site और workflows मिलकर nurture और convert करती हैं।',
    'ai.toolbar': 'WhatsApp-तैयार AI companion',
    'ai.chatIntro': 'नमस्ते! मैं pricing, timelines, या आपके अगले project में मदद कर सकता हूँ। OpenAI या Gemini चुनें और शुरू करने के लिए अपनी API key जोड़ें।',
    'ai.apiKey': 'API key',
    'ai.input': 'अपनी वेबसाइट, ऑटोमेशन, या अगले कदमों के बारे में पूछें...',
    'ai.send': 'भेजें',
    'ai.sideTitle': 'बिज़नेस-तैयार ऑटोमेशन',
    'ai.sideText': 'OpenAI या Gemini के साथ यह AI layer इस्तेमाल करें और अपनी WhatsApp Business workflow को जब चाहें जोड़ें।',
    'ai.bullet1': 'तत्काल lead qualification',
    'ai.bullet2': 'परिष्कृत बातचीत',
    'ai.bullet3': 'टीम तक स्पष्ट handoff',
    'contact.eyebrow': 'संपर्क',
    'contact.title': 'आइए कुछ परिष्कृत बनाएं।',
    'contact.description': 'हमें अपने ब्रांड, लक्ष्यों और वर्तमान फोकस के बारे में बताएँ। हम thoughtful plan और स्पष्ट next steps के साथ आपसे संपर्क करेंगे।',
    'form.name': 'नाम',
    'form.namePlaceholder': 'आपका नाम',
    'form.email': 'ईमेल',
    'form.emailPlaceholder': 'your@email.com',
    'form.company': 'कंपनी',
    'form.companyPlaceholder': 'आपकी कंपनी',
    'form.brief': 'प्रोजेक्ट विवरण',
    'form.briefPlaceholder': 'अपने लक्ष्यों के बारे में बताएं',
    'form.submit': 'प्रस्ताव मांगें',
    'contact.status': 'आपकी submission सुरक्षित रूप से सहेजी जाएगी।',
    'footer.text': 'आधुनिक ब्रांड्स के लिए न्यूनतम डिजिटल अनुभव।',
    'status.sending': 'आपकी जानकारी भेजी जा रही है...',
    'status.success': 'धन्यवाद! आपकी जानकारी सफलतापूर्वक प्राप्त कर ली गई है।',
    'status.error': 'कुछ गलत हो गया। कृपया फिर से कोशिश करें या सीधे हमें ईमेल करें।',
    'ai.error': 'AI request पूरा नहीं हो सका। अपनी API key और network connection जांचें।',
    'ai.missingKey': 'OpenAI या Gemini को सक्रिय करने के लिए कृपया API key जोड़ें।'
  }
};

function buildFormPayload(formData) {
  return new URLSearchParams(formData).toString();
}

function updateYear() {
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

function translatePage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.body.dataset.lang = lang;

  if (langToggle) {
    langToggle.textContent = lang === 'en' ? 'EN / HI' : 'HI / EN';
  }

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });
}

function setStatus(messageKey) {
  if (!contactStatus) {
    return;
  }
  contactStatus.textContent = translations[currentLang][messageKey];
}

async function submitContact(event) {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const payload = Object.fromEntries(formData.entries());

  setStatus('status.sending');

  try {
    const response = await fetch(submitEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: buildFormPayload(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to save submission');
    }

    const stored = JSON.parse(localStorage.getItem('aman-leads') || '[]');
    stored.push(payload);
    localStorage.setItem('aman-leads', JSON.stringify(stored));
    setStatus('status.success');
    contactForm.reset();
  } catch (error) {
    console.error(error);
    setStatus('status.error');
  }
}

function AnimatedFeature() {
  React.useEffect(() => {
    if (!window.gsap) return;

    const timeline = gsap.timeline({ defaults: { duration: 0.8, ease: 'power3.out' } });
    timeline.from('.feature-card', { opacity: 0, y: 36, scale: 0.98 });
    timeline.from('.feature-tag', { y: -12, opacity: 0 }, '<');
    timeline.from('.feature-card h2', { y: 18, opacity: 0 }, '<0.12');
    timeline.from('.feature-card p', { y: 18, opacity: 0 }, '<0.12');
    timeline.from('.feature-card .btn', { y: 16, opacity: 0, stagger: 0.1 }, '<0.08');
  }, []);

  return React.createElement(
    'div',
    { className: 'feature-card' },
    React.createElement('div', { className: 'feature-tag' }, 'Elevated by GSAP & React'),
    React.createElement('h2', null, 'Motion-led websites that convert with clarity.'),
    React.createElement(
      'p',
      null,
      'A polished experience that uses subtle animation, clean layouts, and strong visual hierarchy to keep visitors focused on your brand story.'
    ),
    React.createElement(
      'div',
      { style: { display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginTop: '24px' } },
      React.createElement(
        'a',
        { className: 'btn btn-primary', href: '#contact' },
        'Start a project'
      ),
      React.createElement(
        'a',
        { className: 'btn btn-primary', href: '#services' },
        'View services'
      )
    )
  );
}

function initAnimatedFeature() {
  const rootEl = document.getElementById('heroReactRoot');
  if (!rootEl || !window.React || !window.ReactDOM) return;

  const root = ReactDOM.createRoot(rootEl);
  root.render(React.createElement(AnimatedFeature));
}

if (contactForm) {
  contactForm.addEventListener('submit', submitContact);
}

if (langToggle) {
  langToggle.addEventListener('click', () => {
    translatePage(currentLang === 'en' ? 'hi' : 'en');
  });
}

updateYear();
translatePage(currentLang);
initAnimatedFeature();
