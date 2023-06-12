import { styled } from "@/stitches.config";
import { ColumnLayout, FullWidth } from "../layout/columns";
import { Div } from "../layout/div";
import { H5 } from "public/text/headings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeFork,
  faImages,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Flex } from "../layout/flex";
import { P } from "public/text/text";

const Columns = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  marginBlock: "64px",
  gap: "24px",

  "@md": {
    gridTemplateColumns: "1fr 1fr 1fr",
    marginBlock: "120px",
  },
});

const StyledIcon = styled(FontAwesomeIcon, {
  backgroundColor: "$neutral100",
  color: "$navy900",
  display: "inline-block",
  width: "18px",
  height: "18px",
  padding: "15px",
  borderRadius: "100%",
});

export const ExchangeShowcaseConnect = () => {
  return (
    <ColumnLayout>
      <FullWidth>
        <Columns>
          <Div>
            <Flex css={{ alignItems: "center" }}>
              <StyledIcon icon={faUsers} />
              <H5>Exchange your services</H5>
            </Flex>
            <P>
              Offer your services and earn credits, then spend them on services
              you need to scale your business.
            </P>
          </Div>
          <Div>
            <Flex css={{ alignItems: "center" }}>
              <StyledIcon icon={faImages} />
              <H5>Showcase Your Portfolio</H5>
            </Flex>
            <P>
              Create a portfolio to showcase your work to other professionals in
              need of your services.
            </P>
          </Div>
          <Div>
            <Flex css={{ alignItems: "center" }}>
              <StyledIcon icon={faCodeFork} />
              <H5>Connect With Your Community</H5>
            </Flex>
            <P>
              Connect with the communities of like-minded independents from all
              around the world.
            </P>
          </Div>
        </Columns>
      </FullWidth>
    </ColumnLayout>
  );
};
