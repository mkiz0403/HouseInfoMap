import xlsx from "xlsx";
import fs from "fs";
import path from "path";

const excelFilePath = path.join(__dirname, "xlsx", "hoseInfoxlsx.xlsx");

const workbook = xlsx.readFile(excelFilePath);

const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

const jsonData = xlsx.utils.sheet_to_json(worksheet);

const extractedData = jsonData.slice(0, 243);

const jsonFilePath = path.join(__dirname, "hoseInfoxlsx.json");
fs.writeFileSync(jsonFilePath, JSON.stringify(extractedData, null, 2));

console.log("엑셀 데이터를 JSON 형태로 변환했습니다:", extractedData);
