# Card Confluence

A website to catalogue all of your Magic the Gathering decks. Share lists with your friends, or create wishlists for cards you want to buy in the future.


## Photos

Trello Planning: [Trello link](https://trello.com/b/4iOZr3C5/project-3-deck-builder)

#### Home Page
![home player](/public/photos/readme-photos/home-page.png)

#### Deck View Page
![Deck View Page](/public/photos/readme-photos/Deck-show.png)

#### Add a card
![](/public/photos/readme-photos/add-card.png)



## Technologies Used
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
![Krita](https://img.shields.io/badge/Krita-203759?style=for-the-badge&logo=krita&logoColor=EEF37B)
![Visual Studio Code](https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white)
<img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" width="30" />



## Getting Started

Deployed site: [Website link](https://card-confluence-12-502beb852d0c.herokuapp.com/)

#### Making a deck

1. Login/Sign up
2. Click the "New Deck" button at the top of the public deck listings
3. Enter a deck name
4. Click create

#### Adding a card

1. Navigate to your deck from the "Home" or "Profile" page
2. In the "Add Card" form enter the name of your card
    + If an error occurs:
        + Check for a spelling error
        + If similar names exist, specify the specific card name 
            + Example: _Jin-Gitaxias, Core Augur_ / _Jin-Gitaxias, Progress Tyrant_
3. Once the card has been found, click the green add button to the right of the card
4. To close the preview, click the X above the image

### Removing a card

1. In the deck grid, find a card you want to remove or reduce the number amount of.
2. Click the red button below the card to either reduce the amount or remove the card entirely.




## Next Steps

- **Editing a deck name:** I would like to add a form either by clicking on the deck name itself in the deck view page, or as a button next to the deck's name.

- **Adding card categories:** The card objects have categories for types, colors, etc., so I would want to categorize the cards in the deck view screen.

- **Selecting a deck format:** Since the deck objects have format legalities, adding a selector to choose a deck's format could allow users to see illegal cards in their decks, and if they have too many copies of a certain card.

- **Liking other user's decks:** Showing the amount of likes would show other users how many people agree or enjoy a deck.

- **Card inspect screen:** Since the cards in the deck view page are small, I would like to add a feature so that clicking on a card would show a detail overlay with all of the information on a card.