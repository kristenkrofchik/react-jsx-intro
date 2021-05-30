const App = () => (
    <div>
        <Tweet username="LAGirl" name="Mary-Anne" date="03/12/21" message="I love lamp" />
        <Tweet username="BiteMe" name="Matt" date="03/17/21" message="I love lampsss" />
        <Tweet username="PBandJ" name="Penelope" date="10/12/20" message="I love lamps too" />
    </div>
);

ReactDOM.render(<App/>, document.getElementById('root'));