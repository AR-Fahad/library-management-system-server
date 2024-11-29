const getDayDifference = (date1: any, date2: any) => {
  const oneDay = 1000 * 60 * 60 * 24; // Milliseconds in one day
  const diffInTime = Math.abs(date2 - date1); // Absolute difference in milliseconds
  return Math.floor(diffInTime / oneDay); // Convert to days
};

export default getDayDifference;
