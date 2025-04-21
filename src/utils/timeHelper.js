import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export const diffTimeStamp = (timestamp, until = "now", min_unit = "all") => {
  if (timestamp === undefined) {
    return "";
  }

  // Current date or custom 'until' date in UTC
  const curDate = until === "now" ? dayjs().utc() : dayjs.utc(until);
  const targetDateUtc = dayjs.utc(timestamp);

  const units = ["year", "month", "day", "hour", "minute", "second"];
  let diff, unit;

  for (let i = 0; i < units.length; i++) {
    const unitDiff = curDate.diff(targetDateUtc, units[i]);
    if (unitDiff > 0 || units[i] === min_unit) {
      diff = unitDiff;
      unit = units[i].charAt(0);
      if (unit === "m") {
        unit = units[i] === "month" ? "m" : "min";
      }
      break;
    }
  }

  if (unit === "d" && min_unit === "day") {
    diff = diff || 1;
  }

  unit = unit === "second" ? "sec" : unit;
  return diff.toString().concat(unit, until !== "now" ? "" : "");
};
