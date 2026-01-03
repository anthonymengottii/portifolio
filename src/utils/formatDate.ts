export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();

  const dateString = date.includes("T") ? date : `${date}T00:00:00`;

  const targetDate = new Date(dateString);
  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo} ${yearsAgo === 1 ? "ano" : "anos"} atrás`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo} ${monthsAgo === 1 ? "mês" : "meses"} atrás`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo} ${daysAgo === 1 ? "dia" : "dias"} atrás`;
  } else {
    formattedDate = "Hoje";
  }

  const fullDate = targetDate.toLocaleString("pt-BR", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
