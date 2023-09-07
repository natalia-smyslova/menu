import { Link } from "react-router-dom";

function Page404() {
    return (
        <article className="article">
            <h1 className="article__title">Страница не найдена. Перейти на <Link to="/" className="home">Главную</Link>.</h1>
        </article>
    )
}

export default Page404