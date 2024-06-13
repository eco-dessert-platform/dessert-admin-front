export default function objToParams(obj: Object) {
  const filteredObject = Object.entries(obj).filter(
    ([, value]) => value !== null && value !== undefined
  );
  return new URLSearchParams(filteredObject).toString();
}
