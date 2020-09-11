var React = require('react');

export default function Posts({ posts }) {
    return (
        <ul>
            {
                posts.map(post => {
                    return (<li key={post.id}>{post.title} - {post.citedby_count}</li>);
                })
            }
        </ul>
    );
}
