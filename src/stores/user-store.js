import create from "zustand";

const useUserStore = create((set) => ({
  user: null,
  isLoading: false,
  fetchUser: async () => {
    try {
      set({ isLoading: true });

      const response = await fetch("/api/user");
      const data = await response.json();

      if (data.user.id) {
        set({ user: data.user });
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useUserStore;
