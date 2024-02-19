export class Deck {
    private cards: Card[] = [];
    cardCount: number = this.cards.length;

    constructor({ jokersIncluded = false, shuffled = true }) {
        for (let suitIndex = 1; suitIndex < 5; suitIndex++) {
            for (let cardIndex = 1; cardIndex < 14; cardIndex++) {
                this.cards.push(new Card(cardIndex, suitIndex));
            }
        }

        this.cards.reverse();

        if (jokersIncluded) {
            this.cards.push(new Joker());
            this.cards.push(new Joker());
        }

        if (shuffled) {
            this.shuffle();
        }
    }

    printDeck(): void {
        let cards: string[] = [];

        this.cards.forEach(element => {
            cards.push(element.shorthandName());
        });

        console.log(cards);
    }

    shuffle(): void {
        let currentIndex: number = this.cards.length;
        let randomIndex: number;

        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // Swap current index with random index
            [this.cards[currentIndex], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[currentIndex]];
        }
    }

    drawCardFromTop(): Card | undefined {
        return this.cards.pop();
    }

    drawCardFromBottom(): Card | undefined {
        return this.cards.shift();
    }

    addCardToTop(card: Card): void {
        this.cards.push(card);
    }

    addCardToMiddle(card: Card): void {
        let randomIndex = Math.floor(Math.random() * this.cards.length);
        this.cards.splice(randomIndex, 0, card);
    }

    addCardToBottom(card: Card): void {
        this.cards.unshift(card);
    }
}

export class Card {
    suit: Suit;
    value: number;

    constructor(value: number, suit: Suit) {
        if(value in CardValue == false){
            throw new Error(`Cannot create Card object with value: ${value}`)
        }

        if(suit in Suit == false){
            throw new Error(`Cannot create Card object with suit: ${suit}`)
        }

        if (suit == Suit.None && value != CardValue.Joker) {
            throw new Error(`Invalid value: ${value}, only CardValue.Joker can be created with Suit.None`)
        }

        this.value = value;
        this.suit = suit;
    }

    shorthandName() {
        let name: string = '';

        switch (this.value) {
            case CardValue.Joker:
                name += "W"; // wild
                break;
            case CardValue.Ace:
                name += "A";
                break;
            case CardValue.Jack:
                name += "J";
                break;
            case CardValue.Queen:
                name += "Q";
                break;
            case CardValue.King:
                name += "K";
                break;
            default:
                name += this.value.toString();
        }

        if (this instanceof Joker == false) {
            name += Suit[this.suit][0]; // first character of suit
        }

        return name;

    }
}

export class Joker extends Card {
    constructor() {
        super(0, Suit.None);
    }
}

export enum Suit {
    None = 0, // Joker
    Club = 1,
    Diamond = 2,
    Heart = 3,
    Spade = 4
}

export enum CardValue {
    Joker = 0,
    Ace = 1,
    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5,
    Six = 6,
    Seven = 7,
    Eight = 8,
    Nine = 9,
    Ten = 10,
    Jack = 11,
    Queen = 12,
    King = 13,
}