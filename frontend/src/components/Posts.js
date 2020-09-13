var React = require('react');

export default function Posts({ posts }) {
    return (
        <table style={{'width': '100%'}}>
            <thead>
                <tr>
                    <th style={{'textAlign': 'center', 'width': '6%'}}></th>
                    <th style={{'textAlign': 'left', 'width': '78%'}}>Наименование</th>
                    <th style={{'textAlign': 'center', 'width': '16%'}}>Цитирований</th>
                </tr>
            </thead>

            <tbody>
                {
                    posts.map(post => {
                        return (
                            <tr key={post.id}>
                                <td style={{'textAlign': 'center', 'color': 'lightgreen', 'width': '6%'}}>&#x25CF;</td>
                                <td style={{'width': '78%'}}>{post.title}</td>
                                <td style={{'textAlign': 'center', 'width': '16%'}}>{post.citedby_count}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}
