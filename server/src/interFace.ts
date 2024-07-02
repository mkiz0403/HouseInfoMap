export interface HouseInfo {
  순번: number;
  지역본부: string;
  지역: string;
  명: string;
  주소: string;
  동?: string;
  호: number;
  "주택군 이름": string;
  주택열람일정: string;
  공급형: string;
  성별용도구분: string;
  "전용\r\n면적": number;
  "주거공용\r\n면적": number;
  면적계: number;
  방수: number;
  층수: string;
  "승강기\r\n유무": string;
  주택유형: string;
  복층여부?: string;
  임대보증금: number;
  월임대료: number;
  임대보증금_1: number;
  월임대료_1: number;
  임대보증금_2: number;
  월임대료_2: number;
  임대보증금_3: number;
  월임대료_3: number;
}

export interface HouseInfo2 {
  __EMPTY: number;
  주소: string;
  동: string | undefined;
  호: number;
  "주택군 이름": string;
  주택열람일정: string;
  "전용\r\n면적": number;
  "주거공용\r\n면적": number;
  면적계: number;
  방수: number;
  층수: string;
  "승강기\r\n유무": string;
  주택유형: string;
  임대보증금: number;
  월임대료: number;
  임대보증금_1: number;
  월임대료_1: number;
}
