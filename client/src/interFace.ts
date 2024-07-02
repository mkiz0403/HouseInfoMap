export interface HouseInfo {
  순번: number;
  지역본부: string;
  지역: string;
  명: string;
  주소: string;
  동?: string;
  호: number;
  주택군이름: string;
  주택열람일정: string;
  공급형: string;
  // 성별용도구분: string;
  전용면적: number;
  주거공용면적: number;
  면적계: number;
  방수: number;
  층수: string;
  승강기유무: string;
  주택유형: string;
  복층여부?: string;
  임대보증금: string;
  월임대료: string;
  임대보증금_1: string;
  월임대료_1: string;
  임대보증금_2: string;
  월임대료_2: string;
  임대보증금_3: string;
  월임대료_3: string;
}

export interface HouseInfo2 {
  순번: number;
  주소: string;
  동?: string | undefined;
  호: number;
  주택군이름: string;
  주택열람일정: string;
  전용면적: number;
  주거공용면적: number;
  면적계: number;
  방수: number;
  층수: string;
  승강기유무: string;
  주택유형: string;
  임대보증금: string;
  월임대료: string;
  임대보증금_1: string;
  월임대료_1: string;
}
