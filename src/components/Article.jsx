import PropTypes from 'prop-types';

function Article({ item }) {
    return (
        <article className="article">
            <h1 className="article__title">{item.title}</h1>
            {item.description}
        </article>
    );

}

Article.propTypes = {
    item: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.any.isRequired
}
export default Article
