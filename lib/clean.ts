export function clean(text: string): string {
  const pattern =/(^|\s)euh($|\s)/;

  return text.replace(pattern, '$1$2');
}
