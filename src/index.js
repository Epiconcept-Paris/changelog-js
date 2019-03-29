import splitTextByBlocks from './splitByBlocks';
import detectList from './list/detect';

import parseType from './items/type';
import parseImages from './items/images';
import parseLinks from './items/links';

export default (sText) => {
  const aText = sText.split('\n');

  // first, split text using blocks
  return splitTextByBlocks(aText).map(oBlock => ({
    ...oBlock,
    items: detectList(oBlock.mdContent).reduce((aPrev, aCurrentList) => ([
      ...aPrev,
      ...aCurrentList
        .filter(sLine => sLine.trim() !== '')
        .map(parseType).map(parseImages).map(parseLinks)
        .map(oItem => ({
          ...oItem,
          content: oItem.content.split('\n').filter(sLine => sLine.trim() !== '').join('\n'),
        })),
    ]), []),
    // cleanup
    mdContent: undefined,
  }));
};
