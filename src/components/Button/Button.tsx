import './Button.scss';

interface joke {
  icon_url: string;
  id: string;
  url: string;
  value: string;
}

interface Button {
  onClick: () => void;
  joke: joke;
  loading: boolean;
}

function Button({ onClick, joke, loading }: Button) {
  return (
    <div>
      <button type="button" className="button" onClick={onClick}>
        New joke
      </button>
      {loading ? <div>Loading...</div> : <div> {joke.value} </div>}
    </div>
  );
}

export default Button;
