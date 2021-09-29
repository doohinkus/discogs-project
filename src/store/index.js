import create from "zustand";
const useStore = create((set) => ({
  releases: [],
  loadState: "loading",
  setLoadState: (ls) =>
    set((state) => ({
      loadState: ls,
    })),
  setReleases: (moreReleases) =>
    set((state) => ({
      releases: [...state.releases, ...moreReleases],
    })),
  sortByTitle: () =>
    set((state) => ({
      releases: [...state.releases].sort((a, b) => {
        const nameA = a.title.toUpperCase(); // ignore upper and lowercase
        const nameB = b.title.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      }),
    })),
  sortByYear: () =>
    set((state) => ({
      releases: [...state.releases].sort((a, b) => {
        const yearA = a.year;
        const yearB = b.year;
        if (yearA < yearB) {
          return -1;
        }
        if (yearA > yearB) {
          return 1;
        }

        return 0;
      }),
    })),
}));

export default useStore;
