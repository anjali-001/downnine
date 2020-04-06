import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.5rem;
background: transparent;
border: 0.05rem solid var(--lightYellow);
border-color: var(--lightYellow);
color: var(--lightYellow);
border-radius: 0.5rem;
padding: 0.2rem 0.5 rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: 0.5sec ease-in-out;
&:hover{
    background:var(--mainDark);
    border-color: var(--darkYellow);
    color: var(--darkYellow);
}
`