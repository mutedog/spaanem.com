import styled from '@emotion/styled';

const StyledHeader = styled.header`
  font-family: 'PT Sans', sans-serif;
  padding-left: 2rem;
  line-height: 1.1;

  @media (min-width: 37em) {
		padding-left: 4rem;
		line-height: 1.1;
	}
	@media (min-width: 58em) {
		padding-left: 5rem;
		line-height: 1.1;
	}

  span[itemprop="name"],
	span[itemprop="jobTitle"] {
		display: none;
	}

	div[itemprop="address"] {
		text-transform: lowercase;
	}
`;

const Logo = styled.div`
  display: block;
	background: url(/img/logo-bg.jpg) no-repeat #333333;
	padding: 1.5rem 2rem 1rem;
	margin: 1rem 0 1rem -2rem;
	max-width: 400px;
  @media (min-width: 37em) {
    max-width: 350px;
		padding: 1.5rem 2rem 1rem 4rem;
		margin: 1.5rem 0 1rem -4rem;
  }
  @media  (min-width: 58em) {
    max-width: 366px;
		padding: 1.5rem 2rem 1rem 5rem;
		margin: 3rem 0 1rem -5rem;
  }
`;

const Header = () => {

  return (
    <StyledHeader itemType="http://schema.org/Person">
      <Logo><img src="/img/logotype.png" alt="Matt Spaanem : Web Developer / Graphic Designer"/></Logo>
      <span itemProp="name">Matt Spaanem</span>
      <span itemProp="jobTitle">Web Developer / Graphic Designer</span>
      <div itemProp="address" itemType="http://schema.org/PostalAddress">
        <span itemProp="streetAddress">1764 N. 10th St.</span><br/>
        <span itemProp="addressLocality">Washougal</span>,&nbsp;
        <span itemProp="addressRegion">WA</span>&nbsp;
        <span itemProp="postalCode">98671</span>
      </div>
      <a itemProp="email" href="mailto:matt@spaanem.com" title="Email Matt Spaanem">matt@spaanem.com</a><br/>
      <a itemProp="url" href="https://spaanem.com" title="Matt Spaanem">spaanem.com</a><br/>
      <a itemProp="telephone" href="tel:4143319134">(414) 331-9134</a>
    </StyledHeader>
  )
}

export default Header;