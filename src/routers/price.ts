import fetch from "node-fetch";

interface GoldPrice {
  gold_buy: string;
  gold_sell: string;
  gold_date: string;
}

const priceHandler = async () => {
  try {
    // เรียก API ไทยทอง
    const res = await fetch("https://thai-gold-api-1.vercel.app/latest");
    const data = await res.json();

    if (data.status === "success") {
      const latest: GoldPrice = data.response;

      return {
        status: "success",
        response: {
          buy: latest.gold_buy,
          sell: latest.gold_sell,
          date: latest.gold_date,
        },
      };
    } else {
      return {
        status: "error",
        response: "ไม่สามารถดึงราคาทองได้",
      };
    }
  } catch (err) {
    return {
      status: "error",
      response: "เกิดข้อผิดพลาดในการดึงข้อมูล",
    };
  }
};

export default priceHandler;
