import Button from '../Button/Button';
import './Widget.scss';

interface joke {
  icon_url: string;
  id: string;
  url: string;
  value: string;
}

interface Widget {
  onClick: () => void;
  joke: joke;
  loading: boolean;
}

function Widget({ joke, onClick, loading }: Widget) {
  return (
    <article className="widget">
      <p className="widget-content">One super hilarious joke</p>
      <Button onClick={onClick} joke={joke} loading={loading} />
    </article>
  );
}

export default Widget;
