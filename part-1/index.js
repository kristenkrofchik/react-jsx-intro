const App = () => (
    <div>
        <FirstComponent message="My very first component" />
        <NamedComponent name="Kristen" />
    </div>
);

ReactDOM.render(<App/>, document.getElementById('root'));