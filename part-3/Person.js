const Person = (props) => {
    
    let voteText = props.age >= 18 ? "Go vote!" : "You must be 18!";

    return (
        <div>
            <p>Learn some information about this person: {props.name.slice(0,6)} is {props.age} years old.</p>
            <h3>{voteText}</h3>
            <h1>Hobbies Include:</h1>
            <ul>
                {props.hobbies.map(hobby => <li>{hobby}</li>)}
            </ul>
        </div>
    )
};