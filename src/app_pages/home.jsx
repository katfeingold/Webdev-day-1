import InfoCard from "../app_components/info-card"
import LocationList from "../app_components/location-list"

function Home(){
    return (
        <div className="container pt-4">
        <h2>SAS</h2>
        <p>blah blah blah It was the best of times it was the worse of times.
          Perhaps I could continue just writing things and nothing is going to stop me.
          Here is a little something here to give us somthing to look at while we are working with the API
          SAVANNAH DISTRICT ROCKS!
          
        </p>
        <div className="row">
          <div className="col"> 
          <InfoCard 
          theme="primary" 
          headText="yeah!" 
          cardTitle="We got this" 
          cardText ="W totally got this, its just goign to take a bit, But we at least have somethign showing!!!" 
          />
        
          </div>
          <div className="col">
          <InfoCard 
          theme="info" 
          headText="Woot!" 
          cardTitle="sorta getting it" 
          cardText ="yippy" 
          />
            </div>  
          <div className="col">
          <InfoCard 
          theme="warning" 
          headText="Woohoo!!" 
          cardTitle="Slowly but surly" 
          cardText ="SAS has DATA!!!" 
          />
            </div>   {/* end col */}    
        </div>  {/* end row */}
       <hr /> {/* horizontal line */}
       <LocationList />
        </div>

    );

}
export default Home;