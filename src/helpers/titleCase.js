export default function titleCase(word) {
  return word.charAt(0).toUpperCase() + word.split("").splice(1).join("");
}
