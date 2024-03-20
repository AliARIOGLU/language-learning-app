import { auth } from "@clerk/nextjs";

const adminUsers = ["user_2dlS7PXbBuR0UtbjKm8gJvwPF5n"];

export const getIsAdmin = () => {
  const { userId } = auth();

  if (!userId) return false;

  return adminUsers.includes(userId);
};
