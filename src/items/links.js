const oRegexLink = /\[(.*?)\]\(.*?\)/;

export default (oItem) => {
  let { content } = oItem;
  const aLinks = [];
  let aResultLink = oRegexLink.exec(content.trim());
  while (Array.isArray(aResultLink) && aResultLink.length !== 0) {
    content = content.replace(aResultLink[0], '').trim();
    aLinks.push({
      url: aResultLink[0].substring(aResultLink[0].indexOf('](') + 2, aResultLink[0].length - 1),
      label: aResultLink[0].substring(1, aResultLink[0].indexOf('](')),
    });

    aResultLink = oRegexLink.exec(content.trim());
  }

  if (aLinks.length === 0) {
    return oItem;
  }
  return {
    ...oItem,
    content,
    links: aLinks,
  };
};
