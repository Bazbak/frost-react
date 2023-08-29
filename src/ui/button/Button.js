import './Button.css';

function Button(props) {
  return (
    <button {...props} className="Button">
      {props.text}
    </button>
  );
}

export default Button;
