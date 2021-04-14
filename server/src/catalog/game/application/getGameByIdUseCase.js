export const useCaseFactory = ({repository}) => (id) => {
    return {
        execute: () => repository.get(id)
    }
};