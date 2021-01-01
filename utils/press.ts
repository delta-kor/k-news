const pressMap: Map<string, string> = new Map();

pressMap.set('경향신문', 'khan');
pressMap.set('국민일보', 'kukminilbo');
pressMap.set('뉴스1', 'news1');
pressMap.set('뉴시스', 'newsis');
pressMap.set('동아일보', 'donga');
pressMap.set('문화일보', 'munhwa');
pressMap.set('서울신문', 'seoul');
pressMap.set('세계일보', 'segye');
pressMap.set('연합뉴스', 'yonhap');
pressMap.set('조선일보', 'chosun');
pressMap.set('중앙일보', 'joongang');
pressMap.set('한겨레', 'hani');
pressMap.set('한국일보', 'hankooki');
pressMap.set('매일경제', 'mk');
pressMap.set('머니투데이', 'moneytoday');
pressMap.set('서울경제', 'seouleconomy');
pressMap.set('아시아경제', 'akn');
pressMap.set('이데일리', 'edaily');
pressMap.set('조선비즈', 'chosunbiz');
pressMap.set('파이낸셜뉴스', 'fnnews');
pressMap.set('한국경제', 'ked');
pressMap.set('헤럴드경제', 'ned');
pressMap.set('노컷뉴스', 'nocut');
pressMap.set('뉴스타파', 'newstapa');
pressMap.set('더팩트', 'thefact');
pressMap.set('데일리안', 'dailian');
pressMap.set('머니s', 'moneyweek');
pressMap.set('아이뉴스24', 'inews24');
pressMap.set('오마이뉴스', 'ohmynews');
pressMap.set('쿠키뉴스', 'kukinews');
pressMap.set('프레시안', 'pressian');

export default function getPressImage(name: string): string {
  return `/press/${pressMap.get(name)}.png` || null;
}
