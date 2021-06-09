import styled from 'styled';

const Container = styled.div`
    ${({ theme }) => theme.screen}
    display: flex;
    flex-direction: column;

    margin: 10px 5px;
    padding: 5 10px;
    flex: 1;
    height: 215px;

    .loader {
        position: relative;
        top: 35%;
        left: 40%;
    }

    .flex {
        display: flex;
        justify-content: space-between;

        .move-name {
            font-size: 24px;
            border-bottom: solid black 2px;
            margin-bottom: 3px;
            text-align: center;
            text-transform: capitalize;
        }

        .move-left {
            padding-right: 10px;
        }

        .move-right {
        }
    }

    .outer {
        overflow: hidden;
        .inner {
            height: 100%;
            overflow-y: scroll;
        }
    }

    .move-description {
        ${({ theme }) => theme.spriteScreen}
        border-radius: 50px;
        display: block;
        height: 100%;
        margin: 10px 3px 5px;
        padding: 10px 20px;

        hr {
            margin: 5px 0;
        }
    }
`;

export default Container;
