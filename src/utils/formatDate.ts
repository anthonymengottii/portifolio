const INTL_LOCALE: Record<"pt" | "en", string> = {
  pt: "pt-BR",
  en: "en",
};

const RELATIVE_STRINGS = {
  pt: {
    year: "ano",
    years: "anos",
    month: "mês",
    months: "meses",
    day: "dia",
    days: "dias",
    ago: "atrás",
    today: "Hoje",
  },
  en: {
    year: "year",
    years: "years",
    month: "month",
    months: "months",
    day: "day",
    days: "days",
    ago: "ago",
    today: "Today",
  },
} as const;

export function formatDate(
  date: string,
  includeRelative = false,
  locale: "pt" | "en" = "pt"
) {
  const currentDate = new Date();
  const dateString = date.includes("T") ? date : `${date}T00:00:00`;
  const targetDate = new Date(dateString);
  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  const rel = RELATIVE_STRINGS[locale];
  let formattedRelative = "";

  if (yearsAgo > 0) {
    formattedRelative = `${yearsAgo} ${yearsAgo === 1 ? rel.year : rel.years} ${rel.ago}`;
  } else if (monthsAgo > 0) {
    formattedRelative = `${monthsAgo} ${monthsAgo === 1 ? rel.month : rel.months} ${rel.ago}`;
  } else if (daysAgo > 0) {
    formattedRelative = `${daysAgo} ${daysAgo === 1 ? rel.day : rel.days} ${rel.ago}`;
  } else {
    formattedRelative = rel.today;
  }

  const intlLocale = INTL_LOCALE[locale];
  const fullDate = targetDate.toLocaleString(intlLocale, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedRelative})`;
}
