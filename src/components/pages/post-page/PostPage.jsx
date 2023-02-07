import css from './post-page.module.css'
const PostPage = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Post page</h2>
      <p className={css.pretitle}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro nobis
        odit quibusdam deleniti doloremque et exercitationem placeat numquam
        impedit optio, aspernatur fugiat quo consequatur voluptatibus. Ipsa
        tenetur doloremque et provident?
      </p>
    </div>
  );
};

export default PostPage;
