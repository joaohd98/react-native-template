import styled from "styled-components/native";

export const CustomTextStyles = {
  TextWithLoading: styled.Text<{isLoading?: boolean}>`
    opacity: ${props => (props.isLoading ? 0.5 : 1)};
  `,
};
