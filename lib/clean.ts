export function clean(text: string): string {
  const pattern =/(^|\s)euh($|\s|.|\!)/g;

  return text.replace(pattern, '$1$2');
}
