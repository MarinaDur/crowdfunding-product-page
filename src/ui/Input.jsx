import styled from "styled-components";
import { useInputAndClick } from "../context/InputAndClickContext";

const StyledInput = styled.input`
  width: 45%;
  /* padding: 10px 5px 10px 40px; */
  height: 45px;
  border-radius: 40px;
  border: 1px solid var(--color-out-of-stock-devider);
  font-weight: 700;
  text-align: left;
  color: var(--color-black);
  font-size: 1.5rem;
  background: url("dollar-sign.png") no-repeat center left 20%;
  background-size: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: 0.3s all ease-in-out;

  &:hover,
  &:focus {
    border-color: var(--color-moderate-cyan);
  }

  @media (min-width: 950px) {
    width: 30%;
  }
`;

function Input() {
  const {
    chosenPledge,
    pledgeNoReward,
    bambooStand,
    blackEditionStand,
    handleNoReward,
    handleBambooStand,
    handleBlackEditinStand,
    handleInput,
  } = useInputAndClick();

  return (
    <>
      {chosenPledge === "Pledge with no reward" && (
        <StyledInput
          value={pledgeNoReward}
          type="text"
          onChange={(e) => handleNoReward(e.target.value)}
          onClick={(e) => handleInput(e)}
          id="Pledge-with-no-reward"
        />
      )}
      {chosenPledge === "Bamboo stand" && (
        <StyledInput
          value={bambooStand}
          type="text"
          onChange={(e) => handleBambooStand(e.target.value)}
          onClick={(e) => handleInput(e)}
          id="Bamboo-stand"
        />
      )}
      {chosenPledge === "Black Edition Stand" && (
        <StyledInput
          value={blackEditionStand}
          type="text"
          onChange={(e) => handleBlackEditinStand(e.target.value)}
          onClick={(e) => handleInput(e)}
          id="Black-Edition-Stand"
        />
      )}
    </>
  );
}

export default Input;
