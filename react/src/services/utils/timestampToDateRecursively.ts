import firebase from "firebase";

export function timestampToDateRecursively(value: any): any {
  if (value == null) {
    return value;
  } else if (value.constructor === firebase.firestore.Timestamp) {
    return value.toDate();
  } else if (Array.isArray(value)) {
    return value.map(timestampToDateRecursively);
  } else if (value.constructor === Object) {
    const converted: any = {};
    for (const key in value) {
      converted[key] = timestampToDateRecursively(value[key]);
    }
    return converted;
  } else {
    return value;
  }
}
