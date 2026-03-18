const basePath = process.env.NODE_ENV === 'production' ? '/moritz-CV-' : '';

export function withPrefix(path: string): string {
  if (path.startsWith('http') || path.startsWith('#') || path.startsWith('mailto:')) {
    return path;
  }
  return `${basePath}${path}`;
}

export default basePath;
