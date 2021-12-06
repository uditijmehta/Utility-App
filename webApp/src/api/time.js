export const dateBuilder = (d) => {
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  let day = days[d.getDay()];
  const date = () => {
    const dateValue = new Date().getDate();
    if (dateValue <= 0) {
      return `0${dateValue}`;
    } else {
      return dateValue;
    }
  };
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date()} ${month} ${year}`;
};
