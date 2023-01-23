import styled from 'styled-components';
 
const StyledBox = styled.div`
    background-color: ${props => props.color || 'orange'};
    margin: 20px;
    width: ${props => props.size || '100px'};
    height: ${props => props.size || '100px'};
`;
 
export default StyledBox;