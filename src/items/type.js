const oRegexType = /^[*][\w]*[*]/;

export default (sLine) => {
  const aLabel = oRegexType.exec(sLine.trim());
  if (Array.isArray(aLabel) && aLabel.length !== 0) {
    return {
      type: aLabel[0].substring(1, aLabel[0].length - 1),
      content: sLine.replace(aLabel[0], '').trim(),
    };
  }
  return {
    type: 'default',
    content: sLine,
  };
};
