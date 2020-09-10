var React = require('react');
var ReactDOM = require('react-dom');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: 2015,
            month: 11,

            data: [],
            loaded: false,
            placeholder: "Loading"
        };
    }

    onChangeMonth(event) {
        this.setState({month: event.target.value}, () => this.updateData());
        
    }

    onChangeYear(event) {
        this.setState({year: event.target.value}, () => this.updateData());
    }

    updateData() {
        fetch(`/documents/get/?year=${this.state.year}&month=${this.state.month}`)
        .then(response => {
            if (response.status > 400) {
                return this.setState(() => {
                    return { placeholder: "Something went wrong!" };
                });
            }
            return response.json();
        })
        .then(data => {
            this.setState(() => {
                return {
                    data,
                    loaded: true
                };
            });
        });
    }

    componentDidMount() {
        this.updateData()
    }

    render() {
        return (
            <div id="main">
                <select value={this.state.month} onChange={this.onChangeMonth.bind(this)} >
                    <option value="1">Jan</option>
                    <option value="2">Feb</option>
                    <option value="3">Mar</option>
                    <option value="4">Apr</option>
                    <option value="5">May</option>
                    <option value="6">Jun</option>
                    <option value="7">Jul</option>
                    <option value="8">Aug</option>
                    <option value="9">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
                </select>

                <select value={this.state.year} onChange={this.onChangeYear.bind(this)} >
                    {[...Array(20).keys()].map(offset => {
                        return (<option key={offset} value={2000 + offset}>{2000 + offset}</option>)
                    })}
                </select>

                <ul>
                    {this.state.data.map(post => {
                        return (<li key={post.id}>{post.title} - {post.citedby_count}</li>);
                    })}
                </ul>
            </div>
        );
    }
}

export default App;

const container = document.getElementById("app");
ReactDOM.render(<App />, container);