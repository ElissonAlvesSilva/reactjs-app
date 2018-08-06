console.log('App.js is running');
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};
var template = ( 
    <div>
        <h1 > { app.title } </h1> 
        { app.subtitle &&  <p> { app.subtitle } </p> }
        <p>{ app.options.length > 0 ? 'Here are your options': 'No Options' }</p>
        <ol>
            <li>item one</li>
            <li>item two</li>
        </ol> 
    </div>
);

var user = {
    name: 'Elisson',
    age: 23,
    location: 'Manaus'
};

function getLocation(location) {
    if (location){
        return <p>Location: { location }</p>;
    }
}

var templateTwo = (
    <div>
        <h1>{ user.name ? user.name : 'Anonymous' }</h1>
        { ( user.age && user.age >= 18) && <p>Age: { user.age }</p> }
        { getLocation(user.location) }
    </div>
);


let count = 0;
const addOne = () => {
    count ++;
    renderCounterApp();
};
const minusOne = ()=>
{
    count --;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};
const someId = 'myidhere';

var appRoot = document.getElementById('app');


const renderCounterApp = () => {
    const templateThree = (
        <div>
            <h1>Count: { count }</h1>
            <button onClick={ addOne }>+1</button>
            <button onClick={ minusOne }>-1</button>
            <button onClick={ reset }>reset</button>
    
        </div>
    );

    ReactDOM.render(templateThree, appRoot);

};

renderCounterApp();