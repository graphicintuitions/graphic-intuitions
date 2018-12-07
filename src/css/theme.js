import styled from "styled-components";
import { Link } from "gatsby";

export const theme = {
  main: "mediumseagreen",
  textBlack: "#111",
  orange: "#EF3734",
};

export const Button = styled(Link)`
  border-radius: 5px;
  font-weight: bold;
`;

export const ButtonNav = styled(Button)`
  background: linear-gradient(180deg, #FFFFFF 0%, #E5E5E5 100%);
  padding: 15px 25px;
  color: ${props => props.theme.textBlack}
`;

export const ButtonOrange = styled(Button)`
  background: linear-gradient(180deg, #FF782D 0%, #FF2D2D 100%);
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.25);
  color: #fff;
  padding: 25px 90px;
  font-size: 20px;
`;

export const Container = styled.div`
  max-width: 1260px;
  margin: 0 auto;
`;
  