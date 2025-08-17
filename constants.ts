import type { Language } from './types';

export const LANGUAGES: Language[] = [
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'ar', name: 'العربية', dir: 'rtl' },
  { code: 'nl', name: 'Nederlands', dir: 'ltr' },
  { code: 'fr', name: 'Français', dir: 'ltr' },
  { code: 'es', name: 'Español', dir: 'ltr' },
];

export const STORY_THEMES = [
  { id: 'sci-fi-mystery', image: 'https://picsum.photos/seed/scifi/600/400' },
  { id: 'fantasy-quest', image: 'https://picsum.photos/seed/fantasy/600/400' },
  { id: 'cyberpunk-heist', image: 'https://picsum.photos/seed/cyberpunk/600/400' },
  { id: 'haunted-mansion', image: 'https://picsum.photos/seed/haunted/600/400' },
  { id: 'desert-expedition', image: 'https://picsum.photos/seed/desert/600/400' },
  { id: 'undersea-discovery', image: 'https://picsum.photos/seed/undersea/600/400' },
  { id: 'steampunk-revolution', image: 'https://picsum.photos/seed/steampunk/600/400' },
  { id: 'post-apocalyptic-survival', image: 'https://picsum.photos/seed/apocalypse/600/400' },
  { id: 'noir-detective', image: 'https://picsum.photos/seed/noir/600/400' },
  { id: 'mythological-odyssey', image: 'https://picsum.photos/seed/mythology/600/400' },
  { id: 'time-travel-paradox', image: 'https://picsum.photos/seed/timetravel/600/400' },
  { id: 'pirate-adventure', image: 'https://picsum.photos/seed/pirate/600/400' },
];

type ThemeText = {
    title: string;
    description: string;
}

type UiText = {
  title: string;
  subtitle: string;
  chooseYourStory: string;
  loadingMessage: string;
  errorMessage: string;
  tryAgain: string;
  backToMenu: string;
  playAgain: string;
  theEnd: string;
  themes: { [key: string]: ThemeText };
};

