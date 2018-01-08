//node.js, yarn@1.3.2-g, live-server@1.2.0-g, babel-cli@6.24.1 -g

//yarn install

//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

//3.21


console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: [],
};


const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(app.mappedArray);
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value='';
        render();
    }
};


const onOptionsReset = e => {
    app.options=[];
    render();
};

const onMakeDecision = () => {
    const randomOptionIndex = Math.floor(Math.random()*app.options.length);
    console.log(randomOptionIndex);
    console.log(app.options[randomOptionIndex]);
};



const appRoot = document.getElementById('app');
const render=() => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length >0?'Here are your options:' : 'No Options left.'}</p>
            <button disabled={app.options.length==0} onClick={onMakeDecision}>What should i do?</button>
            <button onClick={onOptionsReset}>Remove All</button>
            {
                 <ol>{
                    app.options.map(option => <li key={option}>{option}</li>)
                 }</ol>              
            }
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();






