export const countFormatter = (count, units) => {
  if (units === "km") {
    count = parseFloat(count);
    return count.toFixed(2);
  }
  else if (units === "hrs") {
    const hours = ("0" + count[0]).slice(-2); 
    const minutes = ("0" + count[1]).slice(-2);
    return `${hours}:${minutes}`;
  }
  return count;
}

export const getCurrentDate = () => {
  let date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day < 10 ? `0${day}` : day}/${month < 10 ? `0${month}` : month}/${year}`
}