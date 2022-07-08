import { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../providers/UserProvider";
import { SecondoryButton } from "../atoms/buttons/SecondoryButton";
export const Top = () => {
  const history = useHistory();
  const { setUserInfo } = useContext(UserContext);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push({ pathname: "/users" });
  };

  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push({ pathname: "/users" });
  };

  return (
    <SContainer>
      <h2>TOP Page</h2>
      <SecondoryButton onClick={onClickAdmin}>管理者ユーザー</SecondoryButton>
      <br />
      <br />
      <SecondoryButton onClick={onClickGeneral}>一般ユーザー</SecondoryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
