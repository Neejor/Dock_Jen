import ColouredButton from "./ColouredButton";

const Specialty2 = () => {
  return (
    <section className="Specialty2Sec" id="Specialty2">
      <div className="Specialty2Container">
        <div className="image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD8dedLpnMJliGFk_hnsjTiViIeiMzVn-E1A&usqp=CAU" />
        </div>
        <div className="text">
          <div>
            <h1>02.</h1>
          </div>
          <div>
            <h3>Salmon Zucchini</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Commodo ullamcorper a lacus vestibulum sed. Auctor eu augue ut
              lectus arcu bibendum at varius.
            </p>
            <h3>Rs. 829.00</h3>
            <p>
              <ColouredButton text="Book a Table" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialty2;
