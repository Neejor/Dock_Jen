const About = () => {
  return (
    <section className="AboutSection" id="About">
      <div className="AboutContainer">
        <div className="image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrIdhg2RkwF7pNGbEYGaHmc2Sm_Nruv0-XKA&usqp=CAU" />
        </div>
        <div className="text">
          <p>About</p>
          <h2>Welcome to KCG Restaurant</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h2>Special Recipe</h2>
          <div className="SpecialRec">
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJCoRUttosQyV8j3x7H885Uo9p6Y4xmBmXAA&usqp=CAU" />
              <p>Pepper Soup</p>
            </div>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT74O7O8wpbjNHUrsQAUQ-KaXMSPolTONJimw&usqp=CAU" />
              <p>Divine Mayonnaise</p>
            </div>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaOTVjqIbp7EjpKlYYm2SXdBEcripue6aHsA&usqp=CAU" />
              <p>Ratatouille niçoise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
