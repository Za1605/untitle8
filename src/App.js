
import personage from "./NewPersonage/Personage";
import React from 'react';


const App = () => {
return (
 <div>
   <Personage id={72} name ={'Cool Rick'} gender = {"Male"} species = {'Human'} image ={'https://rickandmortyapi.com/api/character/avatar/72.jpeg'}/>
  <Personage id = {219}name ={'Mechanical Summer'} gender = {"Female"} species = {'Robot'} image ={'https://rickandmortyapi.com/api/character/avatar/219.jpeg'}/>
  <Personage id = {373}name ={'Unmuscular Michael'} gender = {"Male"} species = {'Human'} image ={'https://rickandmortyapi.com/api/character/avatar/373.jpeg'}/>
  <Personage id = {544}name ={'Miles Knightly'} gender = {"Male"} species = {'Alien'} image ={'https://rickandmortyapi.com/api/character/avatar/544.jpeg'}/>
  <Personage id = {577}name ={'Snake Terminator'} gender = {"Male"} species = {'Robot'} image ={'https://rickandmortyapi.com/api/character/avatar/577.jpeg'}/>
 <Personage id = {676}name ={'Japheths Middle Son'} gender = {"Male"} species = {'Humanoid'} image ={'https://rickandmortyapi.com/api/character/avatar/676.jpeg'}/>
 </div>
 );
};

export default App;