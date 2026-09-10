import { LandingPage } from "../site";
import { siteMetadata } from "../metadata";
export const metadata = siteMetadata("en");
export default function Page() {
  return <LandingPage locale="en" />;
}
