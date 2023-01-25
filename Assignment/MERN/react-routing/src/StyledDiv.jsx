import styled from 'styled-components';
 
const StyledDiv = styled.div`
    background-color: ${props => props.bgCol || 'orange'};
    color: ${props => props.textCol || 'white'};
`;
 
export default StyledDiv;