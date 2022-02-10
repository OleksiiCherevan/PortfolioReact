import './style.scss'

export default ({ photo }) => {
    return (
        <div className="user-photo">
                <img className='user-photo__image' src={photo}></img>
        </div>
    );
};
