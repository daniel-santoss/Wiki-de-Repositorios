import styled from 'styled-components';

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size: 16px;
        color: #FAFAFA60;
        margin-bottom: 20px;
    }

    button.remover {
        color: #FF0000;
        background: transparent;
        border: none;
        cursor: pointer;
        font-size: 16px;
        margin-top: 10px;
        
        &:hover {
            text-decoration: underline;
        }
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`;