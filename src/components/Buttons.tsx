import styled, { css } from "styled-components";
import { Colour } from "../Shared";

const Button = styled.button`
  all: unset;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: ${Colour.white};
  border: 1px solid ${Colour.lightBlue};
  color: ${Colour.black};

  &:hover,
  &:focus {
    background: ${Colour.lightBlue};
  }

  &:hover {
    color: ${Colour.black};
  }

  &:focus {
    outline: 2px solid ${Colour.blue};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    background: ${Colour.grey};
  }
`;

interface SelectButtonProps {
  selected: boolean;
}

const TabButton = styled(Button)<SelectButtonProps>`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  ${({ selected }) =>
    selected &&
    css`
      background: ${Colour.blue};
      border: 1px solid ${Colour.blue};
      color: ${Colour.white};
    `}
`;

const SkillButton = styled(Button)`
  background: hsla(0, 0%, 85%, 0.25);
`;

const TechSkillButton = styled(SkillButton)<SelectButtonProps>`
  ${({ selected }) =>
    selected &&
    css`
      background: ${Colour.blue};
      color: ${Colour.white};
      box-shadow: 0 0 0 2px ${Colour.lightBlue};
    `}
`;

const SoftSkillButton = styled(SkillButton)<SelectButtonProps>`
  border: 1px solid ${Colour.lightOrange};

  &:hover,
  &:focus {
    background: ${Colour.lightOrange};
  }

  &:focus {
    outline: 2px solid ${Colour.orange};
  }

  ${({ selected }) =>
    selected &&
    css`
      background: ${Colour.orange};
      color: ${Colour.white};
      box-shadow: 0 0 0 2px ${Colour.lightOrange};
    `}
`;

export { Button, TabButton, TechSkillButton, SoftSkillButton };
