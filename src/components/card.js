import axios from "axios";
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const divCard = document.createElement("div");
  divCard.classList.add("card");

  const divHeadline = document.createElement("div");
  divHeadline.classList.add("headline");
  divHeadline.textContent = `${article.headline}`;
  divCard.appendChild(divHeadline);

  const divAuthor = document.createElement("div");
  divAuthor.classList.add("author");

  const divImg = document.createElement("div");
  divImg.classList.add("img-container");
  const img = document.createElement("img");
  img.src = `${article.authorPhoto}`;
  divImg.appendChild(img);
  divAuthor.appendChild(divImg);

  const spanName = document.createElement("span");
  spanName.textContent = `${article.authorName}`;
  divAuthor.appendChild(spanName);
  divCard.appendChild(divAuthor);

  divCard.addEventListener("click", () => {
    console.log(`${article.headline}`);
  });

  console.log(divCard);
  return divCard;
};

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios
    .get("https://lambda-times-api.herokuapp.com/articles")
    .then(({ data }) => {
      //getting the data and initialising the Tabs method.
      // console.log(data.articles)
      let articlesArr = Object.values(data.articles);
      // console.log(articlesArr)
      let arr0 = articlesArr[0];
      // console.log(arr0)
      let arr1 = articlesArr[1];
      // console.log(arr1)
      let arr2 = articlesArr[2];
      // console.log(arr2)
      let arr3 = articlesArr[3];
      // console.log(arr3)
      let arr4 = articlesArr[4];
      // console.log(arr4)

      let finalArr = [...arr0, ...arr1, ...arr2, ...arr3, ...arr4];
      console.log(finalArr);

      let finalElement = finalArr.map((element) => {
        console.log(element);
        return document.querySelector(selector).appendChild(Card(element));
      });
    })
    .catch((err) => console.log(err));
};

export { Card, cardAppender };
