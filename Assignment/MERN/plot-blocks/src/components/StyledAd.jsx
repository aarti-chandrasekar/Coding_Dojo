import styled from 'styled-components';
 
const StyledAd = styled.div`
    border: 1px solid lightgray;
    background-color: mediumpurple;
    margin: 20px;
    width: ${props => props.width || '100px'};
    height: ${props => props.height || '100px'};
`;
 
export default StyledAd;