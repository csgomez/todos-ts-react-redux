import GithubIcon from './GithubIcon';

const Footer = () => {
  return (
    <footer className="pt-2 pb-3 d-flex flex-row align-items-center justify-content-center gap-3 lh-1">
      <p>
        Created by{' '}
        <a href="http://cesarsgomez.com/" title="Link to cesarsgomez.com">
          Cesar Gomez
        </a>
      </p>
      <p>—</p>
      <a
        href="https://github.com/csgomez/todos-ts-react-redux"
        title="Project Github Link"
      >
        <GithubIcon size={18} />
      </a>
    </footer>
  );
};

export default Footer;
