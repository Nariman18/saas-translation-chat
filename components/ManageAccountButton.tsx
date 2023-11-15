import Link from "next/link";
import { generatePortalLink } from "../actions/generatePortalLink";

const ManageAccountButton = () => {
  return (
    <Link href="/chat">
      {/* action={generatePortalLink} */}
      <button type="submit">Get Started</button>
    </Link>
  );
};

export default ManageAccountButton;
