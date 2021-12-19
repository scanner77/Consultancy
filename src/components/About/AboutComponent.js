import styled from "styled-components";
import laxman from '../../Image/prop.png'
export const AboutWrapper = styled.div` 
    height: 100vh;
    widows: 100vw;
    background-size: cover;
    display: flex;
    justify-content: space-evenly;
    position: relative;
  background-color: black;
`
export const Otherskills = styled.div`
    height: 400px;
    width: 200px;
      background-color: lightgrey;
    position: absolute;
    left: 0;
    margin-left: 40px;
    margin-top: 40px;
    position: fixed;
    border-left: 3px dotted orange;
    border-right: 3px dotted orange;
    border-bottom: 3px dotted orange;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (max-width: 1100px) {
    display: none;
  }
`
export const Quote = styled.div`
    height: 260px;
    width: 550px;
    background-color: white;
    margin: 80px;
    position: absolute;
    box-shadow: 10px 10px 10px;

    @media (max-width: 1100px) {
    width: 500px;
    text-align: center;
    margin: 30px auto;
  }
  @media (max-width: 720px) {
    width: 370px;
    text-align: center;
    height: 400px;
    margin: 30px auto;
  }
    
`
export const MyImage = styled.div`
    background-image: url(${laxman});
    height: 350px;
    width: 250px;
    background-color: lightgrey;
    margin: 100px;
    position: absolute;
    right: 0;
    background-size: cover;
    background-position: center;
    box-shadow: 10px 0px 10px;
    @media (max-width: 1100px) {
    display: none;
  }
`
export const Intro = styled.div`
    height: 100px;
    width: 700px;
    background-color: white;
    bottom: 0;
    margin-top: 360px;
    margin-left: 300px;
    color: black;
    font-family: 'Courier New', Courier, monospace;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 10px 10px 10px;

    @media (max-width: 1100px) {
    width: 300px;
    height: 70px;
    text-align: center;
  }
  @media (max-width: 720px) {
    position: absolute;
    top: 0;
    width: 300px;
    height: 70px;
    margin-right: 200px;
    margin-top: 500px;
  }
`

export const Apstrope = styled.h1` 
    font-size: 27px;
    margin-top: -18px;
    color: black;
`

export const Circle = styled.div`
    height: 100px;
    width: 100px;
    background-color: blue;
`