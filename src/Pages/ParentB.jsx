import React from "react";
import ChildB from "./ChildB";

export default function ParentB() {
  const book = [
    {
      id: 1,
      bname: "Man And Animal",
      stock: "500",
      sales: "510",
      img: "https://m.media-amazon.com/images/I/51WIDVJlIIL._SX342_SY445_.jpg",
    },
    {
      id: 2,
      bname: "1984",
      stock: "250",
      sales: "500",
      img: "https://book-website.com/wp-content/uploads/2023/10/nineteen-eighty-four-1984-george.jpg",
    },
    {
      id: 3,
      bname: "Animal Farm",
      stock: "150",
      sales: "200",
      img: "https://i0.wp.com/paperlanternslit.com/wp-content/uploads/2021/03/AnimalFarm-1.jpg?w=1535&ssl=1",
    },
    {
      id: 4,
      bname: "The Catcher In The Rye",
      stock: "150",
      sales: "350",
      img: "https://npr.brightspotcdn.com/dims4/default/48e622e/2147483647/strip/true/crop/363x574+0+0/resize/1760x2784!/format/webp/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwkar%2Ffiles%2Fcatcher_in_the_rye_cover.png",
    },
    {
      id: 5,
      bname: "Metamorphosis",
      stock: "250",
      sales: "250",
      img: "https://m.media-amazon.com/images/I/41MR47HU1JL._SY445_SX342_.jpg",
    },
    {
      id: 6,
      bname: "Foundation",
      stock: "500",
      sales: "150",
      img: "https://m.media-amazon.com/images/I/5199zQvbEsL.jpg",
    },
  ];
  return (
    <div>
      <style jsx>{` 
        .bookMainDiv {
          display: flex;
          flex-wrap: wrap;
          gap: 40px; 
      `}</style>
      <div className="bookMainDiv">
        {book.map((item) => (
          <ChildB book={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
