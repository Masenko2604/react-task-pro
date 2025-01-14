import { useSelector } from 'react-redux';
import css from './Button.module.css';
import { selectTheme } from '../../../redux/auth/selectors';
import clsx from 'clsx';

export default function Button({ icon, text, big, onClick }) {
  const theme = useSelector(selectTheme);
  return (
      <button
          className={clsx(css.btn, css[theme.toLowerCase()], { [css.big]: big })}
          onClick={onClick}
          type='submit'
    >
      {icon && (
        <div className={clsx(css.iconContainer, css[theme.toLowerCase()])}>
          <svg
            className={clsx(css.icon, css[theme.toLowerCase()])}
            width="14"
            height="14"
            aria-label="btn icon"
          >
            <use href={`./img/icons/icons.svg#${icon}`} />
          </svg>
        </div>
      )}
      {text && <span className={css.text}>{text}</span>}
    </button>
  );
}

//Usage example
//  <Button icon='icon-plus' text='my text here' />  => height = 49px
//  <Button icon='icon-plus' text='my text here' big={true} onClick={()=>{console.log('clicked')}} />  => height = 56px