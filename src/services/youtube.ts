export function formatViews(value: string | number) {
  return new Intl.NumberFormat('pt-BR', { notation: 'compact' }).format(Number(value));
}

export function timeAgo(date: string) {
  const seconds = (Date.now() - new Date(date).getTime()) / 1000;
  const units: [string, string, number][] = [
    ['ano', 'anos', 31536000], ['mês', 'meses', 2592000], ['dia', 'dias', 86400],
    ['hora', 'horas', 3600], ['minuto', 'minutos', 60],
  ];
  for (const [singular, plural, size] of units) {
    const n = Math.floor(seconds / size);
    if (n >= 1) return `${n} ${n === 1 ? singular : plural}`;
  }
  return 'instantes';
}

export function toCard(v: any, fallbackChannel = '') {
  return {
    id: v.id,
    url: v.url,
    title: v.title,
    channel: v.channel ?? fallbackChannel,
    views: formatViews(v.viewCount),
    time: v.publishedAt ? timeAgo(v.publishedAt) : 'instantes',
    thumbnail: v.thumbnail ?? undefined,
  };
}