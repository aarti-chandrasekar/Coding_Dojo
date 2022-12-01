from classes.deck import Deck

class User:
    def __init__(self, name, deck, cards_to_deal):
        self.cards = deck.deal_cards(7)
        self.name = name

    def show_cards(self):
        no_of_cards = len(self.cards)
        print("Total # of cards :", no_of_cards)
        for i in range(no_of_cards):
            print(i+1, end=" : ")
            self.cards[i].card_info()        