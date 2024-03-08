import styled from "styled-components";

const Viewers = (props) => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source
            src="/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  /* Agregar las propiedades de animación de arcoíris */
  border: 0.1px solid transparent;
  animation: rainbowBorder 5s linear infinite, rainbowShadow 10s linear infinite;

  @keyframes rainbowBorder {
    0% { border-color: #e6fb04; }
    14.28% { border-color: #ff6600; }
    28.56% { border-color: #00ff66; }
    42.84% { border-color: #00ffff; }
    57.12% { border-color: #6600ff; }
    71.4% { border-color: #ff00ff; }
    85.68% { border-color: #ff0000; }
    100% { border-color: #e6fb04; }
  }

  @keyframes rainbowShadow {
    0% { box-shadow: 0 0 5px 2px rgba(230, 251, 4, 0.5); }
    14.28% { box-shadow: 0 0 2.5px 2px rgba(255, 102, 0, 0.5); }
    28.56% { box-shadow: 0 0 2.5px 2px rgba(0, 255, 102, 0.5); }
    42.84% { box-shadow: 0 0 2.5px 2px rgba(0, 255, 255, 0.5); }
    57.12% { box-shadow: 0 0 2.5px 2px rgba(102, 0, 255, 0.5); }
    71.4% { box-shadow: 0 0  2.5px 2px rgba(255, 0, 255, 0.5); }
    85.68% { box-shadow: 0 0 2.5px 2px rgba(255, 0, 0, 0.5); }
    100% { box-shadow: 0 0 2.5px 2px rgba(230, 251, 4, 0.5); }
  }

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }
`;

export default Viewers;
