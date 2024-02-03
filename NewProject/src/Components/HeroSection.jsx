import {useState} from "react";


// eslint-disable-next-line react/prop-types
function HeroSection(){
    const [counter, setCounter] = useState(10)
    return(
        <div className="ContainerTwo">
            <h2 className="CounterNumber">{counter}</h2>
            <button className="btnOne" onClick={() => setCounter(counter + 20)}>Click Me 2</button>
        </div>
    )
}

export default HeroSection