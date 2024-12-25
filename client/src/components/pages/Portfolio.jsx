const card =[{image: ""}]

export default function Portfolio() {
  
  const handleDeployed1ButtonClick = () => {
    window.location.href = 'https://francisjung.github.io/Film_Face_Off/';};
  const handleGithub1ButtonClick = () => {
    window.location.href = 'https://github.com/bswiley/Film_Face_Off';
  };
  const handleDeployed2ButtonClick = () => {
    window.location.href = 'https://spark-concepts-dad483b0ca89.herokuapp.com/';};
  const handleGithub2ButtonClick = () => {
    window.location.href = 'https://github.com/bswiley/Spark_Concepts';
  };
  const handleDeployed3ButtonClick = () => {
    window.location.href = 'https://blog-of-things-tech-9bcc541378b3.herokuapp.com/';};
  const handleGithub3ButtonClick = () => {
    window.location.href = 'https://github.com/bswiley/Blog';
  };
  const handleDeployed4ButtonClick = () => {
    window.location.href = 'https://bswiley.github.io/Weather-There/';};
  const handleGithub4ButtonClick = () => {
  window.location.href = 'https://github.com/bswiley/Weather-There';
};
const handleDeployed5ButtonClick = () => {
  window.location.href = 'https://dry-oasis-66126.herokuapp.com/';};
const handleGithub5ButtonClick = () => {
  window.location.href = 'https://github.com/bswiley/Note-this';
};
const handleDeployed6ButtonClick = () => {
  window.location.href = 'https://bswiley.github.io/This-too-shall-pass/';};
const handleGithub6ButtonClick = () => {
window.location.href = 'https://github.com/bswiley/This-too-shall-pass';
};
  return (
    <div className="cardContainer">
      <div className="card">
      <h2>Film Face-Off</h2>
      <img src='./images/project1.jpg' 
      alt='image of Film Face-Off project'/>
      <div className = "profileLinks">
      <button onClick={handleDeployed1ButtonClick}className="deployed">deployed location</button>
      <button onClick={handleGithub1ButtonClick} className="github-link">github repository</button>
      </div>
      </div>
      <div className="card">
      <h2>Spark-Concepts</h2>
      <img src='./images/project2.jpg'
      alt='image of Spark-Concepts project'/>
      <div className = "profileLinks">
      <button onClick={handleDeployed2ButtonClick} className="deployed">deployed location</button>
      <button onClick={handleGithub2ButtonClick} className="github-link">github repository</button>
      </div>
      </div>
      <div className="card">
      <h2>(Tech) Blog</h2>
      <img src='./images/project3.jpg'
      alt='image of (Tech) Blog project'/>
      <div className = "profileLinks">
      <button onClick={handleDeployed3ButtonClick} className="deployed">deployed location</button>
      <button onClick={handleGithub3ButtonClick} className="github-link">github repository</button>
      </div>
      </div>
      <div className="card">
      <h2>Weather There</h2>
      <img src='./images/project4.jpg'
      alt='image of Weather There project'/>
      <div className = "profileLinks">
      <button onClick={handleDeployed4ButtonClick} className="deployed">deployed location</button>
      <button onClick={handleGithub4ButtonClick} className="github-link">github repository</button>
      </div>
      </div>
      <div className="card">
      <h2>Note This</h2>
      <img src='./images/project5.jpg'
      alt='image of Note This project'/>
      <div className = "profileLinks">
      <button onClick={handleDeployed5ButtonClick} className="deployed">deployed location</button>
      <button onClick={handleGithub5ButtonClick} className="github-link">github repository</button>
      </div>
      </div>
      <div className="card">
      <h2>This too shall Pass</h2>
      <img src='./images/project6.jpg'
      alt='image of This too shall Pass project'/>
      <div className = "profileLinks">
      <button onClick={handleDeployed6ButtonClick} className="deployed">deployed location</button>
      <button onClick={handleGithub6ButtonClick} className="github-link">github repository</button>
      </div> 
      </div>
      </div>       
  );
}
