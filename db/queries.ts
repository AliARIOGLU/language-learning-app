import { cache } from "react";
import db from "./drizzle";

// Her bu fonksiyonu çağırdığımda db isteği atmasın diye cacheledim.
export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany();

  return data;
});
