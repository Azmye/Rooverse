import { create } from 'zustand';
import { persist } from 'zustand/middleware';

let userStateStore = (set) => ({
  users: {},
  addUser: (user) => set((state) => ({ users: { ...state.users, user } })),
});

userStateStore = persist(userStateStore, { name: 'users' });

const userState = create(userStateStore);

export default userState;
