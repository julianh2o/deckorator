const fs = require('fs');
const path = require('path');

module.exports.Deck = fs.readFileSync(path.join(__dirname, 'Deck.gql'), 'utf8');
module.exports.DeckCard = fs.readFileSync(path.join(__dirname, 'DeckCard.gql'), 'utf8');
module.exports.DeckCard_aggregate = fs.readFileSync(path.join(__dirname, 'DeckCard_aggregate.gql'), 'utf8');
module.exports.DeckCard_by_pk = fs.readFileSync(path.join(__dirname, 'DeckCard_by_pk.gql'), 'utf8');
module.exports.DeckTemplate = fs.readFileSync(path.join(__dirname, 'DeckTemplate.gql'), 'utf8');
module.exports.DeckTemplateCard = fs.readFileSync(path.join(__dirname, 'DeckTemplateCard.gql'), 'utf8');
module.exports.DeckTemplateCard_aggregate = fs.readFileSync(path.join(__dirname, 'DeckTemplateCard_aggregate.gql'), 'utf8');
module.exports.DeckTemplateCard_by_pk = fs.readFileSync(path.join(__dirname, 'DeckTemplateCard_by_pk.gql'), 'utf8');
module.exports.DeckTemplate_aggregate = fs.readFileSync(path.join(__dirname, 'DeckTemplate_aggregate.gql'), 'utf8');
module.exports.DeckTemplate_by_pk = fs.readFileSync(path.join(__dirname, 'DeckTemplate_by_pk.gql'), 'utf8');
module.exports.Deck_aggregate = fs.readFileSync(path.join(__dirname, 'Deck_aggregate.gql'), 'utf8');
module.exports.Deck_by_pk = fs.readFileSync(path.join(__dirname, 'Deck_by_pk.gql'), 'utf8');
module.exports.GeneratedImage = fs.readFileSync(path.join(__dirname, 'GeneratedImage.gql'), 'utf8');
module.exports.GeneratedImage_aggregate = fs.readFileSync(path.join(__dirname, 'GeneratedImage_aggregate.gql'), 'utf8');
module.exports.GeneratedImage_by_pk = fs.readFileSync(path.join(__dirname, 'GeneratedImage_by_pk.gql'), 'utf8');
module.exports.Generation = fs.readFileSync(path.join(__dirname, 'Generation.gql'), 'utf8');
module.exports.Generation_aggregate = fs.readFileSync(path.join(__dirname, 'Generation_aggregate.gql'), 'utf8');
module.exports.Generation_by_pk = fs.readFileSync(path.join(__dirname, 'Generation_by_pk.gql'), 'utf8');