# cards
A typescript library for basic interaction with a deck of cards.

## Basic Usage
```typescript
import { deck, card, Suit, CardValue } from 'cards.ts'

// Returns a jokerless, shuffled deck
let deck = new Deck();

// Alternatively, specify with jokers, not shuffled
let deck2 = new Deck()({jokersIncluded: true, shuffled: false})

// Prints the deck to the console
deck.printDeck();

// Shuffle the deck in place
deck.shuffle();

// Removes the top card from the deck. Returns undefined once the deck is empty.
// Imagine a deck of cards on a table; index 0 is the 'bottom', i.e. the 0th layer (closest to the table).
let card: Card = deck.drawCardFromTop();

// Alternatively, remove the bottom card from the deck. Returns undefined once the deck is empty.
let card2 = deck.drawCardFromBottom();

console.log(CardValue[card.value]); // Output: Eight, Three, Ace, King, Joker, etc.
console.log(Suit[card.suit]); // Output: Club, Diamond, Heart, Spade, None (if Joker), etc.
console.log(card.shorthandName()); // Output: 8C, 3D, AH, KS, W (Joker = Wildcard), etc.

let sixOfHearts = new Card(6, Suit.Heart);
console.log(card.shorthandName()); // Output: 6H

// Add card to top, a random index, or bottom of the deck.
deck.addCardToTop(sixOfHearts);
deck.addCardToMiddle(sixOfHearts);
deck.addCardToBottom(sixOfHearts);
```
