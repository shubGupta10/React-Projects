import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [facts, setFacts] = useState(null);
  const [initialRender, setInitialRender] = useState(true);
  const [Image, setImage] = useState(null)

  const fetchcatFacts = () => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        setFacts(data.fact);
          console.log(data);
      });
  }

  const randomImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((imageData) => {
       setImage(imageData.message);
    })
  }

  useEffect(() => {

    (initialRender) ? setInitialRender(false) : randomImage();   
  }, [initialRender])

  useEffect(() => {

    (initialRender) ? setInitialRender(false) : fetchcatFacts();

   
  } ,[initialRender]);

  return (
    <>
      <h1>Fact About Cats  </h1>
      <button onClick={fetchcatFacts}>Click here to Generate Facts</button>
      <h2 > here is the fact : {facts}</h2>


      <img src={Image} width={500} alt="No Image" />
      <button onClick={randomImage}>Click here to generate</button>
    </>
  );
}

export default App;
