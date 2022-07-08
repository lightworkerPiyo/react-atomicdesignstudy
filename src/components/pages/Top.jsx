import { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../providers/UserProvider";
import { SecondoryButton } from "../atoms/buttons/SecondoryButton";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";
export const Top = () => {
  const history = useHistory();

  // use recoil
  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);

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
