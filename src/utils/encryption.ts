const ENCRYPTION_KEY = 'your-secret-key-123'; // In production, use environment variables

export const encrypt = (text: string): string => {
  const textToChars = (text: string) => text.split('').map(c => c.charCodeAt(0));
  const byteHex = (n: number) => ("0" + Number(n).toString(16)).substr(-2);
  const applySaltToChar = (code: number) => textToChars(ENCRYPTION_KEY).reduce((a, b) => a ^ b, code);

  return text
    .split('')
    .map(textToChars)
    .map(applySaltToChar)
    .map(byteHex)
    .join('');
};

export const decrypt = (encoded: string): string => {
  const textToChars = (text: string) => text.split('').map(c => c.charCodeAt(0));
  const applySaltToChar = (code: number) => textToChars(ENCRYPTION_KEY).reduce((a, b) => a ^ b, code);
  
  return encoded
    .match(/.{1,2}/g)!
    .map(hex => parseInt(hex, 16))
    .map(applySaltToChar)
    .map(charCode => String.fromCharCode(charCode))
    .join('');
}; 