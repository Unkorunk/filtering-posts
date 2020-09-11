var React = require('react');
var ReactDOM = require('react-dom');

import Combobox from './Combobox'
import Posts from './Posts'

function App() {
    // generate array months
    const months = [
        { value: 1, title: "Jan" },
        { value: 2, title: "Feb" },
        { value: 3, title: "Mar" },
        { value: 4, title: "Apr" },
        { value: 5, title: "May" },
        { value: 6, title: "Jun" },
        { value: 7, title: "Jul" },
        { value: 8, title: "Aug" },
        { value: 9, title: "Sep" },
        { value: 10, title: "Oct" },
        { value: 11, title: "Nov" },
        { value: 12, title: "Dec" },
    ]

    // generate array years
    const years = []
    const currentYear = new Date().getFullYear();
    for (let year = 1980; year <= currentYear; year++) {
        years.push({ value: year, title: year.toString() });
    }

    // create state
    const [state, setState] = React.useState({
        month: months[0].value,
        year: years[0].value,
        posts: []
    })

    // function for communicate with api
    function update(newState) {
        fetch(`/documents/get/?year=${state.year}&month=${state.month}`)
        .then(response => {
            if (response.status == 200) {
                response.json().then(posts => setState({ year: newState.year, month: newState.month, posts }));
            }
        });
    }

    // functions onChange for comboboxs
    function onChangeMonth(event) {
        update({ year: state.year, month: event.target.value, posts: state.posts });
    }

    function onChangeYear(event) {
        update({ year: event.target.value, month: state.month, posts: state.posts });
    }

    // render
    return (
        <div>
            <Combobox value={state.month} options={months} onChange={onChangeMonth} />
            <Combobox value={state.year} options={years} onChange={onChangeYear} />
            
            <Posts posts={state.posts} />
        </div>
    );
}

const container = document.getElementById("app");
ReactDOM.render(<App />, container);
