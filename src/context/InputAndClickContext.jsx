import { createContext, useContext, useEffect, useRef, useState } from "react";

const InputAndClickContext = createContext();

const initialErrorState = {
  "Pledge with no reward": { error: false },
  "Bamboo stand": { error: false },
  "Black Edition Stand": { error: false },
};

function InputAndClickProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const [chosenPledge, setChosenPledge] = useState("");
  const [pledgeNoReward, setPledgeNoReward] = useState(1);
  const [bambooStand, setBambooStand] = useState(25);
  const [blackEditionStand, setBlackEditinStand] = useState(75);
  const [openThanksModal, setOpenThanksModal] = useState(false);
  const [error, setError] = useState(initialErrorState);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [totalBackers, setTotalBackers] = useState(5007);
  const [totalBackedAmount, setTotalBackedAmount] = useState(89914);

  const modalRef = useRef();
  const modalThanksRef = useRef();

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleTotalBackers() {
    setTotalBackers((prev) => prev + 1);
  }

  function handleTotalBacked() {
    if (chosenPledge === "Pledge with no reward" && !isNaN(pledgeNoReward))
      setTotalBackedAmount((prev) => prev + +pledgeNoReward);
    if (chosenPledge === "Bamboo stand" && !isNaN(bambooStand))
      setTotalBackedAmount((prev) => prev + +bambooStand);
    if (chosenPledge === "Black Edition Stand" && !isNaN(blackEditionStand))
      setTotalBackedAmount((prev) => prev + +blackEditionStand);
  }

  function handleCloseModal() {
    if (openMenu) setOpenMenu(false);
    else {
      setOpenModal(false);
      setChosenPledge("");
      setOpenThanksModal(false);
      setPledgeNoReward(1);
      setBambooStand(25);
      setBlackEditinStand(75);
    }
  }

  function handleChoosePledge(id) {
    if (id !== "Mahogany Special Edition") {
      setError((prevError) => {
        const updatedErrorState = { ...prevError };
        Object.keys(updatedErrorState).forEach((key) => {
          updatedErrorState[key].error = false;
        });
        return updatedErrorState;
      });
      setChosenPledge(id);
    }
  }

  function handleNoReward(num) {
    setPledgeNoReward(num);
    setError((prevError) => {
      const updatedErrorState = { ...prevError };
      updatedErrorState["Pledge with no reward"].error =
        +num < 1 || num?.startsWith("0") || isNaN(num);
      return updatedErrorState;
    });
  }

  function handleBambooStand(num) {
    setBambooStand(num);
    setError((prevError) => {
      const updatedErrorState = { ...prevError };
      updatedErrorState["Bamboo stand"].error =
        +num < 25 || num?.startsWith("0") || isNaN(num);
      return updatedErrorState;
    });
  }

  function handleBlackEditinStand(num) {
    setBlackEditinStand(num);
    setError((prevError) => {
      const updatedErrorState = { ...prevError };
      updatedErrorState["Black Edition Stand"].error =
        +num < 75 || num?.startsWith("0") || isNaN(num);
      return updatedErrorState;
    });
  }

  function handleBookmark() {
    setIsBookmarked((prev) => !prev);
  }

  function handleOpenMenu() {
    setOpenMenu(true);
  }

  function handleInput(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function handleEnterPledge(e, name) {
    e.preventDefault();
    e.stopPropagation();

    const errorState = { ...initialErrorState };

    if (name === "Pledge with no reward") {
      errorState[name].error =
        pledgeNoReward < 1 ||
        String(pledgeNoReward).startsWith("0") ||
        isNaN(pledgeNoReward);
    } else if (name === "Bamboo stand") {
      errorState[name].error =
        bambooStand < 25 ||
        String(bambooStand).startsWith("0") ||
        isNaN(bambooStand);
    } else if (name === "Black Edition Stand") {
      errorState[name].error =
        blackEditionStand < 75 ||
        String(blackEditionStand).startsWith("0") ||
        isNaN(blackEditionStand);
    }

    setError(errorState);

    if (!Object.values(errorState).some((error) => error.error)) {
      setError({ ...initialErrorState });
      setOpenThanksModal(true);
      setOpenModal(false);
    }
  }
  useEffect(() => {
    if (modalRef.current && openModal && chosenPledge) {
      const scrollToPledge = document.getElementById(chosenPledge);
      if (scrollToPledge) scrollToPledge.scrollIntoView({ behavior: "smooth" });
    } else if (modalRef.current && openModal && !chosenPledge) {
      modalRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (modalThanksRef.current && openThanksModal) {
      modalThanksRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [modalRef, openModal, chosenPledge, openThanksModal]);

  return (
    <InputAndClickContext.Provider
      value={{
        openModal,
        handleOpenModal,
        handleCloseModal,
        modalRef,
        chosenPledge,
        handleChoosePledge,
        pledgeNoReward,
        bambooStand,
        blackEditionStand,
        setPledgeNoReward,
        setBambooStand,
        setBlackEditinStand,
        handleNoReward,
        handleBambooStand,
        handleBlackEditinStand,
        openThanksModal,
        handleEnterPledge,
        modalThanksRef,
        error,
        handleInput,
        handleBookmark,
        isBookmarked,
        handleOpenMenu,
        openMenu,
        isHovered,
        setIsHovered,
        totalBackers,
        handleTotalBackers,
        handleTotalBacked,
        totalBackedAmount,
      }}
    >
      {children}
    </InputAndClickContext.Provider>
  );
}

function useInputAndClick() {
  const context = useContext(InputAndClickContext);
  if (context === undefined)
    throw new Error(
      "InputAndClickContext was used outside of the InputAndClickProvider"
    );
  return context;
}

export { InputAndClickProvider, useInputAndClick };
