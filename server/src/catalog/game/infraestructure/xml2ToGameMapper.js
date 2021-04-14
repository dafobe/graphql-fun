import gameFactory from '../domain/game.js';
import xmlParser from 'fast-xml-parser';

export const xml2ToGameMapper = (xml) => {
    const parsedXml = xmlParser.parse(xml);

    return gameFactory({
        name: parsedXml.items.item.name[0],
        description: parsedXml.items.item.description,
        thumbnail: parsedXml.items.item.thumbnail
    })
}