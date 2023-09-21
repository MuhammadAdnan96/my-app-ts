import { NextResponse } from "next/server";
// import { useSelector } from "react-redux";

export default function middleware(req: any) {
  // const token = localStorage.getItem("userToken");
  // const token = useSelector((state) => state.tokenReducer.userToken);
  const token = req.cookies.get("userToken");

  if (!token) {
    return NextResponse.redirect("http://localhost:3000");
  }

  // if (token) {
  //   return NextResponse.redirect("http://localhost:3000/products");
  // }
}

export const config = {
  matcher: ["/products", "/login"],
};
