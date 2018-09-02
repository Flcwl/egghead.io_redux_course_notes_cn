const FilterLink = ({filter, children}) => {
  return (
    <a href="#"
      onClick={e => {
        e.preventDefault();
        store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter
        });
      }}>
      { children }
    </a>
  );
};