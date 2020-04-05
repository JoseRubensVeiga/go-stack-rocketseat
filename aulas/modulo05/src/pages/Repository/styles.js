import styled from 'styled-components';

export const Loading = styled.div`
    color: #FFF;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        color: #7159c1;
        font-size: 16px;
        text-decoration: none;
    }

    img {
        width: 120px;
        border-radius: 50%;
        margin-top: 20px;
    }

    h1 {
        font-size: 24px;
        margin-top: 10px;
    }

    p {
        margin-top: 5px;
        font-size: 14px;
        color: #666;
        line-height: 1.4;
        text-align: center;
        max-width: 400px;
    }
`;


export const IssueList = styled.ul`
    padding-top: 30px;
    margin-top: 10px;
    border-top: 1px solid #eee;
    list-style: none;

    li {
        display: flex;
        padding: 15px 10px;
        border: 1px solid #eee;
        border-radius: 4px;

        & + li {
            margin-top: 10px;
        }
    }

    img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 2px solid #eee;
    }

    div {
        flex: 1;
        margin-left: 15px;

        strong {
            font-size: 16px;

            a {
                text-decoration: none;
                color: #333;

                &:hover {
                    color: #7159c1;
                }
            }

            span {
                background-color: #eee;
                color: #333;
                border-radius: 2px;
                font-size: 12px;
                font-weight: 600;
                height: 20px;
                padding: 3px 4px;
                margin-left: 10px;
            }
        }

        p {
            margin-top: 5px;
            font-size: 12px;
            color: #999;
        }
    }
`;


export const IssueFilter = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin-top: 10px;

    & > div {
        display: flex;

        & > div {
            background-color: #eee;
            border-radius: 10%;
            padding: 3px 10px;
            cursor: pointer;
            font-size: .8rem;

            &[active="1"] {
                background-color: #7159C1;
                color: #FFF;
            }

            &:hover:not([active="1"]) {
                background-color: #7159C140;
            }

            & + div {
                margin-left: 5px;
            }
        }
    }

`;

export const IssueNavigator = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    & > div {
        background-color: #f1f1f1;
        padding: 5px 10px;
        border-radius: 4px;
        cursor: pointer;
        font-size: .8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .2s;

        &:active {
            background-color: #7159C1;
            color: #FFF;
        }

        input {
            width: 30px;
            margin-left: 5px;
            border-radius: 4px;
            padding: 5px;
            border: 1px solid #eee;
        }
    }
`;
