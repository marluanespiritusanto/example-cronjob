const cron = require("node-cron");
const { db, http, signs } = require("./util");

class Main {
  static async getHoroscope() {
    const todayHoroscope = [];
    for (const sign of signs) {
      const { horoscope } = (await http.get("/" + sign)).data;
      todayHoroscope.push({
        sign,
        horoscope
      });
    }

    const name = new Date()
      .toDateString()
      .split(" ")
      .join("_");

    db.setItem(name, JSON.stringify(todayHoroscope));
  }
}

cron.schedule("0 0 * * *", () => {
  Main.getHoroscope();
});
