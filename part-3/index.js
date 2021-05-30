const App = () => (
    <div>
        <Person name="Bo" age={12} hobbies={['playing', 'eating ice cream']} />
        <Person name="Leslie" age={42} hobbies={['cooking', 'watching HGTV']} />
        <Person name="Martinaaaaaa" age={78} hobbies={['playing cards', 'eating beef jerky']} />
    </div>
);

ReactDOM.render(<App/>, document.getElementById('root'));