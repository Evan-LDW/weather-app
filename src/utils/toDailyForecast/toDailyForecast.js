import { eachDayofInterval, addDays } from "data-fns";

const toDailyForest = (forecast, cnt = 5) => {
  const today = new Date();
  const days = eachDayofInterval({
    start: today,
    end: addDays(today + cnt),
  });

  const daysTimestamp = days.map((day) => {
    return day.getTime();
  });
  return forecast.filter(({ dt }) => daysTimestamp.includes(dt * 1000));
};

export default toDailyForest;
