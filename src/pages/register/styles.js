import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Wrapper = styled.div`
    max-width: 400px;
`;

export const Column = styled.div`
    flex: 1;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;

export const Title = styled.h2`
    max-width:30%;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
    display: flex
    align-items: flex-start;
    justify-content: flex-start,


    color: #ffffff;
`;

export const TitleLogin = styled.p`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 8px;
`;

export const SubtitleLogin = styled.p`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 35px;
    margin-top: 30px;
`;

export const EsqueciText = styled.p`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #e5e044;
`;

export const CriarText = styled.p`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #23dd7a;
`;

export const ContainerMain = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 40%;
    margin-top: 70px;
`;
