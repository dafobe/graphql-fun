import gameFactory from '../domain/game.js';
import xmlParser from 'fast-xml-parser';

export const xml2ToGameMapper = (xml) => {
    const parsedXml = xmlParser.parse(xml, {
        ignoreAttributes: false
    });

    return gameFactory({
        bggId: parsedXml.items.item['@_id'],
        name: parsedXml.items.item.name[0]['@_value'],
        description: parsedXml.items.item.description,
        thumbnail: parsedXml.items.item.thumbnail
    })
}