import iamege from './images/cats.jpg';
import css from './not-page.module.css'
const NotPage = () => {
    return (
        <div className={css.container}>
            <h2 className={css.title}>Oops..... The page is missing</h2>
            <img src={iamege} alt="cat" />
        </div>
    )
}

export default NotPage