import styled from "styled-components";

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 2px;
    width: 40px;
    height: 40px;
    font-size: 16px;
    color: #b036c3;
    background-color: #1e1e1e;
    border-radius: 50%;
    cursor: pointer;

    &.primary {
        border: 1px solid #b036c3;
    }

    &.secondary {
        border: 1px solid #c33636;
        color: #c33636;
        padding-left: 0px;
        padding-top: 2px;
    }
`