export const UI_TEXT: { [key: string]: UiText } = {
  en: {
    title: 'Nexus of Tales',
    subtitle: 'Your Adventure Awaits',
    chooseYourStory: 'Choose Your Story',
    loadingMessage: 'Weaving your fate...',
    errorMessage: 'An error occurred while crafting your story. Please try again.',
    tryAgain: 'Try Again',
    backToMenu: 'Back to Menu',
    playAgain: 'Play Again',
    theEnd: 'The End',
    themes: {
      'sci-fi-mystery': { title: 'Sci-Fi Mystery', description: 'An abandoned starship, a cryptic message. Uncover the truth before you become part of the void.' },
      'fantasy-quest': { title: 'Fantasy Quest', description: 'A dark prophecy, a legendary artifact, a kingdom to save. Your destiny is forged in magic and steel.' },
      'cyberpunk-heist': { title: 'Cyberpunk Heist', description: 'In a neon-drenched city, pull off the ultimate data heist against a world-owning mega-corporation.' },
      'haunted-mansion': { title: 'Haunted Mansion', description: 'Trapped inside a decaying manor, confront its vengeful spirits and escape before dawn.' },
      'desert-expedition': { title: 'Desert Expedition', description: 'Find a lost city of riches, but beware the ancient curse that protects it.' },
      'undersea-discovery': { title: 'Undersea Discovery', description: 'Pilot a submersible into the abyss to explore a trench hiding an impossible secret.' },
      'steampunk-revolution': { title: 'Steampunk Revolution', description: 'In a city of brass and steam, join the rebellion to overthrow a tyrannical regime.' },
      'post-apocalyptic-survival': { title: 'Post-Apocalyptic Survival', description: 'Navigate the ruins of a forgotten world. Every choice is a matter of life or death.' },
      'noir-detective': { title: 'Noir Detective', description: 'In a city of endless rain and secrets, solve a case that could cost you everything.' },
      'mythological-odyssey': { title: 'Mythological Odyssey', description: 'Embark on an epic journey to appease the gods and battle legendary beasts.' },
      'time-travel-paradox': { title: 'Time-Travel Paradox', description: 'A trip to the past has shattered the present. Can you fix the timeline before it collapses?' },
      'pirate-adventure': { title: 'Pirate Adventure', description: 'Seek legendary treasure on the high seas. Fortune or a watery grave awaits.' },
    },
  },
  ar: {
    title: 'ملتقى الحكايات',
    subtitle: 'مغامرتك تنتظرك',
    chooseYourStory: 'اختر حكايتك',
    loadingMessage: 'ننسج قدرك...',
    errorMessage: 'حدث خطأ أثناء صياغة قصتك. الرجاء معاودة المحاولة.',
    tryAgain: 'حاول مرة أخرى',
    backToMenu: 'العودة للقائمة',
    playAgain: 'العب مرة أخرى',
    theEnd: 'النهاية',
    themes: {
      'sci-fi-mystery': { title: 'غموض الخيال العلمي', description: 'سفينة فضاء مهجورة، رسالة غامضة. اكشف الحقيقة قبل أن تصبح جزءًا من الفراغ.' },
      'fantasy-quest': { title: 'مهمة خيالية', description: 'نبوءة مظلمة، قطعة أثرية أسطورية، مملكة لإنقاذها. مصيرك يصنع بالسحر والفولاذ.' },
      'cyberpunk-heist': { title: 'سرقة سايبربانك', description: 'في مدينة غارقة بالنيون، نفذ أكبر سرقة بيانات ضد شركة عملاقة تملك العالم.' },
      'haunted-mansion': { title: 'القصر المسكون', description: 'عالق داخل قصر متداعٍ، واجه أشباحه المنتقمة واهرب قبل الفجر.' },
      'desert-expedition': { title: 'رحلة صحراوية', description: 'اعثر على مدينة الثروات المفقودة، لكن احذر من اللعنة القديمة التي تحميها.' },
      'undersea-discovery': { title: 'اكتشاف تحت سطح البحر', description: 'قد غواصة إلى الهاوية لاستكشاف خندق يخفي سرًا مستحيلًا.' },
      'steampunk-revolution': { title: 'ثورة الستيم بانك', description: 'في مدينة من النحاس والبخار، انضم إلى الثورة للإطاحة بنظام استبدادي.' },
      'post-apocalyptic-survival': { title: 'بقاء ما بعد الكارثة', description: 'تجول في أنقاض عالم منسي. كل خيار هو مسألة حياة أو موت.' },
      'noir-detective': { title: 'محقق نوار', description: 'في مدينة المطر والأسرار التي لا تنتهي، قم بحل قضية قد تكلفك كل شيء.' },
      'mythological-odyssey': { title: 'ملحمة أسطورية', description: 'انطلق في رحلة ملحمية لإرضاء الآلهة ومحاربة الوحوش الأسطورية.' },
      'time-travel-paradox': { title: 'مفارقة السفر عبر الزمن', description: 'رحلة واحدة إلى الماضي حطمت الحاضر. هل يمكنك إصلاح الخط الزمني قبل أن ينهار؟' },
      'pirate-adventure': { title: 'مغامرة القراصنة', description: 'ارفع الأشرعة وابحث عن الكنز الأسطوري في البحار الغادرة. الثروة أو قبر مائي في انتظارك.' },
    },
  },
  nl: {
    title: 'Nexus van Verhalen',
    subtitle: 'Jouw Avontuur Wacht',
    chooseYourStory: 'Kies Je Verhaal',
    loadingMessage: 'Je lot wordt geweven...',
    errorMessage: 'Er is een fout opgetreden. Probeer het opnieuw.',
    tryAgain: 'Probeer Opnieuw',
    backToMenu: 'Terug naar Menu',
    playAgain: 'Speel Opnieuw',
    theEnd: 'Het Einde',
    themes: {
        'sci-fi-mystery': { title: 'Sci-Fi Mysterie', description: 'Een verlaten ruimteschip, een cryptisch bericht. Onthul de waarheid voordat je deel wordt van de leegte.' },
        'fantasy-quest': { title: 'Fantasie Zoektocht', description: 'Een duistere profetie, een legendarisch artefact, een koninkrijk om te redden. Je lot wordt gesmeed in magie en staal.' },
        'cyberpunk-heist': { title: 'Cyberpunk Overval', description: 'Voer in een neon-overgoten stad de ultieme data-overval uit op een mega-corporatie die de wereld bezit.' },
        'haunted-mansion': { title: 'Spookhuis', description: 'Gevangen in een vervallen landhuis, confronteer de wraakzuchtige geesten en ontsnap voor zonsopgang.' },
        'desert-expedition': { title: 'Woestijn Expeditie', description: 'Vind een verloren stad vol rijkdom, maar pas op voor de oude vloek die haar beschermt.' },
        'undersea-discovery': { title: 'Onderzeese Ontdekking', description: 'Bestuur een duikboot in de afgrond om een geul te verkennen die een onmogelijk geheim verbergt.' },
        'steampunk-revolution': { title: 'Steampunk Revolutie', description: 'Sluit je in een stad van koper en stoom aan bij de opstand om een tiranniek regime omver te werpen.' },
        'post-apocalyptic-survival': { title: 'Post-Apocalyptische Overleving', description: 'Navigeer door de ruïnes van een vergeten wereld. Elke keuze is een kwestie van leven of dood.' },
        'noir-detective': { title: 'Noir Detective', description: 'Los in een stad van eindeloze regen en geheimen een zaak op die je alles kan kosten.' },
        'mythological-odyssey': { title: 'Mythologische Odyssee', description: 'Begin aan een epische reis om de goden te sussen en legendarische beesten te bestrijden.' },
        'time-travel-paradox': { title: 'Tijdreisparadox', description: 'Een reis naar het verleden heeft het heden verbrijzeld. Kun jij de tijdlijn repareren?' },
        'pirate-adventure': { title: 'Piratenavontuur', description: 'Hijs de zeilen en zoek naar legendarische schatten. Fortuin of een watergraf wacht.' },
    },
  },
  fr: {
    title: 'Nexus des Contes',
    subtitle: 'Votre Aventure Vous Attend',
    chooseYourStory: 'Choisissez Votre Histoire',
    loadingMessage: 'Tissage de votre destin...',
    errorMessage: "Une erreur est survenue. Veuillez réessayer.",
    tryAgain: 'Réessayer',
    backToMenu: 'Retour au Menu',
    playAgain: 'Rejouer',
    theEnd: 'Fin',
    themes: {
        'sci-fi-mystery': { title: 'Mystère de Science-Fiction', description: 'Un vaisseau abandonné, un message cryptique. Découvrez la vérité avant de faire partie du vide.' },
        'fantasy-quest': { title: 'Quête Fantastique', description: 'Une sombre prophétie, un artefact légendaire, un royaume à sauver. Votre destin est forgé dans la magie et l\'acier.' },
        'cyberpunk-heist': { title: 'Casse Cyberpunk', description: 'Dans une ville inondée de néons, réalisez le casse de données ultime contre une méga-corporation.' },
        'haunted-mansion': { title: 'Manoir Hanté', description: 'Piégé dans un manoir délabré, affrontez ses esprits vengeurs et échappez-vous avant l\'aube.' },
        'desert-expedition': { title: 'Expédition dans le Désert', description: 'Trouvez une cité perdue de richesses, mais méfiez-vous de l\'ancienne malédiction qui la protège.' },
        'undersea-discovery': { title: 'Découverte Sous-Marine', description: 'Pilotez un submersible dans l\'abîme pour explorer une fosse cachant un secret impossible.' },
        'steampunk-revolution': { title: 'Révolution Steampunk', description: 'Dans une ville de laiton et de vapeur, rejoignez la rébellion pour renverser un régime tyrannique.' },
        'post-apocalyptic-survival': { title: 'Survie Post-Apocalyptique', description: 'Naviguez dans les ruines d\'un monde oublié. Chaque choix est une question de vie ou de mort.' },
        'noir-detective': { title: 'Détective Noir', description: 'Dans une ville de pluie et de secrets, résolvez une affaire qui pourrait tout vous coûter.' },
        'mythological-odyssey': { title: 'Odyssée Mythologique', description: 'Embarquez pour un voyage épique pour apaiser les dieux et combattre des bêtes légendaires.' },
        'time-travel-paradox': { title: 'Paradoxe Temporel', description: 'Un voyage dans le passé a brisé le présent. Pouvez-vous réparer la chronologie?' },
        'pirate-adventure': { title: 'Aventure de Pirate', description: 'Hissez les voiles et cherchez un trésor légendaire. La fortune ou une tombe aquatique vous attend.' },
    },
  },
  es: {
    title: 'Nexo de Relatos',
    subtitle: 'Tu Aventura te Espera',
    chooseYourStory: 'Elige Tu Historia',
    loadingMessage: 'Tejiendo tu destino...',
    errorMessage: 'Ocurrió un error. Por favor, inténtalo de nuevo.',
    tryAgain: 'Intentar de Nuevo',
    backToMenu: 'Volver al Menú',
    playAgain: 'Jugar de Nuevo',
    theEnd: 'Fin',
    themes: {
        'sci-fi-mystery': { title: 'Misterio de Ciencia Ficción', description: 'Una nave abandonada, un mensaje críptico. Descubre la verdad antes de ser parte del vacío.' },
        'fantasy-quest': { title: 'Búsqueda de Fantasía', description: 'Una profecía oscura, un artefacto legendario, un reino que salvar. Tu destino se forja en magia y acero.' },
        'cyberpunk-heist': { title: 'Atraco Cyberpunk', description: 'En una ciudad bañada en neón, realiza el atraco de datos definitivo contra una megacorporación.' },
        'haunted-mansion': { title: 'Mansión Encantada', description: 'Atrapado en una mansión en ruinas, enfréntate a sus espíritus vengativos y escapa antes del amanecer.' },
        'desert-expedition': { title: 'Expedición en el Desierto', description: 'Encuentra una ciudad perdida de riquezas, pero cuidado con la antigua maldición que la protege.' },
        'undersea-discovery': { title: 'Descubrimiento Submarino', description: 'Pilota un sumergible al abismo para explorar una fosa que esconde un secreto imposible.' },
        'steampunk-revolution': { title: 'Revolución Steampunk', description: 'En una ciudad de latón y vapor, únete a la rebelión para derrocar un régimen tiránico.' },
        'post-apocalyptic-survival': { title: 'Supervivencia Post-Apocalíptica', description: 'Navega por las ruinas de un mundo olvidado. Cada elección es una cuestión de vida o muerte.' },
        'noir-detective': { title: 'Detective Noir', description: 'En una ciudad de lluvia y secretos, resuelve un caso que podría costarte todo.' },
        'mythological-odyssey': { title: 'Odisea Mitológica', description: 'Embárcate en un viaje épico para apaciguar a los dioses y luchar contra bestias legendarias.' },
        'time-travel-paradox': { title: 'Paradoja del Viaje en el Tiempo', description: 'Un viaje al pasado ha destrozado el presente. ¿Puedes arreglar la línea de tiempo?' },
        'pirate-adventure': { title: 'Aventura Pirata', description: 'Iza las velas y busca tesoros legendarios. La fortuna o una tumba acuática te espera.' },
    },
  },
};