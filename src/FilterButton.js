
function FilterButton(props) {
  return (
    <div >
    <img  src={props.image} onClick={props.clicked}></img>
    
    </div>
  );
}

export default FilterButton;