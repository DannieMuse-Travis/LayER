import styled from "styled-components";
import PricingComponent from "../../components/common/Price";

const Pricing = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Top>
            <h2>PRICING</h2>
            <p>
              We ensure quality & support. People love us & we love them. Lorem{" "}
              <br />
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Top>
          <PriceWrap>
            <PricingComponent left="#ff5000ff" right="#fe8c00ff" text="Basic" />
            <PricingComponent left="#0045e5ff" right="#03c4efff" text="Pro" />
            <PricingComponent
              left="#f1384aff"
              right="#a003e6ff"
              text="Advanced"
            />
            <PricingComponent
              left="#4837f3ff"
              right="#9406eeff"
              text="Premium"
            />
          </PriceWrap>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Pricing;

const PriceWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px 0px;

  h2 {
    font-size: 27px;
    margin: 0;
    color: #f1384aff;
  }

  p {
    text-align: center;
    margin-bottom: 0;
  }
`;

const Wrapper = styled.div`
  width: 90%;
  flex-direction: column;
  justify-content: center;

  display: flex;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
`;