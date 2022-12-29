import { NextPage } from "next";
import Nav from "../components/Nav";
import Soc from "../components/Soc";
import Proj from "../components/Projects";

const Projects: NextPage = () => {

    return (
        <>

            <div className="w-full h-fit overflow-x-hidden">
                <Proj />
            </div>

        </>
    );
}

export default Projects;