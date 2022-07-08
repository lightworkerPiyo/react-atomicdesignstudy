import React, { useContext } from "react";
import styled from "styled-components";
// import { UserContext } from "../../providers/UserProvider";
import { SecondoryButton } from "../atoms/buttons/SecondoryButton";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";
const users = [...Array(10).keys()].map((val) => {
  return {
    name: `レイヴン太郎 ${val}`,
    image: "https://source.unsplash.com/Mv9hjnEUHR4",
    email: "piyo@gmail.com",
    phone: "090-9999-9999",
    company: {
      name: "Raven"
    }
  };
});

export const Users = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const onClickSwitch = () =>
    setUserInfo({ isAdmin: userInfo === null ? true : !userInfo.isAdmin });

  return (
    <SContainer>
      <h2>UserList</h2>
      <SearchInput />
      <br />
      <SecondoryButton onClick={onClickSwitch}>切替</SecondoryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
