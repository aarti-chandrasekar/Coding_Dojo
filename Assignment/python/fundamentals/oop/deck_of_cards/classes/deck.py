from . import card
from random import randint

class Deck:


    def __init__( self ):
        suits = [ "SPADES" , "HEARTS" , "CLUBS" , "DIAMONDS" ]
        self.cards = []

        for s in suits:
            for i in range(1,14):
                str_val = ""
                if i == 1:
                    str_val = "Ace"
                elif i == 11:
                    str_val = "Jack"
                elif i == 12:
                    str_val = "Queen"
                elif i == 13:
                    str_val = "King"
                else:
                    str_val = str(i)
                self.cards.append( card.Card( s , i , str_val ) )

    def show_deck(self):
        print("Total # of cards :", len(self.cards))
        for card in self.cards:
            card.card_info()

    # deal max number of cards from the deck and returns a list of Cards
    def deal_cards(self, max=10):
        dealt_cards = []
        for i in range(1, max+1):
            dealt_cards.append(self.pick_a_card())
        return dealt_cards

    # pick a card from the current card deck and return the card
    # Method also removes the card from the current card deck
    def pick_a_card(self):
        return self.cards.pop(randint(0, len(self.cards)-1))    



    # Removes the cards in the cards list remove_list from the other 
    # cards list main_list and returns the main_list
    def remove_cards(self, remove_list, main_list):
        for card in remove_list:
            if card in main_list:
                main_list.remove(card)
        return main_list

    # Removes the card from the cards list main_list and returns the main_list
    def remove_a_card(self, card, main_list):
        return self.remove_cards(self, [card], main_list)



