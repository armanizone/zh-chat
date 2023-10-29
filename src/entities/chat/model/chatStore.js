import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useUserStore = create(persist((set, get) => ({
      user: '',
      setUser: (u) => set({ user: u }),
    }),
    {name: 'user-storage'}
  )
)