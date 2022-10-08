
function book(day, hour, minute) {
  let res;
  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday": {
      if (hour < 0 || hour >= 24 || minute < 0 || minute >= 60) {
        res = "Invalid input";
      } else {
        if (hour >= 0 && hour <= 10) {
          res = "Not serving";
        } else {
          if (hour >= 11 && hour <= 16) {
            res = "229000VND";
          } else {
            if (hour >= 17 && hour <= 21) {
              res = "279000VND";
            } else {
              res = "Not serving";
            }
          }
        }
      }
      break;
    }

    case "Saturday":
    case "Sunday": {
      if (hour < 0 || hour >= 24 || minute < 0 || minute >= 60) {
        res = "Invalid input";
      } else {
        if (hour >= 0 && hour <= 10) {
          res = "Not serving";
        } else {
          if (hour >= 11 && hour <= 21) {
            res = "279000VND";
          } else {
            res = "Not serving";
          }
        }
      }
      break;
    }

    default:
      res = "Invalid input";
      break;
  }
  return res;
}

module.exports = book