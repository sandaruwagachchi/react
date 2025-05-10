import profile from './assets/profile.jpg'


function Card(){
    return(
      <div className="card">
        <img className="card-image" src={profile} alt='profile'></img>
        <h2 className='card-title'>Sandaru Wagachchi</h2>
        <p className='card-description'>Software Developer</p>
      </div>
    );
}
export default Card;