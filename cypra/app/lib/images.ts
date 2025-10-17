export const Images = {
  // Website logo placed under public/
  logo: "/CYPRA_Cybersecurity_Logo_-_Blue-Gray_Trust-removebg-preview.png",
  // Light-mode logo (Mask group.png)
  logoLight: "/Mask group.png",
  // Example assets used in the template
  next: "/next.svg",
  vercel: "/vercel.svg",
};

export type ImageKey = keyof typeof Images;

export function getImagePath(key: ImageKey): string {
  return Images[key];
}


