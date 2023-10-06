"use client"


import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: #325cad;
  transform: rotateX(180deg);
  .card {
    perspective: 2000px;
    transform-style: preserve-3d;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%) skew(280deg, 20deg) rotateX(100deg);
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.14);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.5px);
    -webkit-backdrop-filter: blur(10.5px);
    border: 2px solid rgba(255, 255, 255, 0.6);
    height: 220px;
    width: 420px;
    overflow-x: hidden;
    transition: 1.2s;
  }
  .card .bg img {
    transform: rotate(180deg);
    z-index: -1;
    position: absolute;
    height: 100%;
    width: 100%;
  }
  .card:hover {
    cursor: pointer;
    z-index: 1;
    transform: rotateX(180deg) translateY(10px) translateX(20px);
  }

  .card .items {
    color: white;
    height: 100%;
    display: flex;
    flex-direction: column;

    justify-content: space-around;
    margin-left: 20px;
  }

  @media (max-width: 888px) {
    .card {
      width: 60%;
    }
    .card:hover {
      cursor: pointer;
      z-index: 1;
      transform: rotateX(180deg) translateY(10px) translateX(0px);
      left: 0;
    }
  }
`;