const getAvatarInitials = (name?: string) => {
  if (!name) return "YH";

  return name
    .split(" ")
    .map((word) => word[0]?.toUpperCase())
    .slice(0, 2)
    .join("");
};

export { getAvatarInitials };