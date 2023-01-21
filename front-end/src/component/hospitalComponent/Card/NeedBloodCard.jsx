import { Button, Card, Table } from "antd";
import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  padding: 5px;
`;
const CardStyle = styled(Card)`
  width: 500px !important;
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px !important;
`;
const CardRow = styled.p`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  width: 50%;
  padding: 4px 0px;
  border-bottom: 1px solid #e0dede;
`;
const CardWrap = styled.div`
  display: flex;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
`;

const ButtonStyle = styled(Button)`
  border: 2px solid #4096ff;
  font-weight: 600;

  &&hover {
    background-color: white !important;
  }
`;

const NeedBloodCard = ({ userData }) => {
  console.log(userData);
  return (
    <CardWrapper>
      <CardStyle title={userData.name} bordered={false} style={{ width: 300 }}>
        <CardWrap>
          <CardRow>BloodGroup:</CardRow>
          <span style={{ color: "red" }}>
            <CardRow>{userData.bloodGroup}</CardRow>
          </span>
        </CardWrap>
        <CardWrap>
          <CardRow>Address:</CardRow>
          <CardRow>
            {userData.locationDiv},{` ` + userData.locationDis}
          </CardRow>
        </CardWrap>
        <CardWrap>
          <CardRow>Email:</CardRow>
          <CardRow>{userData.email}</CardRow>
        </CardWrap>
        <CardWrap>
          <CardRow>Phone Number:</CardRow>
          <CardRow>{userData.phone}</CardRow>
        </CardWrap>
        <ButtonWrap>
          <ButtonStyle
            type="primary"
            onClick={() => {
              navigator.clipboard.writeText(userData.email);
            }}
          >
            Copy Phone Number
          </ButtonStyle>
          <ButtonStyle
            type="primary"
            onClick={() => {
              navigator.clipboard.writeText(userData.email);
            }}
          >
            Copy Email
          </ButtonStyle>
        </ButtonWrap>
      </CardStyle>
    </CardWrapper>
  );
};

export default NeedBloodCard;
