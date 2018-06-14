import layout from "./layout.json";
import home from "./home.json";
import fields from "./fields.json";

const nestedMessages = {
  layout,
  home,
  fields
};

function flatten(nestedMessages, prefix = "") {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    let value = nestedMessages[key];
    let prefixedKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "string") {
      messages[prefixedKey] = value;
    } else {
      Object.assign(messages, flatten(value, prefixedKey));
    }
    return messages;
  }, {});
}

export default flatten(nestedMessages);
