import xlsx from "xlsx";
import fs from "fs";
import path from "path";
import { HouseInfo, HouseInfo2 } from "./interFace";

const excelFilePath = path.join(__dirname, "xlsx", "houseInfoxlsx.xlsx");

const workbook = xlsx.readFile(excelFilePath);

const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

const jsonData = xlsx.utils.sheet_to_json<HouseInfo>(worksheet);

function formatNumberWithCommas(num: number): string {
  return num.toLocaleString("en-US");
}

// const extractedData: HouseInfo2[] = jsonData.slice(0, 300).map((item: any) => {
//   return {
//     __EMPTY: Number(item["__EMPTY"]),
//     주소: item["주소"],
//     동: item["동"] ? String(item["동"]) : undefined,
//     호: Number(item["호"]),
//     "주택군 이름": item["주택군 이름"],
//     주택열람일정: item["주택열람일정"],
//     "전용\r\n면적": Number(item["전용\r\n면적"]),
//     "주거공용\r\n면적": Number(item["주거공용\r\n면적"]),
//     면적계: Number(item["면적계"]),
//     방수: Number(item["방수"]),
//     층수: item["층수"],
//     "승강기\r\n유무": item["승강기\r\n유무"],
//     주택유형: item["주택유형"],
//     임대보증금: Number(item["임대보증금"]),
//     월임대료: Number(item["월임대료"]),
//     임대보증금_1: Number(item["임대보증금_1"]),
//     월임대료_1: Number(item["월임대료_1"]),
//     임대보증금_2: Number(item["임대보증금_2"]),
//     월임대료_2: Number(item["월임대료_2"]),
//     임대보증금_3: Number(item["임대보증금_3"]),
//     월임대료_3: Number(item["월임대료_3"]),
//   };
// });

// const formattedData = extractedData.map((item) => ({
//   ...item,
//   임대보증금: formatNumberWithCommas(item.임대보증금),
//   월임대료: formatNumberWithCommas(item.월임대료),
//   임대보증금_1: formatNumberWithCommas(item.임대보증금_1),
//   월임대료_1: formatNumberWithCommas(item.월임대료_1),
//   임대보증금_2: formatNumberWithCommas(item.임대보증금_2),
//   월임대료_2: formatNumberWithCommas(item.월임대료_2),
//   임대보증금_3: formatNumberWithCommas(item.임대보증금_3),
//   월임대료_3: formatNumberWithCommas(item.월임대료_3),
// }));

const extractedData: HouseInfo[] = jsonData.slice(0, 300).map((item: any) => {
  return {
    순번: Number(item["순번"]),
    지역본부: item["지역본부"],
    지역: item["지역"],
    명: item["명"],
    주소: item["주소"],
    동: item["동"] ? String(item["동"]) : undefined,
    호: Number(item["호"]),
    "주택군 이름": item["주택군 이름"],
    주택열람일정: item["주택열람일정"],
    공급형: item["공급형"],
    성별용도구분: item["성별용도구분"],
    "전용\r\n면적": Number(item["전용\r\n면적"]),
    "주거공용\r\n면적": Number(item["주거공용\r\n면적"]),
    면적계: Number(item["면적계"]),
    방수: Number(item["방수"]),
    층수: item["층수"],
    "승강기\r\n유무": item["승강기\r\n유무"],
    주택유형: item["주택유형"],
    복층여부: item["층"] ? String(item["층"]) : undefined,
    임대보증금: Number(item["임대보증금"]),
    월임대료: Number(item["월임대료"]),
    임대보증금_1: Number(item["임대보증금_1"]),
    월임대료_1: Number(item["월임대료_1"]),
    임대보증금_2: Number(item["임대보증금_2"]),
    월임대료_2: Number(item["월임대료_2"]),
    임대보증금_3: Number(item["임대보증금_3"]),
    월임대료_3: Number(item["월임대료_3"]),
  };
});

const formattedData = extractedData.map((item) => ({
  ...item,
  임대보증금: formatNumberWithCommas(item.임대보증금),
  월임대료: formatNumberWithCommas(item.월임대료),
  임대보증금_1: formatNumberWithCommas(item.임대보증금_1),
  월임대료_1: formatNumberWithCommas(item.월임대료_1),
  임대보증금_2: formatNumberWithCommas(item.임대보증금_2),
  월임대료_2: formatNumberWithCommas(item.월임대료_2),
  임대보증금_3: formatNumberWithCommas(item.임대보증금_3),
  월임대료_3: formatNumberWithCommas(item.월임대료_3),
}));

const jsonFilePath = path.join(__dirname, "houseInfoxlsx.json");
fs.writeFileSync(jsonFilePath, JSON.stringify(formattedData, null, 2));

console.log("엑셀 데이터를 JSON 형태로 변환했습니다:", formattedData);
