export function transformUrlToId(url: string): number {
  const id = url.replace(/[\D]/g, '')

  return Number(id)
}
