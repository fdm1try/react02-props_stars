import './Stars.css';
import { Star } from '../Star';

interface IProps {
  count: number
}

export const Stars = ({ count = 0 }: IProps) => {
  if (!count) return (<></>);

  return (
    <ul className='card-body-stars u-clearfix'>
      {[...Array(count)].map((_, index) => (
        <li key={index}>
          <Star />
        </li>
      ))}
    </ul>
  )
}
