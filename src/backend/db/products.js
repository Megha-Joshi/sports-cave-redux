import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Willow Cricket Bat",
    price: "1499",
    categoryName: "Cricket",
    imgSrc: "../images/cricket_bats.jpg",
    quantity: 1,
    rating: 4.5,
  },
  {
    _id: uuid(),
    title: "RCB Jersey",
    price: "1200",
    categoryName: "Cricket",
    imgSrc: "../images/ipl-jersey.jpg",
    quantity: 1,
    rating: 4.9
  },
  {
    _id: uuid(),
    title: "RDX Black Shine Guard",
    price: "1899",
    categoryName: "Football",
    imgSrc: "../images/shin_guards.jpg",
    quantity: 1,
    rating: 3,
  },
  {
    _id: uuid(),
    title: "Badminton Racquet",
    price: "1899",
    categoryName: "Badminton",
    imgSrc: "../images/badminton_racquet.jpg",
    quantity: 1,
    rating: 2.1,
  },
  {
    _id: uuid(),
    title: "Basketball Backboard",
    price: "410",
    categoryName: "Basketball",
    imgSrc: "../images/backboards_basketball.jpg",
    quantity: 1,
    rating: 3.5,
  },
  {
    _id: uuid(),
    title: "Tennis Racquet with balls",
    price: "999",
    categoryName: "Tennis",
    imgSrc: "../images/tennis_racquet.jpg",
    quantity: 1,
    rating: 4,
  },
];
