import { styled } from "@/stitches.config";
import { ColumnLayout, FullWidth } from "../layout/columns";
import { Div } from "../layout/div";
import { Flex } from "../layout/flex";
import { Logo } from "../layout/logo";
import { UnstyledLink } from "../navigation/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faTiktok,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { P } from "public/text/text";

const FootColumns = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",

  "@md": {
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  },
});

export const Footer = () => {
  return (
    <Div
      css={{
        color: "$white",
        backgroundColor: "$navy900",
        paddingBlock: "$16",
      }}
    >
      <ColumnLayout>
        <FullWidth>
          <FootColumns>
            <Flex column>
              <Logo expanded />
              <Flex>
                <UnstyledLink href="/">
                  <FontAwesomeIcon icon={faTwitterSquare} />
                </UnstyledLink>
                <UnstyledLink href="/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </UnstyledLink>
                <UnstyledLink href="/">
                  <FontAwesomeIcon icon={faInstagram} />
                </UnstyledLink>
                <UnstyledLink href="/">
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </UnstyledLink>
                <UnstyledLink href="/">
                  <FontAwesomeIcon icon={faTiktok} />
                </UnstyledLink>
              </Flex>
              <P>&copy;2023 REVOLANCER LTD</P>
            </Flex>
          </FootColumns>
        </FullWidth>
      </ColumnLayout>
    </Div>
  );
};
