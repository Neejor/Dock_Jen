import ColouredButton from "./ColouredButton";

const Specialty1 = () => {
  return (
    <section className="Specialty1Sec" id="Specialty1">
      <p>Specialties</p>
      <h1>Special Dishes</h1>
      <div className="Specialty1Container">
        <div className="text">
          <div>
            <h1>01.</h1>
          </div>
          <div>
            <h3>Chicken Malai Seekh Kabab</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Commodo ullamcorper a lacus vestibulum sed. Auctor eu augue ut
              lectus arcu bibendum at varius. Id cursus metus aliquam eleifend
              mi in nulla posuere sollicitudin.
            </p>
            <h3>Rs. 649.00</h3>
            <p>
              <ColouredButton text="Book a Table" />
            </p>
          </div>
        </div>
        <div className="image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD8dedLpnMJliGFk_hnsjTiViIeiMzVn-E1A&usqp=CAU" />
        </div>
      </div>
    </section>
  );
};

export default Specialty1;
