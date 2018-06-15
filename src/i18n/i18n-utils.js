/**
 * Transform a JSON tree into a flat key/value objet
 * Example: flatten({form: {player: {name: 'My label'}})
 * will return {'form.player.name': 'My label'}
 */
export function flatten(nestedMessages, prefix = "") {
  if (!nestedMessages) return {};
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
