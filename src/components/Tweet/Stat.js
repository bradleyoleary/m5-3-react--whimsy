import React from "react";
import styled from "styled-components";

export const Stat = ({ statNum, statName }) => {
  return (
    <StatWrapper>
      <span>{statNum}</span> {statName}
    </StatWrapper>
  );
};

const StatWrapper = styled.div`
  margin-right: 20px;
  color: grey;
  span {
    color: black;
    font-weight: bold;
  }
`;
