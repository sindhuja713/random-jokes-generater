import {useState, useEffect} from 'react';
import spinner from "../assets/spinner1.jpg";

const Jokes = () => {
    const[joke, setJoke] = useState({});
    const[isloading, setIsloading] = useState(true);
    
    const url = "https://api.chucknorris.io/jokes/random";
    const getJoke = () => {
        setIsloading(true);
            
        fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
            console.log(data);
            setJoke(data);
            setIsloading(false);
            
        });
 };

    useEffect(() => {
       getJoke();
    }, []);
    console.log(joke)
    useEffect(() => {
      getJoke(data);
      setIsloading(false);

    });
  };

  return  (
    <section className="--flex-center --100vh --bg-primary">
      
        <div className="container --card --bg-light --p">
            <h2>Random Jokes Generator</h2>
            <div className="--line"></div>
            {isloading? (
              <div className="--center-all">
                <img src={spinner} alt="loading" width={100} />
            ) : (
             <>
                <h4>Joke id: {Jokes.value.id} </h4>
                <p>{Jokes.value.joke}</p>
             </>
             )}
            
            
            <br />
            <button className="--btn --btn-primary" onClick={getJoke}>Generate Joke</button>
        </div>

    </section>
  );
};

export default Jokes;
