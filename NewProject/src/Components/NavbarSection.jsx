import {useState} from "react";

function NavbarSection(props){

    // eslint-disable-next-line react/prop-types
    const [counter, setCounter] = useState(5);
    return (
        <div className="ContainerOne">
            <h2 className="CounterNumber">{counter}</h2>
            <button className="btnOne" onClick={() => setCounter(counter + 1)}>Click Me</button>
            {/* eslint-disable-next-line react/prop-types */}
            <h4 className="h4Tag">{props.name}</h4>
            {/* eslint-disable-next-line react/prop-types */}
            <h5 className="h4Tag" >{props.age} {counter}</h5>
        </div>
    )
}

export default NavbarSection