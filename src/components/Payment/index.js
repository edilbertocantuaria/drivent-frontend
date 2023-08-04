import styled from 'styled-components';

export const UnRegisted = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 388px;
  height: 46px;

  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-size: 20px;
  color: #8E8E8E;
`;
export const StyledContainer = styled.div`
  width: 864px;
  height: 600px;
  font-family: Roboto;
  font-style: normal;
`;
export const Title = styled.h1`
color: #000;
font-size: 34px;
`;

export const Description = styled.h2`
color: #8E8E8E;
font-size: 20px;
margin-top: 20px;

span{
    font-weight: 700;
}

`;

export const OptionsContainer = styled.div`
margin-top: 17px;
margin-bottom: 35px;
width: 314px;
height: 144px;

display: flex;
flex-direction: row;
justify-content: space-between;
`;

export const OptionCard = styled.div`
width: 145px;
height: 145px;
border-radius: 20px;
border: 1px solid #CECECE;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
    div{
        color: #454545;
        font-size: 16px;
    }
    h2{
        color: #898989;
        font-size: 14px;
    }
`;

export const ReserveButton = styled.button`
margin-top: 15px;
width: 162px;
height: 37px;
border-radius: 4px;
background: #E0E0E0;
border: none;
box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);
color: #000;
text-align: center;
font-size: 12px;
`;
