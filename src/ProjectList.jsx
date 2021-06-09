function ProjectList({projects}) {

  return(
    <div className='project-list'>
      {projects.map(o => <img src={o.img} className='item' key={o} alt={o.category}></img>)}
    </div>
  );
}

export default ProjectList;