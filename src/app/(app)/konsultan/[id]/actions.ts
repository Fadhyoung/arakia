export async function generateStaticParams() {

    const ids = ["konsultan-bangunan-gedung"];

    return ids.map((id) => ({ id }));
}

const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const RANGE = "Sheet1!A:B";

export const fetchImages = async (id: string): Promise<string[]> => {
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`
  );
  const data = await response.json();
  
  if (!data.values) return [];

  return (data.values as string[][])
    .slice(1)
    .filter((row: string[]) => row[0] === id && row.length > 1)
    .map((row: string[]) => row[1]);
};