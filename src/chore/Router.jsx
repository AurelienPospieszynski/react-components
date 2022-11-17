/**
 * DO NOT UPDATE THIS FILE
 *
 * This file is created to make the exercises friendly. Any update can break the exercises.
 */

import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import { EXERCISES } from "./exercises";
import { ExerciseProse } from "./ExerciseProse.jsx";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {EXERCISES.map((exercise) => (
        <React.Fragment key={exercise.name}>
          <Route
            key={exercise.name}
            path={`/${exercise.name}`}
            element={<ExerciseRoutes data={exercise} />}
          />

          {exercise.parts.exercise ? (
            <Route
              key={exercise.name}
              path={`/${exercise.name}/exercise`}
              element={
                <ExerciseProse markdownElement={exercise.parts.md}>
                  {exercise.parts.exercise}
                </ExerciseProse>
              }
            />
          ) : (
            exercise.parts.exercises.map((exercisePart, i) => (
              <Route
                key={`${exercise.name}-${i}`}
                path={`/${exercise.name}/exercise/${i + 1}`}
                element={
                  <ExerciseProse markdownElement={exercise.parts.md}>
                    {exercisePart}
                  </ExerciseProse>
                }
              />
            ))
          )}

          {exercise.parts.solutions.map((solution, i) => (
            <Route
              key={`${exercise.name}-${i}`}
              path={`/${exercise.name}/solution/${i + 1}`}
              element={solution}
            />
          ))}

          <Route
            path={`/${exercise.name}/solution`}
            element={<Navigate to={`/${exercise.name}`} replace={true} />}
          />
        </React.Fragment>
      ))}
    </Routes>
  );
};

const ExerciseRoutes = ({ data }) => {
  return (
    <div className="navigation-page">
      <h1 className="work-sans">{data.name}</h1>
      <div className="nav-list">
        {data.parts.exercise ? (
          <Link className="router-exercise" to={`/${data.name}/exercise`}>
            Exercise
          </Link>
        ) : (
          data.parts.exercises.map((exercisePart, i) => (
            <Link
              className="router-exercise"
              key={i}
              to={`/${data.name}/exercise/${i + 1}`}
            >
              Exercise {i + 1}
            </Link>
          ))
        )}
        {data.parts.solutions.map((_, i) => (
          <Link key={i} to={`/${data.name}/solution/${i + 1}`}>
            Solution {i + 1}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="navigation-page">
      <h1 className="work-sans">BeginReact - Les components</h1>
      <div className="nav-list">
        {EXERCISES.map((exercise, i) => (
          <Link key={i} to={`/${exercise.name}`}>
            {exercise.name}
          </Link>
        ))}
      </div>
      <p>
        Les liens te permettent de te repérer dans les exercises.
        <br />
        Si tu es perdu ou tu as des problèmes, rejoins le discord et n'hésites
        pas à demander de l'aide.
        <p>on aime tous coder comme des petits fous</p>
      </p>
    </div>
  );
};
