const Menu = () => {
  const mealArr = [
    [
      {
        name: "Egg Sandwich",
        price: "Rs. 90.00",
        options: "Grilled Cheese",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLPMKNGET1t1QwhjJulnYRXeR_5k01BkidAg&usqp=CAU",
      },
      {
        name: "Naan",
        price: "Rs. 75.00",
        options: "Paneer with Butter",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvTf31KGjhMbsgL2iaXGwZ9iCdeo1-HUn7LA&usqp=CAU",
      },
      {
        name: "Idliyappam",
        price: "Rs. 99.00",
        options: "Fingered Millet",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVlsvPQBqNwdvWDjZNgNn_TXl9bfut5Hi3Q&usqp=CAU",
      },
    ],
    [
      {
        name: "Egg Sandwich",
        price: "Rs. 90.00",
        options: "Grilled Cheese",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLPMKNGET1t1QwhjJulnYRXeR_5k01BkidAg&usqp=CAU",
      },
      {
        name: "Naan",
        price: "Rs. 75.00",
        options: "Paneer with Butter",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvTf31KGjhMbsgL2iaXGwZ9iCdeo1-HUn7LA&usqp=CAU",
      },
      {
        name: "Idliyappam",
        price: "Rs. 99.00",
        options: "Fingered Millet",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVlsvPQBqNwdvWDjZNgNn_TXl9bfut5Hi3Q&usqp=CAU",
      },
    ],
    [
      {
        name: "Egg Sandwich",
        price: "Rs. 90.00",
        options: "Grilled Cheese",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLPMKNGET1t1QwhjJulnYRXeR_5k01BkidAg&usqp=CAU",
      },
      {
        name: "Naan",
        price: "Rs. 75.00",
        options: "Paneer with Butter",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvTf31KGjhMbsgL2iaXGwZ9iCdeo1-HUn7LA&usqp=CAU",
      },
      {
        name: "Idliyappam",
        price: "Rs. 99.00",
        options: "Fingered Millet",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVlsvPQBqNwdvWDjZNgNn_TXl9bfut5Hi3Q&usqp=CAU",
      },
    ],
  ];

  const dispFunc = (item) => {
    return (
      <>
        <div className="item">
          <div className="image">
            <img src={item.img} alt="Meal Item" />
          </div>
          <div className="desc">
            <div className="name">
              <span>{item.name}</span>
              <div>{item.price}</div>
            </div>
            <div className="options">{item.options}</div>
          </div>
        </div>
        <hr />
      </>
    );
  };

  return (
    <section className="MenuSec" id="Menu">
      <p>Specialties</p>
      <h1>Our Menu</h1>
      <div className="MenuContainer">
        <div className="Meal">
          <h3>Breakfast</h3>
          {mealArr[0].map(dispFunc)}
        </div>
        <div className="Meal">
          <h3>Lunch</h3>
          {mealArr[1].map(dispFunc)}
        </div>
        <div className="Meal">
          <h3>Dinner</h3>
          {mealArr[2].map(dispFunc)}
        </div>
      </div>
    </section>
  );
};

export default Menu;
