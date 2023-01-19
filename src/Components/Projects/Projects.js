import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { CgMediaLive } from "react-icons/cg";
import ProjectObject from "./ProjectsObject";

import "./assets/projects-styles.scss";

const Projects = () => {
  return (
    <>
      <div className="portfolis">
        <section class="dark">
          <div class="container py-4">
            {ProjectObject.map((project, index) => (
              <article class="postcard dark blue">
                <a class="postcard__img_link" href={project.link1}>
                  <img
                    class="postcard__img"
                    src={project.image}
                    alt={project.title}
                  />
                </a>
                <div class="postcard__text">
                  <h1 class="postcard__title blue">
                    <a href={project.link1}>{project.title}</a>
                  </h1>
                  <div class="postcard__bar"></div>
                  <div class="postcard__preview-txt">{project.desription}</div>
                  <ul class="postcard__tagbox">
                    {project.category.map((category, index) => (
                      <li class="tag__item">
                        <i class="fas fa-tag mr-2"></i>
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
