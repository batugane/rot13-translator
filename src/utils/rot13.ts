// ROT13 function for encoding/decoding strings
export function rot13(str: string): string {
  return str.replace(/[a-zA-Z]/g, (char) => {
    const charCode = char.charCodeAt(0)
    const shift = char <= 'Z' ? 90 : 122
    const newCharCode = charCode + 13
    return String.fromCharCode(newCharCode > shift ? newCharCode - 26 : newCharCode)
  })
}
