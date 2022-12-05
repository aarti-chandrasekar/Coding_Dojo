from random import randint
from classes.deck import Deck
from classes.user import User

def print_open_card(card):
    print("\nOpen Card", end=" : ")
    card.card_info()
    print("*********************************\n")

# Open a new deck
deck = Deck()

name = input("Hi! What is your name ? \n")

# Deal 7 cards from the deck to user
user = User(name, deck, 7)
print(f"Hi {name}. Here are your cards")
user.show_cards()
print("\n")

# Deal 7 cards from the deck to computer
comp = User("Computer", deck, 7)


# Pick a card from the deck and open it
open_card = deck.pick_a_card()
print_open_card(open_card)

# Game Begins
# Game Continues as long as user or computer has cards or there are cards to pick up
while len(user.cards) > 0 and len(comp.cards) > 0 and len(deck.cards) > 0:
    ########### USER TURN #################
    opt = input(" It's your turn. Enter a number (0 to draw a card).......")

    if opt.isnumeric() and int(opt) in range(0,len(user.cards)+1):
        opt = int(opt)
        # User draws a card
        if opt == 0: 
            picked_card = deck.pick_a_card()
            user.cards.append(picked_card)
            print("You picked ", end="")
            picked_card.card_info()
            print("\n")
        # User discards a card
        else:
            # Check if discarded card is valid (same number or same suite as open_card)
            if user.cards[opt-1].suit == open_card.suit or user.cards[opt-1].string_val == open_card.string_val:
                open_card =  user.cards.pop(opt-1)
                print_open_card(open_card)
            else:
                print("\nInvalid Option. Try Again !")
                continue
    else:
        print("\nInvalid Option. Try Again !")
        continue

    ########### COMPUTER TURN #################
    # Make a list of the indexes of all the cards with computer that matches (same number or same suite as open_card)
    matching_indexes = []
    for i in range(0, len(comp.cards)):
        if comp.cards[i].suit == open_card.suit or comp.cards[i].string_val == open_card.string_val:
            matching_indexes.append(i)

    # If No Matches then Computer Draws a Card
    if len(matching_indexes) == 0:
        comp.cards.append(deck.pick_a_card())
        print(f"Computer picked a card and now has {len(comp.cards)} cards \n")
    # Pick a random card from all the matching cards and discard
    else:
        rand_index = matching_indexes[randint(0, len(matching_indexes)-1)]
        open_card =  comp.cards.pop(rand_index)
        print(f"Computer Discarded a card and now has {len(comp.cards)} cards \n")
        print_open_card(open_card)

    user.show_cards()
    print("\n")

########### RESULTS #################
# User WON
if len(user.cards) == 0:
    print(f"Well Done {name}. You WON!!!!")

# Computer WON
if len(comp.cards) == 0:
    print("Sorry. Computer WON. Better luck next time.")

# DRAW - No more cards left to pick
if len(deck.cards) == 0:
    print("It's a DRAW. Better luck next time.")

