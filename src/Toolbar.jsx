function Toolbar({filters, selected, onSelectFilter}) {
  const onSelect = e => {
    onSelectFilter(e.target.innerText)
  };
  return(
    <div className='filters'>
      {filters.map(o => <div key={o} className={o === selected ? 'active' : ''} onClick={onSelect}>{o}</div>)}
    </div>
  )
}

export default Toolbar;