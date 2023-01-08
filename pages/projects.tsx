import { NextPage } from "next";
import Nav from "../components/Nav";
import Soc from "../components/Soc";
import Proj from "../components/Projects";
import Head from 'next/head';

const Projects: NextPage = () => {

    return (
        <>
			<Head>
				<title>Alvarez | Projects</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" key="projects" />
			</Head>

            <div className="w-full h-fit overflow-x-hidden">
                <Proj />
            </div>

        </>
    );
}

export default Projects;