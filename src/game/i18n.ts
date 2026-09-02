// Localization system for Clásico Elite Football

export type Language = 'en' | 'fa';

export interface Translation {
  // Main Menu
  menuTitle: string;
  menuSubtitle: string;
  menuDesc: string;
  playMatch: string;
  chooseTeams: string;
  career: string;
  buildLegacy: string;
  tournament: string;
  competeForCup: string;
  clubs: string;
  teamsKitsRatings: string;
  players: string;
  starMenOfLeague: string;
  settings: string;
  gameSoundControls: string;
  help: string;
  about: string;
  
  // Team Select
  selectYourTeam: string;
  selectOpponent: string;
  kickOff: string;
  back: string;
  
  // Settings
  matchClock: string;
  aiDifficulty: string;
  stadiumSound: string;
  volume: string;
  screenShake: string;
  quick: string;
  classic: string;
  epic: string;
  amateur: string;
  pro: string;
  legend: string;
  
  // Match
  pause: string;
  resume: string;
  restart: string;
  exit: string;
  score: string;
  gameTime: string;
  fullTime: string;
  halfTime: string;
  goal: string;
  win: string;
  lose: string;
  draw: string;
  gameOver: string;
  continue: string;
  
  // Career
  careerMode: string;
  newSeason: string;
  currentStandings: string;
  nextMatch: string;
  seasonComplete: string;
  finalPosition: string;
  playNextRound: string;
  
  // Cup
  cupMode: string;
  quarterFinals: string;
  semiFinals: string;
  theFinal: string;
  champion: string;
  eliminated: string;
  
  // Help
  howToPlay: string;
  menuGuide: string;
  objective: string;
  startGame: string;
  playerMovement: string;
  pass: string;
  shoot: string;
  defend: string;
  keyboardControls: string;
  touchControls: string;
  pauseResume: string;
  
  // About
  aboutDeveloper: string;
  aboutText1: string;
  aboutText2: string;
  teacherContact: string;
  
  // Language
  language: string;
  english: string;
  persian: string;
  
  // Common
  press: string;
  toNavigate: string;
  keyboardTouch: string;
}

