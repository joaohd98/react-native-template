export {default} from "@react-native-community/async-storage/jest/async-storage-mock";

// let cache = {};
// export default {
//   setItem: (key, value) =>
//     new Promise((resolve, reject) =>
//       typeof key !== "string" || typeof value !== "string"
//         ? reject(new Error("key and value must be string"))
//         : resolve((cache[key] = value))
//     ),
//   getItem: (key, _value) =>
//     new Promise(resolve =>
//       cache.hasOwnProperty(key) ? resolve(cache[key]) : resolve(null)
//     ),
//   removeItem: key =>
//     new Promise((resolve, reject) =>
//       cache.hasOwnProperty(key)
//         ? resolve(delete cache[key])
//         : reject("No such key!")
//     ),
//   clear: _key => new Promise((resolve, _reject) => resolve((cache = {}))),
//
//   getAllKeys: _key =>
//     new Promise((resolve, _reject) => resolve(Object.keys(cache))),
// };
