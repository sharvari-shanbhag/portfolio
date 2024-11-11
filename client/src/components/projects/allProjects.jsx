import React, { useEffect, useState } from "react";
import Project from "./project";
import "./styles/allProjects.css";

const AllProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/projects');
                const data = await response.json();
                setProjects(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching projects:", error);
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="all-projects-container">
            {projects.map((project, index) => (
                <div className="all-projects-project" key={index}>
                    <Project
                        logo={project.logo}
                        title={project.title}
                        description={project.description}
                        linkText={project.linkText}
                        link={project.link}
                    />
                </div>
            ))}
        </div>
    );
};

export default AllProjects;