export const translations: Record<Language, Translation> = {
  en: {
    menuTitle: 'CLÁSSICO',
    menuSubtitle: 'ELITE FOOTBALL',
    menuDesc: 'ELEVEN AGAINST ELEVEN UNDER THE FLOODLIGHTS. ONE ENGINE. ONE NIGHT. ONE CLÁSICO.',
    playMatch: 'PLAY MATCH',
    chooseTeams: 'CHOOSE YOUR TEAMS',
    career: 'CAREER',
    buildLegacy: 'BUILD YOUR LEGACY',
    tournament: 'TOURNAMENT',
    competeForCup: 'COMPETE FOR THE CUP',
    clubs: 'CLUBS',
    teamsKitsRatings: 'TEAMS • KITS • RATINGS',
    players: 'PLAYERS',
    starMenOfLeague: 'STAR MEN OF THE LEAGUE',
    settings: 'SETTINGS',
    gameSoundControls: 'GAME • SOUND • CONTROLS',
    help: 'HELP',
    about: 'ABOUT',
    
    selectYourTeam: 'SELECT YOUR TEAM',
    selectOpponent: 'SELECT OPPONENT',
    kickOff: 'KICK OFF',
    back: 'BACK',
    
    matchClock: 'MATCH CLOCK',
    aiDifficulty: 'AI DIFFICULTY',
    stadiumSound: 'STADIUM SOUND',
    volume: 'VOLUME',
    screenShake: 'SCREEN SHAKE',
    quick: 'QUICK',
    classic: 'CLASSIC',
    epic: 'EPIC',
    amateur: 'AMATEUR',
    pro: 'PRO',
    legend: 'LEGEND',
    
    pause: 'PAUSE',
    resume: 'RESUME',
    restart: 'RESTART',
    exit: 'EXIT',
    score: 'SCORE',
    gameTime: 'TIME',
    fullTime: 'FULL TIME',
    halfTime: 'HALF TIME',
    goal: 'GOAL!',
    win: 'WIN',
    lose: 'LOSE',
    draw: 'DRAW',
    gameOver: 'GAME OVER',
    continue: 'CONTINUE',
    
    careerMode: 'CAREER MODE',
    newSeason: 'NEW SEASON',
    currentStandings: 'CURRENT STANDINGS',
    nextMatch: 'NEXT MATCH',
    seasonComplete: 'SEASON COMPLETE',
    finalPosition: 'FINAL POSITION',
    playNextRound: 'PLAY NEXT ROUND',
    
    cupMode: 'CUP MODE',
    quarterFinals: 'QUARTER-FINALS',
    semiFinals: 'SEMI-FINALS',
    theFinal: 'THE FINAL',
    champion: 'CHAMPION',
    eliminated: 'ELIMINATED',
    
    howToPlay: 'HOW TO PLAY',
    menuGuide: 'MENU GUIDE',
    objective: 'OBJECTIVE',
    startGame: 'START GAME',
    playerMovement: 'PLAYER MOVEMENT',
    pass: 'PASS',
    shoot: 'SHOOT',
    defend: 'DEFEND',
    keyboardControls: 'KEYBOARD CONTROLS',
    touchControls: 'TOUCH CONTROLS',
    pauseResume: 'PAUSE / RESUME',
    
    aboutDeveloper: 'About the Developer',
    aboutText1: 'Arsam, 11 years old, from Dubai',
    aboutText2: 'Student in Dr. Aghaei\'s class',
    teacherContact: 'Teacher Contact:',
    
    language: 'LANGUAGE',
    english: 'English',
    persian: 'فارسی',
    
    press: 'PRESS',
    toNavigate: 'TO NAVIGATE',
    keyboardTouch: 'KEYBOARD + TOUCH',
  },
  fa: {
    menuTitle: 'کلاسیکو',
    menuSubtitle: 'فوتبال نخبگان',
    menuDesc: 'یازده در برابر یازده زیر نورافکن‌ها. یک موتور. یک شب. یک کلاسیکو.',
    playMatch: 'شروع بازی',
    chooseTeams: 'تیم‌های خود را انتخاب کنید',
    career: 'حرفه‌ای',
    buildLegacy: 'سابقه خود را بسازید',
    tournament: 'مسابقات',
    competeForCup: 'برای جام رقابت کنید',
    clubs: 'باشگاه‌ها',
    teamsKitsRatings: 'تیم‌ها • کیت‌ها • امتیازات',
    players: 'بازیکنان',
    starMenOfLeague: 'ستارگان لیگ',
    settings: 'تنظیمات',
    gameSoundControls: 'بازی • صدا • کنترل‌ها',
    help: 'راهنما',
    about: 'درباره سازنده',
    
    selectYourTeam: 'تیم خود را انتخاب کنید',
    selectOpponent: 'حریف را انتخاب کنید',
    kickOff: 'شروع',
    back: 'بازگشت',
    
    matchClock: 'زمان بازی',
    aiDifficulty: 'سطح هوش مصنوعی',
    stadiumSound: 'صدای استادیوم',
    volume: 'حجم صدا',
    screenShake: 'لرزش صفحه',
    quick: 'سریع',
    classic: 'کلاسیک',
    epic: 'حماسی',
    amateur: 'تازه‌کار',
    pro: 'حرفه‌ای',
    legend: 'افسانه‌ای',
    
    pause: 'توقف',
    resume: 'ادامه',
    restart: 'شروع مجدد',
    exit: 'خروج',
    score: 'نتیجه',
    gameTime: 'زمان',
    fullTime: 'پایان بازی',
    halfTime: 'پایان نیمه',
    goal: 'گل!',
    win: 'برد',
    lose: 'باخت',
    draw: 'مساوی',
    gameOver: 'پایان بازی',
    continue: 'ادامه',
    
    careerMode: 'حالت حرفه‌ای',
    newSeason: 'فصل جدید',
    currentStandings: 'جدول فعلی',
    nextMatch: 'بازی بعدی',
    seasonComplete: 'فصل کامل شد',
    finalPosition: 'جایگاه نهایی',
    playNextRound: 'بازی دور بعدی',
    
    cupMode: 'حالت جام',
    quarterFinals: 'یک چهارم نهایی',
    semiFinals: 'نیمه نهایی',
    theFinal: 'فینال',
    champion: 'قهرمان',
    eliminated: 'حذف شده',
    
    howToPlay: 'راهنمای بازی',
    menuGuide: 'راهنمای منوها',
    objective: 'هدف بازی',
    startGame: 'شروع بازی',
    playerMovement: 'حرکت بازیکن',
    pass: 'پاس',
    shoot: 'شوت',
    defend: 'دفاع',
    keyboardControls: 'کنترل‌های کیبورد',
    touchControls: 'کنترل‌های لمسی',
    pauseResume: 'توقف / ادامه',
    
    aboutDeveloper: 'درباره سازنده',
    aboutText1: 'آرسام، ۱۱ ساله از دبی',
    aboutText2: 'از هنرجویان کلاس خانم دکتر آقایی',
    teacherContact: 'شماره استاد:',
    
    language: 'زبان',
    english: 'English',
    persian: 'فارسی',
    
    press: 'فشار دهید',
    toNavigate: 'برای پیمایش',
    keyboardTouch: 'کیبورد + لمس',
  },
};

export function getTranslation(lang: Language): Translation {
  return translations[lang];
}

export function saveLanguage(lang: Language) {
  try {
    localStorage.setItem('cn_language_v1', lang);
  } catch { /* noop */ }
}

export function loadLanguage(): Language {
  try {
    const saved = localStorage.getItem('cn_language_v1');
    if (saved === 'en' || saved === 'fa') return saved;
  } catch { /* noop */ }
  return 'en';
}
