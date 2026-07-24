/**
 * Prefijo del deploy en GitHub Pages (`/FoodSport`).
 * Vacío en desarrollo local.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefija rutas absolutas del sitio para que funcionen con basePath. */
export function withBasePath(path: string): string {
  if (!path || path.startsWith("http") || path.startsWith("//") || path.startsWith("#")) {
    return path;
  }
  if (!path.startsWith("/")) {
    return path;
  }
  return `${basePath}${path}`;
}
