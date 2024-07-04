import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface TokenState {
    token: string;
    setToken: (token: string) => void;
    removeToken: () => void;
}

const useTokenStore = create<TokenState>()(
    persist(
        (set) => ({
            token: '',
            setToken: (token) => set({ token }),
            removeToken: () => set({ token: '' }),
        }),
        {
            name: "token-storage"
        }
    )
)

export {
    useTokenStore
}