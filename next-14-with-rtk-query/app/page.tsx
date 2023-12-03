"use client"

import { useGetUsersQuery } from "./redux/services/userApi"

export default function Home() {
  const { data, isLoading } = useGetUsersQuery()
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data?.users.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        ))
      )}
    </div>
  )
}
