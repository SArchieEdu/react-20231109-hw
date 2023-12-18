import { useGetUsersQuery } from "../../redux/services/api";
import { User } from "./component";

export const UserContainer = ({ userId }) => {
  const {
    data: user,
    isLoading,
    isError,
  } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find(({ id }) => id === userId),
    }),
  });

  if (isLoading) {
    return "loading";
  }

  if (isError) {
    return "Error";
  }

  if (!user) {
    return "No user";
  }

  return <User user={user} />;
};
