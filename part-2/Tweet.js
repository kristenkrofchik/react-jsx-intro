const Tweet = (props) => {
    return (
        <div>
    		<h1>{props.username}</h1>
                <li>{props.name}</li>
                <li>{props.date}</li>
                <li>{props.message}</li>
		</div>
    )
};