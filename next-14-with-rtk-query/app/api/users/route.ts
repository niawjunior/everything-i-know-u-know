import { NextResponse } from "next/server"

export async function GET() {
  try {
    const users = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
      },
    ]
    return NextResponse.json({
      users: users,
    })
  } catch (err) {
    return NextResponse.json({
      message: "Something went wrong!",
    })
  }
}
