import "../utils/env";
import { writeFileSync } from "fs";
import { resolve } from "path";
import consola from "consola";
import { supabase } from "../services/supabase";

export async function generatePrerenderRoutes() {
  const { data: books, error } = await supabase.from("Books").select("*");

  if (error) throw error;

  const bookRoutes = books.map((book) => `/books/${book.name}`);
  const chapterRoutes = books.reduce((acc, book) => {
    const routes = Array.from({ length: book.chapters })
      .map((_, i) => i + 1)
      .map((chapter) => `/books/${book.name}/${chapter}`);
    return [...acc, ...routes];
  }, [] as string[]);

  consola.info(
    "Prerendering routes:",
    JSON.stringify(["/", ...bookRoutes], null, 2),
    `Ignoring ${chapterRoutes.length} chapter routes from ${bookRoutes.length} books.}`
  );

  writeFileSync(
    resolve(__dirname, "../.prerender/routes.json"),
    JSON.stringify(["/", ...bookRoutes], null, 2)
  );
}

generatePrerenderRoutes()
  .then(() => consola.success("successfully prerendered routes"))
  .catch(consola.error);
