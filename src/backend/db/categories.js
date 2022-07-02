import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Cricket",
    imgSrc: "./images/cricket.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Football",
    imgSrc: "./images/football.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Badminton",
    imgSrc: "./images/badminton.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Basketball",
    imgSrc: "./images/basketball.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Tennis",
    imgSrc: "./images/tennis.jpg",
  },
];
