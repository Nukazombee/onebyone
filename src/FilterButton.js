
function FilterButton(props) {
  return (
    <div >
    <img  src={props.image} onClick={props.clicked} alt="tyui"></img>
    
    </div>
  );
}

export default FilterButton;