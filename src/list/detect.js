export default (aText) => {
  const aLists = [];

  let bInsideList = false;
  aText.forEach((sLine) => {
    if (sLine.trim().indexOf('- ') === 0) {
      if (!bInsideList) {
        aLists.push([]);
        bInsideList = true;
      }
    } else {
      bInsideList = false;
    }

    if (bInsideList) {
      aLists[aLists.length - 1].push(sLine.substring(1).trim());
    } else if (aLists.length !== 0) {
      aLists[aLists.length - 1][aLists[aLists.length - 1].length - 1] += `\n${sLine.trim()}`;
    }
  });

  return aLists;
};
