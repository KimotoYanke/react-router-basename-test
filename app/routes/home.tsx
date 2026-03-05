import { href, Link, useNavigate } from "react-router";

export default function Home() {
  const link = href("/login");
  const navigate = useNavigate();

  return (
    <div className="m-4 flex flex-col items-start gap-4">
      Home.
      <Link
        to={link}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Login
      </Link>
      <div
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        onClick={() => navigate("/login")}
      >
        Go to Login page with Navigate
      </div>
    </div>
  );
}
