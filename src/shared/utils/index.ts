export const toDisplayableDate = (date: number) =>
  new Date(date).toLocaleString();

type StringAssemblerTokens = {
  [key: string]: string;
};
type StringAssemblerTemplate = string;

/**
 * Assembles a string from a template and a set of tokens.
 *
 * @param {StringAssemblerTokens} tokens - The tokens to be used in the template.
 * @param {StringAssemblerTemplate} template - The template to be used to assemble the string.
 *
 * @example ```javascript
 *  stringAssembler({ name: 'John' }, 'Hello, {name}!') // 'Hello, John!
 * ```
 */
export const stringAssembler = (
  template: StringAssemblerTemplate,
  tokens: StringAssemblerTokens
) => {
  return Object.keys(tokens).reduce((acc, key) => {
    const tokenPattern = new RegExp(`{${key}}`, 'g');
    return acc.replace(tokenPattern, tokens[key]);
  }, template);
};

export const isYoutubeUrl = (url: string) => {
  const youtubeUrlPattern =
    /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/g;
  return youtubeUrlPattern.test(url);
};

export const getYouTubeVideoId = (url: string) => {
  if (!url.length) return false;
  if (!isYoutubeUrl(url)) return false;

  const youtubeVideoIdPattern = /(?<=v=|\/)([a-zA-Z0-9_-]{11})(?=&|$|\/)/;

  return url.match(youtubeVideoIdPattern)?.[0];
};
