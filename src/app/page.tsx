// src/app/page.tsx
import { createCaller } from '../server/routers/_app'
import { createContext } from '../server/context'

const HomePage = async () => {
  const caller = createCaller(createContext())

  const users = await caller.user.list({ limit: 5 })

  const addedPost = await caller.user.create({
    email: "ti2@celular.net.br",
    name: "horastor"
});

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Usuários</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="border p-2 rounded">
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
