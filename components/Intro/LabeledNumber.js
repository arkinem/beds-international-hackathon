import styled from "styled-components";

const LabeledNumber = ({ number, label }) => {
  const formattedNumber = number < 10 ? `0${number}` : number;

  return (
    <Container>
      <Number>{formattedNumber}</Number>
      <Label>{label}</Label>
    </Container>
  );
};

export default LabeledNumber;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Number = styled.span`
  font-weight: 400;
  font-size: 64px;
  margin-bottom: 5px;
`;

const Label = styled.div`
  font-weight: 300;
  font-size: 24px;
  text-transform: capitalize;
`;
