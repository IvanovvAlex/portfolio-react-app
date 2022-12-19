import './Main.css';
import ExperienceCounter from '../ExperienceCounter/ExperienceCounter';
import { Route , Routes } from "react-router-dom";

function Main() {
    return (
        <div className="main">
            <Routes>
                <Route path="/Experience" element={<ExperienceCounter />} /> 
            </Routes>
            <img src="https://www.siliconrepublic.com/wp-content/uploads/2015/05/QA-Tester-meme-03.jpg" alt="img"/>
        </div>
    );
}


export default Main;
