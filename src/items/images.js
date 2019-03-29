const oRegexImage = /!\[(.*?)\]\(.*?\)/;

export default (oItem) => {
  let { content } = oItem;
  const aImages = [];
  let aResult = oRegexImage.exec(content.trim());
  while (Array.isArray(aResult) && aResult.length !== 0) {
    content = content.replace(aResult[0], '').trim();
    aImages.push({
      url: aResult[0].substring(aResult[0].indexOf('](') + 2, aResult[0].length - 1),
      label: aResult[0].substring(2, aResult[0].indexOf('](')),
    });

    aResult = oRegexImage.exec(content.trim());
  }

  if (aImages.length === 0) {
    return oItem;
  }
  return {
    ...oItem,
    content,
    images: aImages,
  };
};
