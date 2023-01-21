import { Button, Card, Table } from "antd";
import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  padding: 5px;
`;
const CardStyle = styled(Card)`
  width: 350px !important;
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
  border: 2px solid red;
  color: #fff;
  background-color: red;
  font-weight: 600;

  &&hover {
    background-color: white !important;
  }
`;
const ButtonStyleApprove = styled(Button)`
  border: 2px solid #4096ff;
  color: #4096ff;
  font-weight: 600;

  &&hover {
    background-color: white !important;
  }
`;

const ReqDoctorsCard = ({ userData, onClick, onApprove }) => {
  console.log("hlow undefined ", userData);
  return (
    <CardWrapper>
      <CardStyle title={userData.name} bordered={false} style={{ width: 300 }}>
        <CardWrap>
          <CardRow>Email:</CardRow>
          <CardRow>{userData.email}</CardRow>
        </CardWrap>
        <CardWrap>
          <CardRow>Gender:</CardRow>
          <CardRow>{userData.gender}</CardRow>
        </CardWrap>
        <CardWrap>
          <CardRow>Specialist:</CardRow>
          <CardRow>{userData.specialist}</CardRow>
        </CardWrap>
        <CardWrap>
          <CardRow>MBBS:</CardRow>
          <CardRow>{userData.mbbsInstitue}</CardRow>
        </CardWrap>
        <CardWrap>
          <CardRow>Current Profession:</CardRow>
          <CardRow>{userData.currentProfession}</CardRow>
        </CardWrap>
        <ButtonWrap>
          <ButtonStyle
            color="red"
            type=""
            onClick={() => {
              onClick(userData._id);
            }}
          >
            Reject
          </ButtonStyle>
          <Button
            type="primary"
            onClick={() => {
              onApprove(userData._id);
            }}
          >
            Approve
          </Button>
        </ButtonWrap>
      </CardStyle>
    </CardWrapper>
  );
};

export default ReqDoctorsCard;